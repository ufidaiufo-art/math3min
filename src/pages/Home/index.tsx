import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { chapters, type ChapterData } from '../../data/chapters'
import { useProgressStore } from '../../stores'
import { UnlockEffect } from '../../components/effects'

/**
 * ==================== 成就勋章组件 ====================
 * 显示用户获得的成就徽章
 */
interface AchievementBadgeProps {
  icon: string    // 图标emoji
  label: string   // 成就名称
  color: string   // 背景色样式
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ icon, label, color }) => (
  <div className={`flex flex-col items-center p-3 rounded-2xl ${color} transform hover:scale-105 transition-transform cursor-pointer`}>
    <span className="text-3xl mb-1">{icon}</span>
    <span className="text-xs font-bold">{label}</span>
  </div>
)

/**
 * ==================== 首页组件 ====================
 * 
 * 功能说明：
 * - 展示用户学习统计（完成章节数、做题数、正确率）
 * - 显示成就勋章系统
 * - 提供错题本快速入口
 * - 展示知识地图（章节列表）
 * - 显示AI学习助手和知识点笔记入口
 */
const Home: React.FC = () => {
  // ==================== Store 数据获取 ====================
  // 从进度Store获取学习统计数据
  const { 
    totalStudyTime,      // 总学习时长
    totalQuestions,      // 总答题数
    correctCount,        // 答对题数
    getCorrectRate,      // 获取正确率函数
    chapterProgress,     // 各章节进度
    studyStreak,         // 连续学习天数
    achievements,        // 已获成就
    wrongQuestions       // 错题列表
  } = useProgressStore()
  
  // 计算正确率
  const correctRate = getCorrectRate()

  // ==================== 本地状态 ====================
  // 章节解锁动画效果
  const [showUnlock, setShowUnlock] = useState(false)
  const [unlockedChapter, setUnlockedChapter] = useState<string>('')

  // ==================== 辅助函数 ====================

  /**
   * 获取章节状态样式配置
   * 根据章节状态返回对应的样式和图标
   * 
   * @param status 章节状态：locked(锁定) | available(可开始) | in_progress(学习中) | completed(已完成)
   * @returns 样式配置对象
   */
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return { 
          label: '已完成', 
          color: 'bg-green-100 text-green-600 border-green-400',
          icon: '🏆',
          bgIcon: 'bg-green-100'
        }
      case 'in_progress':
        return { 
          label: '学习中', 
          color: 'bg-orange-100 text-orange-600 border-orange-400',
          icon: '✏️',
          bgIcon: 'bg-orange-100'
        }
      case 'available':
        return { 
          label: '可开始', 
          color: 'bg-blue-50 text-blue-600 border-blue-300',
          icon: '📖',
          bgIcon: 'bg-blue-50'
        }
      default:
        return { 
          label: '未解锁', 
          color: 'bg-gray-100 text-gray-400 border-gray-200',
          icon: '🔒',
          bgIcon: 'bg-gray-100'
        }
    }
  }

  /**
   * 计算完成的章节数
   * 遍历章节进度，统计状态为 completed 的章节数量
   */
  const completedCount = Object.values(chapterProgress).filter(
    (p: any) => p.status === 'completed'
  ).length
  
  /**
   * 获取成就勋章数据
   * 根据用户学习进度动态生成成就列表
   * 
   * 成就类型：
   * - streak_7: 连续学习7天
   * - questions_100: 完成100道题
   * - master: 正确率达到90%
   * - 进步快: 默认解锁
   * 
   * @returns 成就列表
   */
  const getAchievementData = () => {
    const list = []
    
    // 连续学习7天成就
    if (achievements.includes('streak_7') || studyStreak >= 7) {
      list.push({ icon: '🔥', label: '7天连胜', color: 'bg-red-100 text-red-600', unlocked: true })
    } else {
      list.push({ icon: '🔒', label: '7天连胜', color: 'bg-gray-100 text-gray-400', unlocked: false })
    }
    
    // 百题斩成就
    if (achievements.includes('questions_100') || totalQuestions >= 100) {
      list.push({ icon: '🎯', label: '百题斩', color: 'bg-blue-100 text-blue-600', unlocked: true })
    } else {
      list.push({ icon: '🔒', label: '百题斩', color: 'bg-gray-100 text-gray-400', unlocked: false })
    }
    
    // 小学霸成就（正确率90%+）
    if (achievements.includes('master') || correctRate >= 90) {
      list.push({ icon: '⭐', label: '小学霸', color: 'bg-yellow-100 text-yellow-600', unlocked: true })
    } else {
      list.push({ icon: '🔒', label: '小学霸', color: 'bg-gray-100 text-gray-400', unlocked: false })
    }
    
    // 默认解锁的进步快成就
    list.push({ icon: '🚀', label: '进步快', color: 'bg-purple-100 text-purple-600', unlocked: true })
    
    return list.slice(0, 4)
  }
  
  const achievementList = getAchievementData()

  // ==================== 渲染 ====================

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ==================== 顶部用户信息区 ====================
       * 包含：
       * - 用户头像和名称
       * - 连续学习天数显示
       * - 积分总数
       * - 统计卡片（完成章节数、做题数、正确率）
       */}
      <header className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-6 pb-10 rounded-b-[2.5rem] shadow-xl">
        <div className="flex items-center justify-between mb-6">
          {/* 用户信息 */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center border-3 border-white/40 shadow-inner">
              <span className="text-3xl">👦</span>
            </div>
            <div>
              <h2 className="font-bold text-xl">宣宣同学</h2>
              <p className="text-white/90 text-sm font-medium">
                {studyStreak > 0 ? `🔥 连续学习 ${studyStreak} 天` : '初一数学小达人 🌟'}
              </p>
            </div>
          </div>
          
          {/* 积分显示 */}
          <div className="flex items-center bg-white/25 rounded-full px-4 py-2 shadow-lg">
            <span className="text-2xl mr-2">💎</span>
            {/* 积分计算：每道题10分 + 每答对一题额外5分 */}
            <span className="font-bold text-xl">{totalQuestions * 10 + correctCount * 5}</span>
          </div>
        </div>
        
        {/* 统计卡片网格 */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 rounded-2xl p-4 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold">{completedCount}</p>
            <p className="text-sm text-white/80 font-medium">🏆 完成章节</p>
          </div>
          <div className="bg-white/20 rounded-2xl p-4 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold">{totalQuestions}</p>
            <p className="text-sm text-white/80 font-medium">✏️ 做题数</p>
          </div>
          <div className="bg-white/20 rounded-2xl p-4 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold">{correctRate}%</p>
            <p className="text-sm text-white/80 font-medium">🎯 正确率</p>
          </div>
        </div>
      </header>
      
      {/* ==================== 成就勋章区域 ==================== */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-2">🏅</span> 我的勋章
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {achievementList.map((ach, idx) => (
              <AchievementBadge key={idx} {...ach} />
            ))}
          </div>
        </div>

        {/* ==================== 错题本入口 ====================
         * 显示待复习错题数量，快速跳转到错题本
         */}
        <Link
          to="/wrong-book"
          className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-md mt-4 active:scale-95 transition-transform"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mr-3">
              📕
            </div>
            <div>
              <p className="font-bold text-gray-800">错题本</p>
              <p className="text-sm text-gray-500">温故而知新，复习薄弱环节</p>
            </div>
          </div>
          <div className="flex items-center">
            {wrongQuestions.length > 0 && (
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold mr-2">
                {wrongQuestions.length}道待复习
              </span>
            )}
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </Link>
      </div>

      {/* ==================== 知识地图 ====================
       * 展示所有章节列表，每个章节显示：
       * - 章节状态图标和标签
       * - 章节标题和副标题
       * - 预估时间和题目数量
       * - 学习进度条
       * 
       * 锁定章节不可点击，其他章节点击进入视频学习页
       */}
      <main className="p-4 pb-28 mt-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <span className="text-2xl mr-2">🗺️</span> 知识地图
          </h3>
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">七年级上册</span>
        </div>
        
        <div className="space-y-4">
          {chapters.map((chapter: ChapterData) => {
            // 获取当前章节的进度数据
            const progress = chapterProgress[chapter.id]
            // 根据状态获取对应的样式配置
            const config = getStatusConfig(progress?.status || 'locked')
            // 判断章节是否锁定
            const isLocked = false
            
            return (
              <Link 
                key={chapter.id}
                to={isLocked ? '#' : `/video/${chapter.id}`}
                className={`block relative bg-white rounded-3xl p-5 shadow-md border-2 transition-all active:scale-95 ${
                  isLocked ? 'opacity-50' : 'hover:shadow-xl hover:-translate-y-1'
                } ${config.color.replace('text-', 'border-').split(' ')[1]}`}
                onClick={(e) => isLocked && e.preventDefault()}
              >
                <div className="flex items-center">
                  {/* 章节图标 */}
                  <div className={`w-16 h-16 rounded-2xl ${config.bgIcon} flex items-center justify-center text-3xl mr-4 shadow-inner`}>
                    {config.icon}
                  </div>
                  
                  {/* 章节信息 */}
                  <div className="flex-1">
                    {/* 状态标签 + 重点标记 */}
                    <div className="flex items-center mb-1">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full mr-2 ${config.color}`}>
                        {config.label}
                      </span>
                      {chapter.isKeyChapter && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">🔥 重点</span>
                      )}
                    </div>
                    
                    {/* 章节标题 */}
                    <h4 className="font-bold text-gray-800 text-lg">第{chapter.order}章 {chapter.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{chapter.subtitle}</p>
                    
                    {/* 时间和题目数 */}
                    <div className="flex items-center mt-3 text-sm text-gray-500 font-medium">
                      <span className="mr-4 flex items-center">
                        <span className="mr-1">⏱️</span> {chapter.estimatedTime}分钟
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">📝</span> {chapter.questionCount}道题目
                      </span>
                    </div>
                  </div>
                  
                  {/* 箭头图标（仅未锁定章节显示） */}
                  {!isLocked && (
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* 学习进度条 */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                    <span>学习进度</span>
                    <span className={progress?.videoProgress === 100 ? 'text-green-600' : 'text-blue-600'}>
                      {progress?.videoProgress || 0}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        progress?.videoProgress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}
                      style={{ width: `${progress?.videoProgress || 0}%` }}
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* ==================== AI诊断卡片 ====================
         * 跳转到学习报告页面，展示AI分析结果
         */}
        <Link to="/report">
          <div className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xl flex items-center">
                  <span className="text-2xl mr-2">🤖</span> AI 学习小助手
                </h4>
                <p className="text-white/90 text-base mt-2">让我来帮你找到薄弱点，一起进步！💪</p>
              </div>
              <div className="w-14 h-14 bg-white/25 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
            </div>
          </div>
        </Link>

        {/* ==================== 知识点笔记入口 ====================
         * 跳转到知识点笔记页面，查看完整初一数学知识点
         */}
        <Link to="/notes">
          <div className="mt-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-6 text-white shadow-xl transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xl flex items-center">
                  <span className="text-2xl mr-2">📚</span> 知识点笔记
                </h4>
                <p className="text-white/90 text-base mt-2">完整的初一数学知识点，随时查阅复习！📖</p>
              </div>
              <div className="w-14 h-14 bg-white/25 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
            </div>
          </div>
        </Link>
      </main>
      
      {/* ==================== 章节解锁动画效果 ==================== */}
      <UnlockEffect
        show={showUnlock}
        chapterName={unlockedChapter}
        onComplete={() => {
          setShowUnlock(false)
          setUnlockedChapter('')
        }}
      />
    </div>
  )
}

export default Home
