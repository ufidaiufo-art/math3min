/**
 * 题目类型定义
 * 定义了解题步骤、类似题目推荐和题目数据的接口
 */

/** 题目类型枚举 */
export enum QuestionType {
  SINGLE_CHOICE = 'single_choice',
  MULTI_CHOICE = 'multi_choice',
  FILL_BLANK = 'fill_blank',
  JUDGE = 'judge',
}

/** 解题步骤 */
export interface SolutionStep {
  step: number
  title: string
  content: string
  highlight?: boolean // 关键步骤高亮
  formula?: string // 数学公式
}

/** 类似题目推荐 */
export interface SimilarQuestion {
  id: string
  content: string
  difficulty: 'easy' | 'medium' | 'hard'
}

/** 题目数据 */
export interface QuestionData {
  id: string
  chapterId: string
  knowledgePointId: string
  type: 'single_choice' | 'fill_blank' | 'judge'
  content: string
  options?: string[]
  answer: string
  analysis: string // 简要解析（向后兼容）
  difficulty: 'easy' | 'medium' | 'hard'
  points: number
  year?: string
  district?: string
  examType?: string
  // 增强解析功能
  thinking?: string // 解题思路说明
  steps?: SolutionStep[] // 详细解题步骤
  keyPoints?: string[] // 关键知识点
  commonMistakes?: string[] // 常见错误
  similarQuestions?: SimilarQuestion[] // 类似题目推荐
}
