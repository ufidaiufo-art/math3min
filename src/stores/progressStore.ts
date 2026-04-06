import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { DiagnosisReport } from '../types'

/**
 * 章节进度接口
 * 记录每个章节的学习状态、视频进度、练习进度等信息
 */
interface ChapterProgress {
  chapterId: string
  status: 'locked' | 'available' | 'in_progress' | 'completed'
  videoProgress: number        // 视频观看进度（百分比）
  practiceProgress: number     // 练习题完成进度（百分比）
  completedQuestions: number   // 已完成题目数量
  lastStudyAt?: string         // 最后学习时间（ISO格式）
  completedAt?: string         // 完成时间（ISO格式）
}

/**
 * 知识点答题统计接口
 * 用于AI诊断分析，记录每个知识点的答题情况
 */
interface KnowledgePointStats {
  knowledgePointId: string
  chapterId: string
  totalAttempts: number        // 总尝试次数
  correctCount: number         // 答对次数
  wrongCount: number           // 答错次数
  lastAttemptAt?: string       // 最后尝试时间
}

/**
 * 章节能力评分接口
 * 用于报告页面展示各章节掌握程度
 */
interface ChapterAbility {
  chapterId: string
  score: number                // 掌握评分（0-100）
  totalQuestions: number       // 总答题数
  correctQuestions: number     // 正确答题数
}

/**
 * 进度状态接口
 * 定义Store中所有的状态和操作方法
 */
interface ProgressState {
  // ==================== 基础统计 ====================
  totalStudyTime: number              // 总学习时长（分钟）
  totalQuestions: number              // 总答题数
  correctCount: number                // 答对题数
  currentReport: DiagnosisReport | null  // 当前AI诊断报告
  
  // ==================== 章节进度 ====================
  chapterProgress: Record<string, ChapterProgress>  // 各章节进度映射
  
  // ==================== 学习连续记录 ====================
  studyStreak: number                 // 连续学习天数
  lastStudyDate: string               // 最后学习日期
  
  // ==================== 成就系统 ====================
  achievements: string[]               // 已获得的成就ID列表
  
  // ==================== 知识点统计 ====================
  knowledgePointStats: Record<string, KnowledgePointStats>  // 知识点答题统计映射
  
  // ==================== 错题管理 ====================
  wrongQuestions: string[]             // 错题ID列表
  masteredQuestions: string[]          // 已掌握错题ID列表
  
  // ==================== 操作方法 ====================
  
  /** 增加学习时长 */
  addStudyTime: (minutes: number) => void
  
  /** 记录答题结果 */
  recordQuestion: (isCorrect: boolean, questionId: string, knowledgePointId: string, chapterId: string) => void
  
  /** 设置当前诊断报告 */
  setCurrentReport: (report: DiagnosisReport | null) => void
  
  /** 获取整体正确率 */
  getCorrectRate: () => number
  
  /** 更新章节进度 */
  updateChapterProgress: (chapterId: string, progress: Partial<ChapterProgress>) => void
  
  /** 获取章节进度 */
  getChapterProgress: (chapterId: string) => ChapterProgress | undefined
  
  /** 获取薄弱知识点（用于AI推荐） */
  getWeakPoints: () => Array<{ knowledgePointId: string; chapterId: string; name: string; rate: number; wrongCount: number }>
  
  /** 获取各章节能力评分 */
  getChapterAbilities: () => ChapterAbility[]
  
  /** 获取AI推荐学习内容 */
  getRecommendations: () => Array<{ type: string; title: string; description: string; chapterId: string }>
  
  /** 重置所有进度 */
  resetProgress: () => void
  
  /** 导出数据（用于跨设备迁移） */
  exportData: () => string
  
  /** 导入数据 */
  importData: (data: string) => boolean
  
  /** 标记错题已掌握 */
  markQuestionMastered: (questionId: string) => void
  
  /** 取消掌握标记 */
  unmarkQuestionMastered: (questionId: string) => void
  
  /** 检查题目是否已掌握 */
  isQuestionMastered: (questionId: string) => boolean
}

