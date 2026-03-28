import { useState, useEffect, useCallback } from 'react'
import { 
  questions, 
  getQuestionsByChapter, 
  getQuestionsByKnowledgePoint,
  getQuestionById,
  type QuestionData 
} from '../data/questions'

export interface AnswerRecord {
  questionId: string
  userAnswer: string
  isCorrect: boolean
  timeSpent: number
  answeredAt: string
}

export interface UseQuestionsReturn {
  questions: QuestionData[]
  currentQuestion: QuestionData | null
  currentIndex: number
  isLoading: boolean
  error: Error | null
  answerRecords: AnswerRecord[]
  getQuestionsByChapter: (chapterId: string) => QuestionData[]
  getQuestionsByKnowledgePoint: (knowledgePointId: string) => QuestionData[]
  getQuestionById: (id: string) => QuestionData | undefined
  setCurrentQuestion: (question: QuestionData | null) => void
  setCurrentIndex: (index: number) => void
  submitAnswer: (questionId: string, answer: string, timeSpent?: number) => boolean
  getCorrectRate: () => number
  resetRecords: () => void
}

// 模拟答题记录
let mockAnswerRecords: AnswerRecord[] = []

export const useQuestions = (): UseQuestionsReturn => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<QuestionData | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answerRecords, setAnswerRecords] = useState<AnswerRecord[]>(mockAnswerRecords)

  const getQuestionsByChapterCallback = useCallback((chapterId: string) => {
    return getQuestionsByChapter(chapterId)
  }, [])

  const getQuestionsByKnowledgePointCallback = useCallback((knowledgePointId: string) => {
    return getQuestionsByKnowledgePoint(knowledgePointId)
  }, [])

  const getQuestionByIdCallback = useCallback((id: string) => {
    return getQuestionById(id)
  }, [])

  const submitAnswer = useCallback((questionId: string, answer: string, timeSpent: number = 0): boolean => {
    const question = getQuestionById(questionId)
    if (!question) return false

    const isCorrect = answer === question.answer
    
    const record: AnswerRecord = {
      questionId,
      userAnswer: answer,
      isCorrect,
      timeSpent,
      answeredAt: new Date().toISOString()
    }

    mockAnswerRecords = [...mockAnswerRecords, record]
    setAnswerRecords(mockAnswerRecords)
    
    return isCorrect
  }, [])

  const getCorrectRate = useCallback((): number => {
    if (answerRecords.length === 0) return 0
    const correctCount = answerRecords.filter(r => r.isCorrect).length
    return Math.round((correctCount / answerRecords.length) * 100)
  }, [answerRecords])

  const resetRecords = useCallback(() => {
    mockAnswerRecords = []
    setAnswerRecords([])
  }, [])

  return {
    questions,
    currentQuestion,
    currentIndex,
    isLoading,
    error,
    answerRecords,
    getQuestionsByChapter: getQuestionsByChapterCallback,
    getQuestionsByKnowledgePoint: getQuestionsByKnowledgePointCallback,
    getQuestionById: getQuestionByIdCallback,
    setCurrentQuestion,
    setCurrentIndex,
    submitAnswer,
    getCorrectRate,
    resetRecords
  }
}

export default useQuestions
