import { create } from 'zustand'
import type { Question, AnswerRecord } from '../types'

interface PracticeState {
  questions: Question[]
  currentIndex: number
  answers: Record<string, string | string[]>
  answerRecords: AnswerRecord[]
  isSubmitting: boolean
  startTime: number
  
  setQuestions: (questions: Question[]) => void
  setCurrentIndex: (index: number) => void
  answerQuestion: (questionId: string, answer: string | string[]) => void
  addAnswerRecord: (record: AnswerRecord) => void
  setIsSubmitting: (isSubmitting: boolean) => void
  reset: () => void
}

const initialState = {
  questions: [],
  currentIndex: 0,
  answers: {},
  answerRecords: [],
  isSubmitting: false,
  startTime: 0,
}

export const usePracticeStore = create<PracticeState>((set) => ({
  ...initialState,
  
  setQuestions: (questions) => set({ 
    questions, 
    startTime: Date.now() 
  }),
  
  setCurrentIndex: (index) => set({ currentIndex: index }),
  
  answerQuestion: (questionId, answer) => set((state) => ({
    answers: {
      ...state.answers,
      [questionId]: answer,
    },
  })),
  
  addAnswerRecord: (record) => set((state) => ({
    answerRecords: [...state.answerRecords, record],
  })),
  
  setIsSubmitting: (isSubmitting) => set({ isSubmitting }),
  
  reset: () => set(initialState),
}))
