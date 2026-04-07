import { chapters } from '@features/curriculum/grade7/chapters'
import type { DiagnosisReport } from '../types'

export interface ReportRecommendation {
  type: 'review' | 'practice' | 'wrong'
  title: string
  description: string
  chapterId: string
}

export interface WeakPointInput {
  knowledgePointId: string
  chapterId: string
  name: string
  rate: number
  wrongCount: number
}

export interface ChapterAbilityInput {
  chapterId: string
  score: number
  totalQuestions: number
  correctQuestions: number
}

export interface ReportAnalysisInput {
  totalQuestions: number
  correctCount: number
  correctRate: number
  totalStudyTime: number
  studyStreak: number
  weakPoints: WeakPointInput[]
  chapterAbilities: ChapterAbilityInput[]
  recommendations: ReportRecommendation[]
}

export interface ReportViewModel {
  report: DiagnosisReport
  learningAdvice: string
}

export interface DimensionView {
  name: string
  color: string
  score: number
}

export const DIMENSION_DEFINITIONS = [
  { name: '基础运算', chapters: ['ch1', 'ch6'], color: 'bg-blue-500' },
  { name: '代数表达', chapters: ['ch2'], color: 'bg-purple-500' },
  { name: '方程求解', chapters: ['ch3', 'ch8'], color: 'bg-indigo-500' },
  { name: '几何图形', chapters: ['ch4', 'ch5'], color: 'bg-green-500' },
  { name: '应用分析', chapters: ['ch3', 'ch8', 'ch9'], color: 'bg-orange-500' },
  { name: '逻辑思维', chapters: ['ch1', 'ch5', 'ch7'], color: 'bg-pink-500' },
] as const

function calculateOverallScore(totalQuestions: number, correctRate: number) {
  if (totalQuestions === 0) return 0

  const bonus = Math.min(totalQuestions / 10, 10)
  return Math.min(Math.round(correctRate + bonus), 100)
}

function calculatePercentile(score: number) {
  return Math.max(50, Math.min(99, Math.round(score * 0.85 + 12)))
}

export function buildDimensionViews(chapterAbilities: ChapterAbilityInput[]): DimensionView[] {
  return DIMENSION_DEFINITIONS.map((dim) => {
    const chapters = dim.chapters as readonly string[]
    const relevantAbilities = chapterAbilities.filter((ca) => chapters.includes(ca.chapterId))
    const avgScore = relevantAbilities.length > 0
      ? Math.round(relevantAbilities.reduce((sum, ca) => sum + ca.score, 0) / relevantAbilities.length)
      : 0

    return { ...dim, score: avgScore }
  })
}

export function buildLocalLearningAdvice(input: ReportAnalysisInput) {
  if (input.weakPoints.length === 0) {
    if (input.correctRate >= 90) {
      return '你的基础已经比较扎实，建议开始增加综合题和稍难题，保持稳定练习节奏。'
    }
    return '当前状态不错，建议继续保持练习频率，优先巩固正确率波动较大的章节。'
  }

  const weakest = input.weakPoints[0]
  return `当前最需要优先加强的是“${weakest.name}”。建议先回看对应视频，再集中完成相关练习题，把错误率压下来。`
}

export function buildLocalDiagnosisReport(input: ReportAnalysisInput): ReportViewModel {
  const overallScore = calculateOverallScore(input.totalQuestions, input.correctRate)
  const percentile = calculatePercentile(overallScore)
  const dimensionViews = buildDimensionViews(input.chapterAbilities)

  const report: DiagnosisReport = {
    userId: 'local-user',
    generatedAt: new Date().toISOString(),
    overallScore,
    dimensions: dimensionViews.map((dim) => ({
      dimension: dim.name,
      score: dim.score,
      weight: 1,
      description: `${dim.name}维度当前评估分数为 ${dim.score} 分`
    })),
    weakPoints: input.weakPoints.slice(0, 5).map((point) => ({
      knowledgePointId: point.knowledgePointId,
      knowledgePointName: point.name,
      chapterId: point.chapterId,
      chapterName: chapters.find((chapter) => chapter.id === point.chapterId)?.title || point.chapterId,
      masteryRate: point.rate,
      wrongCount: point.wrongCount,
      suggestion: `优先回看 ${point.name} 对应知识点，并补练相关题目。`
    })),
    recommendedPath: input.recommendations.map((item) => item.title),
    recommendationItems: input.recommendations,
    ranking: {
      rank: Math.max(1, 100 - percentile + 1),
      total: 100,
      percentile
    },
    summary: input.weakPoints.length > 0
      ? `当前最薄弱的知识点是 ${input.weakPoints[0].name}，建议优先做针对性巩固。`
      : '当前没有明显薄弱知识点，建议继续保持训练节奏。',
    advice: buildLocalLearningAdvice(input)
  }

  return {
    report,
    learningAdvice: report.advice || ''
  }
}
