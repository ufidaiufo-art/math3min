/**
 * 题目数据
 * 
 * @deprecated 此文件已拆分到 src/data/questions/ 目录
 * 建议从新的位置导入：import { questions, getQuestionsByChapter } from './questions'
 * 
 * 本文件保留以保持向后兼容性
 */

// 从拆分后的模块重新导出所有内容
export {
  questions,
  getQuestionsByChapter,
  getQuestionsByKnowledgePoint,
  getQuestionById,
  getAllQuestions,
} from './questions/index'

export { QuestionType } from './questions/types'
export type {
  QuestionData,
  SolutionStep,
  SimilarQuestion,
} from './questions/types'
