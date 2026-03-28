import { POINTS_RULES, calculatePoints, type PointsRuleType } from '@constants/points'
import { useUserStore } from '@stores/userStore'

/**
 * 授予积分
 */
export const awardPoints = async (
  type: PointsRuleType,
  sourceId: string,
  context?: { streak?: number }
): Promise<{ success: boolean; points: number }> => {
  const points = calculatePoints(type, context)
  const { updatePoints } = useUserStore.getState()
  
  // 更新用户积分
  updatePoints(points)
  
  // TODO: 同步到服务器
  // await syncPointsToServer(type, points, sourceId)
  
  return { success: true, points }
}

/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * 格式化时间(秒 -> mm:ss)
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

/**
 * 格式化日期
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
}