/**
 * 获取初始章节进度
 * 新用户默认第一章可开始学习，其余章节锁定
 * @returns 章节进度初始状态
 */
const getInitialChapterProgress = (): Record<string, ChapterProgress> => ({
  ch1: { chapterId: 'ch1', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch2: { chapterId: 'ch2', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch3: { chapterId: 'ch3', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch4: { chapterId: 'ch4', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch5: { chapterId: 'ch5', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch6: { chapterId: 'ch6', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch7: { chapterId: 'ch7', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch8: { chapterId: 'ch8', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch9: { chapterId: 'ch9', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
  ch10: { chapterId: 'ch10', status: 'available', videoProgress: 0, practiceProgress: 0, completedQuestions: 0 },
})

/**
 * 检查并更新连续学习天数
 * 算法说明：
 * - 如果今天已学习，不更新
 * - 如果昨天学习过，连续天数+1
 * - 如果断签，重置为1天
 * 
 * @param lastStudyDate 最后学习日期字符串
 * @returns 更新后的连续天数和当前日期
 */
const checkStudyStreak = (lastStudyDate: string): { streak: number; date: string } => {
  const today = new Date().toDateString()
  const lastDate = new Date(lastStudyDate).toDateString()
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  
  if (today === lastDate) {
    // 今天已经学习过，不更新
    return { streak: -1, date: lastStudyDate }
  } else if (yesterday.toDateString() === lastDate) {
    // 昨天学习过，连续天数+1
    return { streak: 1, date: today }
  } else {
    // 断签了，重置为1天
    return { streak: 0, date: today }
  }
}

/**
 * 自动解锁下一章
 * 当当前章节完成时，自动将下一章状态设为可用
 * 
 * @param currentProgress 当前进度对象
 * @param chapterId 已完成章节ID
 * @returns 更新后的进度对象
 */
const autoUnlockNextChapter = (currentProgress: Record<string, ChapterProgress>, chapterId: string): Record<string, ChapterProgress> => {
  // 从章节ID提取数字（如 'ch1' -> 1）
  const chapterNum = parseInt(chapterId.replace('ch', ''))
  const nextChapterId = `ch${chapterNum + 1}`
  
  // 如果下一章存在且处于锁定状态，则解锁
  if (currentProgress[nextChapterId] && currentProgress[nextChapterId].status === 'locked') {
    return {
      ...currentProgress,
      [nextChapterId]: {
        ...currentProgress[nextChapterId],
        status: 'available'
      }
    }
  }
  return currentProgress
}

/**
 * 学习进度状态管理
 * 
 * 使用 Zustand + persist 中间件实现：
 * - 状态管理：统一管理学习进度、答题记录、成就等
 * - 数据持久化：自动保存到 localStorage，刷新不丢失
 * - 数据导入导出：支持跨设备迁移学习进度
 */
export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      // ==================== 初始状态 ====================
      totalStudyTime: 0,
      totalQuestions: 0,
      correctCount: 0,
      currentReport: null,
      chapterProgress: getInitialChapterProgress(),
      studyStreak: 0,
      lastStudyDate: '',
      achievements: [],
      knowledgePointStats: {},
      wrongQuestions: [],
      masteredQuestions: [],
      
      // ==================== 操作方法实现 ====================
      
      /**
       * 增加学习时长
       * 同时检查连续学习天数和成就
       */
      addStudyTime: (minutes) => set((state) => {
        const { streak, date } = checkStudyStreak(state.lastStudyDate)
        const newAchievements = [...state.achievements]
        
        // 计算新的连续天数
        const newStreak = streak === -1 ? state.studyStreak : (streak === 0 ? 1 : state.studyStreak + 1)
        
        // 检查连续学习7天成就
        if (newStreak >= 7 && !newAchievements.includes('streak_7')) {
          newAchievements.push('streak_7')
        }
        // 检查答题100道成就
        if (state.totalQuestions + 1 >= 100 && !newAchievements.includes('questions_100')) {
          newAchievements.push('questions_100')
        }
        
        return {
          totalStudyTime: state.totalStudyTime + minutes,
          studyStreak: newStreak,
          lastStudyDate: date || state.lastStudyDate,
          achievements: newAchievements
        }
      }),
      
      /**
       * 记录答题结果
       * 更新统计、错题本、知识点掌握情况
       */
      recordQuestion: (isCorrect, questionId, knowledgePointId, chapterId) => set((state) => {
        const newAchievements = [...state.achievements]
        const newCorrectCount = isCorrect ? state.correctCount + 1 : state.correctCount
        const newTotalQuestions = state.totalQuestions + 1
        
        // 检查成就
        if (newTotalQuestions >= 100 && !newAchievements.includes('questions_100')) {
          newAchievements.push('questions_100')
        }
        const correctRate = newTotalQuestions > 0 ? Math.round((newCorrectCount / newTotalQuestions) * 100) : 0
        if (correctRate >= 90 && newTotalQuestions >= 50 && !newAchievements.includes('master')) {
          newAchievements.push('master')
        }
        
        // 更新知识点统计
        const stats = { ...state.knowledgePointStats }
        const kpStats = stats[knowledgePointId] || {
          knowledgePointId,
          chapterId,
          totalAttempts: 0,
          correctCount: 0,
          wrongCount: 0
        }
        kpStats.totalAttempts += 1
        if (isCorrect) {
          kpStats.correctCount += 1
        } else {
          kpStats.wrongCount += 1
        }
        kpStats.lastAttemptAt = new Date().toISOString()
        stats[knowledgePointId] = kpStats
        
        // 更新错题本
        const wrongQs = [...state.wrongQuestions]
        if (!isCorrect && !wrongQs.includes(questionId)) {
          // 答错且未记录，添加到错题本
          wrongQs.push(questionId)
        } else if (isCorrect && wrongQs.includes(questionId)) {
          // 做对了就从错题中移除
          const index = wrongQs.indexOf(questionId)
          if (index > -1) wrongQs.splice(index, 1)
        }
        
        return {
          totalQuestions: newTotalQuestions,
          correctCount: newCorrectCount,
          achievements: newAchievements,
          knowledgePointStats: stats,
          wrongQuestions: wrongQs
        }
      }),
      
      /** 设置当前诊断报告 */
      setCurrentReport: (report) => set({ currentReport: report }),
      
      /**
       * 获取整体正确率
       * @returns 正确率百分比（0-100）
       */
      getCorrectRate: () => {
        const { totalQuestions, correctCount } = get()
        return totalQuestions > 0 
          ? Math.round((correctCount / totalQuestions) * 100) 
          : 0
      },

      /**
       * 更新章节进度
       * 如果章节完成，自动解锁下一章
       */
      updateChapterProgress: (chapterId, progress) => set((state) => {
        const currentChapter = state.chapterProgress[chapterId]
        const newProgress = {
          ...state.chapterProgress,
          [chapterId]: {
            ...currentChapter,
            chapterId,
            ...progress,
            lastStudyAt: new Date().toISOString()
          }
        }
        
        // 如果章节完成，解锁下一章
        let finalProgress = newProgress
        if (progress.status === 'completed' || (progress.videoProgress === 100 && progress.practiceProgress === 100)) {
          finalProgress = autoUnlockNextChapter(newProgress, chapterId)
        }
        
        return { chapterProgress: finalProgress }
      }),

      /** 获取指定章节的进度 */
      getChapterProgress: (chapterId) => {
        return get().chapterProgress[chapterId]
      },
      
      /**
       * 获取薄弱知识点（用于AI诊断和推荐）
       * 算法：掌握率低于70%且错题数>=2的知识点
       * @returns 薄弱知识点列表，按掌握率从低到高排序
       */
      getWeakPoints: () => {
        const { knowledgePointStats } = get()
        const weakPoints: Array<{ knowledgePointId: string; chapterId: string; name: string; rate: number; wrongCount: number }> = []
        
        // 知识点名称映射表
        const kpNames: Record<string, string> = {
          'kp1_1': '正数和负数', 'kp1_2': '数轴', 'kp1_3': '相反数', 'kp1_4': '绝对值',
          'kp1_5': '有理数比较', 'kp1_6': '有理数加法', 'kp1_7': '有理数减法',
          'kp1_8': '有理数乘法', 'kp1_9': '有理数除法', 'kp1_10': '有理数混合运算',
          'kp1_11': '倒数', 'kp1_12': '乘方',
          'kp2_1': '单项式', 'kp2_2': '多项式', 'kp2_3': '同类项', 'kp2_4': '去括号', 'kp2_5': '整式加减',
          'kp3_1': '一元一次方程', 'kp3_2': '等式性质', 'kp3_3': '解方程', 'kp3_4': '列方程',
          'kp3_5': '配套问题', 'kp3_6': '工程问题',
          'kp4_1': '几何图形', 'kp4_2': '点线面', 'kp4_3': '角的概念', 'kp4_4': '余角补角',
          'kp5_1': '相交线', 'kp5_2': '垂线', 'kp5_3': '三线八角', 'kp5_4': '平行线判定', 'kp5_5': '平行线性质',
          'kp6_1': '算术平方根', 'kp6_2': '平方根', 'kp6_3': '立方根', 'kp6_4': '无理数',
          'kp7_1': '坐标系', 'kp7_2': '象限', 'kp7_3': '对称', 'kp7_4': '平移',
          'kp8_1': '二元一次方程', 'kp8_2': '代入消元', 'kp8_3': '加减消元', 'kp8_4': '方程组应用',
          'kp9_1': '不等式性质', 'kp9_2': '解不等式', 'kp9_3': '不等式组', 'kp9_4': '不等式应用',
          'kp10_1': '调查方式', 'kp10_2': '频数分布', 'kp10_3': '统计图'
        }
        
        // 筛选薄弱知识点
        Object.values(knowledgePointStats).forEach((stats) => {
          if (stats.totalAttempts >= 2) {
            const rate = Math.round((stats.correctCount / stats.totalAttempts) * 100)
            // 掌握率低于70%且错题数>=2
            if (rate < 70 && stats.wrongCount >= 2) {
              weakPoints.push({
                knowledgePointId: stats.knowledgePointId,
                chapterId: stats.chapterId,
                name: kpNames[stats.knowledgePointId] || '未知知识点',
                rate,
                wrongCount: stats.wrongCount
              })
            }
          }
        })
        
        // 按掌握率从低到高排序，取前5个
        return weakPoints.sort((a, b) => a.rate - b.rate).slice(0, 5)
      },
      
      /**
       * 获取各章节能力评分
       * 根据知识点答题统计计算各章节的平均掌握率
       * @returns 章节能力评分列表
       */
      getChapterAbilities: () => {
        const { knowledgePointStats } = get()
        const chapterScores: Record<string, { total: number; correct: number; count: number }> = {}
        
        // 汇总各章节的答题数据
        Object.values(knowledgePointStats).forEach((stats) => {
          if (!chapterScores[stats.chapterId]) {
            chapterScores[stats.chapterId] = { total: 0, correct: 0, count: 0 }
          }
          chapterScores[stats.chapterId].total += stats.totalAttempts
          chapterScores[stats.chapterId].correct += stats.correctCount
          chapterScores[stats.chapterId].count += 1
        })
        
        // 计算各章节评分
        return Object.entries(chapterScores).map(([chapterId, data]) => ({
          chapterId,
          score: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
          totalQuestions: data.total,
          correctQuestions: data.correct
        }))
      },
      
      /**
       * 获取AI推荐学习内容
       * 基于薄弱知识点和错题生成个性化推荐
       * @returns 推荐列表（最多3条）
       */
      getRecommendations: () => {
        const weakPoints = get().getWeakPoints()
        const recommendations: Array<{ type: string; title: string; description: string; chapterId: string }> = []
        
        if (weakPoints.length > 0) {
          // 推荐复习最薄弱的知识点
          const weakest = weakPoints[0]
          recommendations.push({
            type: 'review',
            title: `复习：${weakest.name}`,
            description: `掌握率仅${weakest.rate}%，建议重新学习相关知识点并做专项练习`,
            chapterId: weakest.chapterId
          })
          
          // 推荐专项练习
          recommendations.push({
            type: 'practice',
            title: `专项练习：${weakest.name}`,
            description: `针对性练习${weakest.name}相关题目，巩固薄弱环节`,
            chapterId: weakest.chapterId
          })
        }
        
        // 如果有错题，推荐错题复习
        const { wrongQuestions } = get()
        if (wrongQuestions.length > 0) {
          recommendations.push({
            type: 'wrong',
            title: '错题回顾',
            description: `你有${wrongQuestions.length}道错题等待复习，温故知新`,
            chapterId: 'all'
          })
        }
        
        return recommendations.slice(0, 3)
      },
      
      /** 重置所有进度 */
      resetProgress: () => set({
        totalStudyTime: 0,
        totalQuestions: 0,
        correctCount: 0,
        currentReport: null,
        chapterProgress: getInitialChapterProgress(),
        studyStreak: 0,
        lastStudyDate: '',
        achievements: [],
        wrongQuestions: [],
        masteredQuestions: []
      }),
      
      /**
       * 导出数据（用于跨设备迁移）
       * 将学习进度编码为Base64字符串
       * @returns Base64编码的数据字符串
       */
      exportData: () => {
        const state = get()
        const exportObj = {
          totalStudyTime: state.totalStudyTime,
          totalQuestions: state.totalQuestions,
          correctCount: state.correctCount,
          chapterProgress: state.chapterProgress,
          studyStreak: state.studyStreak,
          lastStudyDate: state.lastStudyDate,
          achievements: state.achievements,
          exportAt: new Date().toISOString()
        }
        return btoa(JSON.stringify(exportObj))
      },
      
      /**
       * 导入数据
       * @param data Base64编码的数据字符串
       * @returns 导入是否成功
       */
      importData: (data) => {
        try {
          const decoded = JSON.parse(atob(data))
          if (decoded.chapterProgress) {
            set({
              totalStudyTime: decoded.totalStudyTime || 0,
              totalQuestions: decoded.totalQuestions || 0,
              correctCount: decoded.correctCount || 0,
              chapterProgress: decoded.chapterProgress,
              studyStreak: decoded.studyStreak || 0,
              lastStudyDate: decoded.lastStudyDate || '',
              achievements: decoded.achievements || [],
              masteredQuestions: decoded.masteredQuestions || []
            })
            return true
          }
          return false
        } catch (e) {
          console.error('导入数据失败:', e)
          return false
        }
      },

      /** 标记错题已掌握 */
      markQuestionMastered: (questionId) => set((state) => {
        if (!state.masteredQuestions.includes(questionId)) {
          return {
            masteredQuestions: [...state.masteredQuestions, questionId]
          }
        }
        return {}
      }),

      /** 取消掌握标记 */
      unmarkQuestionMastered: (questionId) => set((state) => ({
        masteredQuestions: state.masteredQuestions.filter(id => id !== questionId)
      })),

      /** 检查是否已掌握 */
      isQuestionMastered: (questionId) => {
        return get().masteredQuestions.includes(questionId)
      }
    }),
    {
      name: 'math3min-progress', // localStorage key
      version: 2,
      migrate: (persistedState: any) => {
        if (!persistedState?.chapterProgress) {
          return persistedState
        }

        return {
          ...persistedState,
          chapterProgress: Object.fromEntries(
            Object.entries(persistedState.chapterProgress).map(([chapterId, progress]: [string, any]) => [
              chapterId,
              {
                ...progress,
                status: progress?.status === 'locked' ? 'available' : progress?.status
              }
            ])
          )
        }
      },
      // 持久化部分状态
      partialize: (state) => ({
        totalStudyTime: state.totalStudyTime,
        totalQuestions: state.totalQuestions,
        correctCount: state.correctCount,
        chapterProgress: state.chapterProgress,
        studyStreak: state.studyStreak,
        lastStudyDate: state.lastStudyDate,
        achievements: state.achievements,
        knowledgePointStats: state.knowledgePointStats,
        wrongQuestions: state.wrongQuestions,
        masteredQuestions: state.masteredQuestions
      })
    }
  )
)

export default useProgressStore
