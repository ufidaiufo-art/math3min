import { create } from 'zustand'
import type { Chapter, ChapterProgress } from '../types'

interface ChapterState {
  chapters: Chapter[]
  currentChapter: Chapter | null
  chapterProgress: Record<string, ChapterProgress>
  
  setChapters: (chapters: Chapter[]) => void
  setCurrentChapter: (chapter: Chapter | null) => void
  updateChapterProgress: (chapterId: string, progress: Partial<ChapterProgress>) => void
}

export const useChapterStore = create<ChapterState>((set) => ({
  chapters: [],
  currentChapter: null,
  chapterProgress: {},
  
  setChapters: (chapters) => set({ chapters }),
  
  setCurrentChapter: (chapter) => set({ currentChapter: chapter }),
  
  updateChapterProgress: (chapterId, progress) => set((state) => ({
    chapterProgress: {
      ...state.chapterProgress,
      [chapterId]: {
        ...state.chapterProgress[chapterId],
        chapterId,
        ...progress,
      } as ChapterProgress,
    },
  })),
}))
