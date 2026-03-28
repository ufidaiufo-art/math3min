// 积分规则配置
export const POINTS_RULES = {
  // 视频学习
  VIDEO_COMPLETE: { points: 10, desc: '完成视频学习' },
  VIDEO_EARLY_COMPLETE: { points: 5, desc: '提前完成视频' },
  
  // 练习答题
  CORRECT_ANSWER: { points: 5, desc: '答对题目' },
  CORRECT_STREAK: { points: 2, desc: '连续答对奖励', maxStack: 5 },
  PERFECT_PRACTICE: { points: 20, desc: '完美练习(全对)' },
  
  // 连续学习
  DAILY_LOGIN: { points: 5, desc: '每日登录' },
  STREAK_7: { points: 50, desc: '连续学习7天' },
  STREAK_30: { points: 200, desc: '连续学习30天' },
  
  // 徽章成就
  FIRST_BADGE: { points: 30, desc: '获得首个徽章' },
  BADGE_UNLOCK: { points: 20, desc: '解锁新徽章' },
  
  // 分享互动
  SHARE_APP: { points: 10, desc: '分享应用', dailyLimit: 3 },
  INVITE_FRIEND: { points: 50, desc: '邀请好友注册' },
} as const

export type PointsRuleType = keyof typeof POINTS_RULES

/**
 * 计算积分
 */
export const calculatePoints = (
  type: PointsRuleType,
  context?: { streak?: number }
): number => {
  const rule = POINTS_RULES[type]
  let points = rule.points
  
  // 连续答对加成
  if (type === 'CORRECT_ANSWER' && context?.streak) {
    const streakBonus = Math.min(
      context.streak, 
      POINTS_RULES.CORRECT_STREAK.maxStack || 0
    )
    points += streakBonus * POINTS_RULES.CORRECT_STREAK.points
  }
  
  return points
}
