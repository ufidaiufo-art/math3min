// API 基础配置
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export const API_ENDPOINTS = {
  // 用户
  USER_LOGIN: '/user/login',
  USER_INFO: '/user/info',
  USER_POINTS: '/user/points',
  
  // 章节
  CHAPTER_LIST: '/chapters',
  CHAPTER_DETAIL: '/chapters/:id',
  CHAPTER_PROGRESS: '/chapters/:id/progress',
  
  // 视频
  VIDEO_DETAIL: '/videos/:id',
  VIDEO_PROGRESS: '/videos/:id/progress',
  
  // 题目
  QUESTION_LIST: '/questions',
  QUESTION_ANSWER: '/questions/:id/answer',
  
  // 报告
  REPORT_GENERATE: '/report/generate',
  REPORT_LATEST: '/report/latest',
  
  // 积分
  POINTS_RECORDS: '/points/records',
} as const
