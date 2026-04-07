import { useState, useEffect, useCallback } from 'react'
import { 
  knowledgePoints, 
  getKnowledgePointsByChapter, 
  getKnowledgePointById,
  type KnowledgePointData 
} from '@features/curriculum/grade7/knowledgePoints'

export interface UseKnowledgePointsReturn {
  knowledgePoints: KnowledgePointData[]
  currentKnowledgePoint: KnowledgePointData | null
  isLoading: boolean
  error: Error | null
  getKnowledgePointsByChapter: (chapterId: string) => KnowledgePointData[]
  getKnowledgePointById: (id: string) => KnowledgePointData | undefined
  getNextKnowledgePoint: (currentId: string) => KnowledgePointData | null
  getPrevKnowledgePoint: (currentId: string) => KnowledgePointData | null
}

// 模拟学习进度
const mockLearningProgress: Record<string, { completed: boolean; videoWatched: boolean }> = {}

export const useKnowledgePoints = (): UseKnowledgePointsReturn => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [currentKnowledgePoint, setCurrentKnowledgePoint] = useState<KnowledgePointData | null>(null)

  const getKnowledgePointsByChapterCallback = useCallback((chapterId: string) => {
    return getKnowledgePointsByChapter(chapterId)
  }, [])

  const getKnowledgePointByIdCallback = useCallback((id: string) => {
    return getKnowledgePointById(id)
  }, [])

  const getNextKnowledgePoint = useCallback((currentId: string): KnowledgePointData | null => {
    const current = getKnowledgePointById(currentId)
    if (!current) return null
    
    const chapterKPs = getKnowledgePointsByChapter(current.chapterId)
    const currentIndex = chapterKPs.findIndex(kp => kp.id === currentId)
    
    if (currentIndex < chapterKPs.length - 1) {
      return chapterKPs[currentIndex + 1]
    }
    
    // 当前章节最后一个知识点，尝试获取下一章的第一个知识点
    const nextChapterId = `ch${parseInt(current.chapterId.replace('ch', '')) + 1}`
    const nextChapterKPs = getKnowledgePointsByChapter(nextChapterId)
    if (nextChapterKPs.length > 0) {
      return nextChapterKPs[0]
    }
    
    return null
  }, [])

  const getPrevKnowledgePoint = useCallback((currentId: string): KnowledgePointData | null => {
    const current = getKnowledgePointById(currentId)
    if (!current) return null
    
    const chapterKPs = getKnowledgePointsByChapter(current.chapterId)
    const currentIndex = chapterKPs.findIndex(kp => kp.id === currentId)
    
    if (currentIndex > 0) {
      return chapterKPs[currentIndex - 1]
    }
    
    // 当前章节第一个知识点，尝试获取上一章的最后一个知识点
    const prevChapterNum = parseInt(current.chapterId.replace('ch', '')) - 1
    if (prevChapterNum > 0) {
      const prevChapterId = `ch${prevChapterNum}`
      const prevChapterKPs = getKnowledgePointsByChapter(prevChapterId)
      if (prevChapterKPs.length > 0) {
        return prevChapterKPs[prevChapterKPs.length - 1]
      }
    }
    
    return null
  }, [])

  return {
    knowledgePoints,
    currentKnowledgePoint,
    isLoading,
    error,
    getKnowledgePointsByChapter: getKnowledgePointsByChapterCallback,
    getKnowledgePointById: getKnowledgePointByIdCallback,
    getNextKnowledgePoint,
    getPrevKnowledgePoint
  }
}

export default useKnowledgePoints
