import { create } from 'zustand'
import type { Video, VideoProgress } from '../types'

interface VideoState {
  currentVideo: Video | null
  videoProgress: Record<string, VideoProgress>
  
  setCurrentVideo: (video: Video | null) => void
  updateProgress: (videoId: string, progress: Partial<VideoProgress>) => void
  getProgress: (videoId: string) => VideoProgress | undefined
}

export const useVideoStore = create<VideoState>((set, get) => ({
  currentVideo: null,
  videoProgress: {},
  
  setCurrentVideo: (video) => set({ currentVideo: video }),
  
  updateProgress: (videoId, progress) => set((state) => ({
    videoProgress: {
      ...state.videoProgress,
      [videoId]: {
        ...state.videoProgress[videoId],
        videoId,
        ...progress,
      } as VideoProgress,
    },
  })),
  
  getProgress: (videoId) => get().videoProgress[videoId],
}))
