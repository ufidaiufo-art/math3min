import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserInfo } from '../types'

interface UserState {
  userInfo: UserInfo | null
  isLogin: boolean
  
  setUserInfo: (info: UserInfo) => void
  updatePoints: (points: number) => void
  updateStreak: (days: number) => void
  logout: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userInfo: null,
      isLogin: false,
      
      setUserInfo: (info) => set({ 
        userInfo: info, 
        isLogin: true 
      }),
      
      updatePoints: (points) => set((state) => ({
        userInfo: state.userInfo ? {
          ...state.userInfo,
          points: state.userInfo.points + points
        } : null
      })),
      
      updateStreak: (days) => set((state) => ({
        userInfo: state.userInfo ? {
          ...state.userInfo,
          streakDays: days
        } : null
      })),
      
      logout: () => set({ 
        userInfo: null, 
        isLogin: false 
      }),
    }),
    {
      name: 'math3min-user',
      partialize: (state) => ({ 
        userInfo: state.userInfo,
        isLogin: state.isLogin 
      }),
    }
  )
)
