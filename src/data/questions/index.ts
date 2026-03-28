/**
 * 题目数据统一导出
 * 
 * 本目录包含按章节拆分的题目数据：
 * - chapter1.ts ~ chapter10.ts: 各章节的题目数据
 * - types.ts: 题目相关的类型定义
 * 
 * 使用方式：
 * import { questions, getQuestionsByChapter, getQuestionById } from './questions'
 */

import type { QuestionData } from './types'
import { chapter1Questions } from './chapter1'
import { chapter2Questions } from './chapter2'
import { chapter3Questions } from './chapter3'
import { chapter4Questions } from './chapter4'
import { chapter5Questions } from './chapter5'
import { chapter6Questions } from './chapter6'
import { chapter7Questions } from './chapter7'
import { chapter8Questions } from './chapter8'
import { chapter9Questions } from './chapter9'
import { chapter10Questions } from './chapter10'

// 合并所有章节的题目
export const questions: QuestionData[] = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions,
  ...chapter7Questions,
  ...chapter8Questions,
  ...chapter9Questions,
  ...chapter10Questions,
]

// 重新导出类型定义
export { QuestionType } from './types'
export type { QuestionData, SolutionStep, SimilarQuestion } from './types'

/**
 * 根据章节ID获取题目列表
 * @param chapterId 章节ID（支持 'ch1' 或 'chapter-1' 格式）
 * @returns 该章节的题目数组
 */
export const getQuestionsByChapter = (chapterId: string): QuestionData[] => {
  // 支持两种格式: 'ch1' 或 'chapter-1'
  const normalizedId = chapterId.startsWith('chapter-') 
    ? `ch${chapterId.replace('chapter-', '')}` 
    : chapterId
  return questions.filter(q => q.chapterId === normalizedId)
}

/**
 * 根据知识点ID获取题目列表
 * @param knowledgePointId 知识点ID
 * @returns 该知识点的题目数组
 */
export const getQuestionsByKnowledgePoint = (knowledgePointId: string): QuestionData[] => {
  return questions.filter(q => q.knowledgePointId === knowledgePointId)
}

/**
 * 根据题目ID获取单个题目
 * @param id 题目ID
 * @returns 题目对象或undefined
 */
export const getQuestionById = (id: string): QuestionData | undefined => {
  return questions.find(q => q.id === id)
}

/**
 * 获取所有题目
 * @returns 所有题目数组
 */
export const getAllQuestions = (): QuestionData[] => {
  return questions
}
