import { useState, useEffect, useCallback } from 'react'
import { chapters, getChapterById, type ChapterData } from '../data/chapters'

export interface UseChaptersReturn {
  chapters: ChapterData[]
  currentChapter: ChapterData | null
  isLoading: boolean
  error: Error | null
  getChapterById: (id: string) => ChapterData | undefined
  getChaptersByStatus: (status: 'completed' | 'in_progress' | 'available' | 'locked') => ChapterData[]
}

// 模拟用户进度数据
const mockChapterProgress: Record<string, { status: 'completed' | 'in_progress' | 'available' | 'locked'; progress: number }> = {
  ch1: { status: 'completed', progress: 100 },
  ch2: { status: 'in_progress', progress: 60 },
  ch3: { status: 'available', progress: 0 },
  ch4: { status: 'locked', progress: 0 },
  ch5: { status: 'locked', progress: 0 },
  ch6: { status: 'locked', progress: 0 },
  ch7: { status: 'locked', progress: 0 },
  ch8: { status: 'locked', progress: 0 },
  ch9: { status: 'locked', progress: 0 },
  ch10: { status: 'locked', progress: 0 },
}

export const useChapters = (): UseChaptersReturn => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [currentChapter, setCurrentChapter] = useState<ChapterData | null>(null)

  // 获取章节列表（带进度信息）
  const chaptersWithProgress = chapters.map(ch => ({
    ...ch,
    status: mockChapterProgress[ch.id]?.status || 'locked',
    progress: mockChapterProgress[ch.id]?.progress || 0
  }))

  const getChapterByIdCallback = useCallback((id: string) => {
    return getChapterById(id)
  }, [])

  const getChaptersByStatus = useCallback((status: 'completed' | 'in_progress' | 'available' | 'locked') => {
    return chaptersWithProgress.filter(ch => mockChapterProgress[ch.id]?.status === status)
  }, [])

  return {
    chapters: chaptersWithProgress,
    currentChapter,
    isLoading,
    error,
    getChapterById: getChapterByIdCallback,
    getChaptersByStatus
  }
}

export default useChapters
