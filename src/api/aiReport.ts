import { chapters } from '@features/curriculum/grade7/chapters'
import type { DiagnosisReport } from '../types'
import {
  buildLocalDiagnosisReport,
  type ReportAnalysisInput,
  type ReportViewModel,
} from '../utils/reportAnalysis'

function getEnv(name: keyof ImportMetaEnv) {
  return import.meta.env[name]?.trim()
}

export function isAiReportConfigured() {
  return Boolean(
    getEnv('VITE_AI_API_BASE_URL') &&
    getEnv('VITE_AI_API_KEY') &&
    getEnv('VITE_AI_MODEL')
  )
}

function extractJson(content: string) {
  const fenced = content.match(/```json\s*([\s\S]*?)```/i)
  if (fenced?.[1]) {
    return fenced[1].trim()
  }

  const firstBrace = content.indexOf('{')
  const lastBrace = content.lastIndexOf('}')
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    return content.slice(firstBrace, lastBrace + 1)
  }

  return content
}

function buildPrompt(input: ReportAnalysisInput) {
  const chapterNames = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter.title]))

  return [
    '你是一名严谨的初中数学学习诊断助手。',
    '请根据学生的学习数据，生成一个 JSON 对象。',
    '不要输出 Markdown，不要输出解释，不要输出代码块，只输出 JSON。',
    'JSON 字段必须包括：',
    'overallScore(number 0-100),',
    'dimensions(array，每项包含 dimension, score, weight, description),',
    'weakPoints(array，每项包含 knowledgePointId, knowledgePointName, chapterId, chapterName, masteryRate, wrongCount, suggestion),',
    'recommendedPath(string array),',
    'recommendationItems(array，每项包含 type, title, description, chapterId),',
    'ranking(object: rank, total, percentile),',
    'summary(string),',
    'advice(string)。',
    '要求：',
    '1. 语言使用简体中文。',
    '2. 结论要像老师写给家长或学生的学习诊断，具体、克制、可执行。',
    '3. 如果没有明显薄弱点，就给出保持提升的建议。',
    '4. 不要编造不存在的章节 ID。',
    `章节映射: ${JSON.stringify(chapterNames)}`,
    `学习数据: ${JSON.stringify(input)}`,
  ].join('\n')
}

function normalizeReport(raw: any, input: ReportAnalysisInput): ReportViewModel {
  const local = buildLocalDiagnosisReport(input)

  const report: DiagnosisReport = {
    userId: 'local-user',
    generatedAt: new Date().toISOString(),
    overallScore: Number(raw?.overallScore ?? local.report.overallScore),
    dimensions:
      Array.isArray(raw?.dimensions) && raw.dimensions.length > 0
        ? raw.dimensions
        : local.report.dimensions,
    weakPoints: Array.isArray(raw?.weakPoints) ? raw.weakPoints : local.report.weakPoints,
    recommendedPath: Array.isArray(raw?.recommendedPath)
      ? raw.recommendedPath
      : local.report.recommendedPath,
    recommendationItems:
      Array.isArray(raw?.recommendationItems) && raw.recommendationItems.length > 0
        ? raw.recommendationItems
        : local.report.recommendationItems,
    ranking:
      raw?.ranking && typeof raw.ranking === 'object'
        ? {
            rank: Number(raw.ranking.rank ?? local.report.ranking.rank),
            total: Number(raw.ranking.total ?? local.report.ranking.total),
            percentile: Number(raw.ranking.percentile ?? local.report.ranking.percentile),
          }
        : local.report.ranking,
    summary: typeof raw?.summary === 'string' ? raw.summary : local.report.summary,
    advice: typeof raw?.advice === 'string' ? raw.advice : local.report.advice,
  }

  return {
    report,
    learningAdvice: report.advice || local.learningAdvice,
  }
}

export async function generateDiagnosisReport(input: ReportAnalysisInput): Promise<ReportViewModel> {
  if (!isAiReportConfigured()) {
    return buildLocalDiagnosisReport(input)
  }

  const baseUrl = getEnv('VITE_AI_API_BASE_URL')!
  const apiKey = getEnv('VITE_AI_API_KEY')!
  const model = getEnv('VITE_AI_MODEL')!
  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), 12000)

  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.3,
        messages: [
          {
            role: 'system',
            content: '你是一个只输出严格 JSON 的学习诊断模型。',
          },
          {
            role: 'user',
            content: buildPrompt(input),
          },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`AI report request failed: ${response.status}`)
    }

    const data = await response.json()
    const content = data?.choices?.[0]?.message?.content
    if (!content || typeof content !== 'string') {
      throw new Error('AI report response missing message content')
    }

    const parsed = JSON.parse(extractJson(content))
    return normalizeReport(parsed, input)
  } catch (error) {
    console.error('AI report fallback to local analysis:', error)
    return buildLocalDiagnosisReport(input)
  } finally {
    window.clearTimeout(timeoutId)
  }
}

