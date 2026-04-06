/**
 * 用户相关类型
 */
export interface UserInfo {
  id: string
  nickname: string
  avatar: string
  grade: number
  points: number
  streakDays: number
  createdAt: string
}

export interface UserLearningRecord {
  userId: string
  totalStudyTime: number
  totalQuestions: number
  correctCount: number
  completedChapters: string[]
  badges: Badge[]
}

/**
 * 徽章类型
 */
export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  condition: string
  points: number
  unlockedAt?: string
}

/**
 * 章节/知识点类型
 */
export interface Chapter {
  id: string
  title: string
  subtitle?: string
  description: string
  order: number
  parentId?: string
  knowledgePoints: KnowledgePoint[]
  videoId: string
  questionCount: number
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTime: number
  icon?: string
  color?: string
}

export interface KnowledgePoint {
  id: string
  chapterId: string
  title: string
  content: string
  order: number
  timestamp: number
}

export interface ChapterProgress {
  chapterId: string
  status: 'locked' | 'available' | 'in_progress' | 'completed'
  videoProgress: number
  practiceProgress: number
  lastStudyAt: string
  completedAt?: string
}

/**
 * 视频类型
 */
export interface Video {
  id: string
  chapterId: string
  title: string
  description: string
  url: string
  poster: string
  duration: number
  resolution: string
  size: number
  createdAt: string
}

export interface VideoProgress {
  videoId: string
  currentTime: number
  progress: number
  isCompleted: boolean
  lastWatchedAt: string
}

/**
 * 题目类型
 * 从 questions 模块重新导出以保持统一
 */
export { QuestionType } from '../data/questions/types'
export type { 
  QuestionData as Question, 
  SolutionStep, 
  SimilarQuestion 
} from '../data/questions/types'

/**
 * 答题记录类型
 */
export interface AnswerRecord {
  questionId: string
  userAnswer: string | string[]
  isCorrect: boolean
  timeSpent: number
  answeredAt: string
}

/**
 * 诊断报告类型
 */
export interface DiagnosisReport {
  userId: string
  generatedAt: string
  overallScore: number
  dimensions: DimensionScore[]
  weakPoints: WeakPoint[]
  recommendedPath: string[]
  recommendationItems?: RecommendationItem[]
  ranking: {
    rank: number
    total: number
    percentile: number
  }
  summary?: string
  advice?: string
}

export interface DimensionScore {
  dimension: string
  score: number
  weight: number
  description: string
}

export interface WeakPoint {
  knowledgePointId: string
  knowledgePointName: string
  chapterId: string
  chapterName: string
  masteryRate: number
  wrongCount: number
  suggestion: string
}

export interface RecommendationItem {
  type: 'review' | 'practice' | 'wrong'
  title: string
  description: string
  chapterId: string
}

/**
 * 积分记录类型
 */
export interface PointsRecord {
  id: string
  userId: string
  points: number
  balance: number
  type: 'video' | 'practice' | 'badge' | 'streak' | 'daily'
  description: string
  createdAt: string
}

/**
 * 每日进度类型
 */
export interface DailyProgress {
  date: string
  studyTime: number
  questionsDone: number
  chaptersCompleted: number
}
