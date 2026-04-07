import React from 'react'
import { Link } from 'react-router-dom'
import { gradeOptions } from '@features/curriculum'
import { chapters } from '@features/curriculum/grade7/chapters'
import { useGradeRoute } from '@hooks/useGradeRoute'
import { useProgressStore } from '../../stores'

interface AchievementBadgeProps {
  icon: string
  label: string
  color: string
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ icon, label, color }) => (
  <div className={`flex flex-col items-center rounded-2xl p-3 ${color}`}>
    <span className="mb-1 text-3xl">{icon}</span>
    <span className="text-xs font-bold">{label}</span>
  </div>
)

const Home: React.FC = () => {
  const { gradeId, buildGradePath } = useGradeRoute()
  const {
    totalQuestions,
    correctCount,
    getCorrectRate,
    chapterProgress,
    studyStreak,
    achievements,
    wrongQuestions,
  } = useProgressStore()

  const correctRate = getCorrectRate()
  const completedCount = Object.values(chapterProgress).filter((item: any) => item.status === 'completed').length

  const achievementList = [
    {
      icon: achievements.includes('streak_7') || studyStreak >= 7 ? '🔥' : '🔒',
      label: '7天连学',
      color: achievements.includes('streak_7') || studyStreak >= 7 ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400',
    },
    {
      icon: achievements.includes('questions_100') || totalQuestions >= 100 ? '🎯' : '🔒',
      label: '百题斩',
      color: achievements.includes('questions_100') || totalQuestions >= 100 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400',
    },
    {
      icon: achievements.includes('master') || correctRate >= 90 ? '⭐' : '🔒',
      label: '小学霸',
      color: achievements.includes('master') || correctRate >= 90 ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-400',
    },
    {
      icon: '🚀',
      label: '进步快',
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="rounded-b-[2.5rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 pb-10 text-white shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 text-3xl shadow-inner">
              👧
            </div>
            <div>
              <h2 className="text-xl font-bold">宣宣同学</h2>
              <p className="text-sm font-medium text-white/90">
                {studyStreak > 0 ? `已连续学习 ${studyStreak} 天` : '开始今天的数学三分钟'}
              </p>
            </div>
          </div>

          <div className="flex items-center rounded-full bg-white/25 px-4 py-2 shadow-lg">
            <span className="mr-2 text-2xl">🏅</span>
            <span className="text-xl font-bold">{totalQuestions * 10 + correctCount * 5}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white/20 p-4 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold">{completedCount}</p>
            <p className="text-sm font-medium text-white/80">完成章节</p>
          </div>
          <div className="rounded-2xl bg-white/20 p-4 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold">{totalQuestions}</p>
            <p className="text-sm font-medium text-white/80">做题数</p>
          </div>
          <div className="rounded-2xl bg-white/20 p-4 text-center backdrop-blur-sm">
            <p className="text-3xl font-bold">{correctRate}%</p>
            <p className="text-sm font-medium text-white/80">正确率</p>
          </div>
        </div>
      </header>

      <div className="-mt-6 px-4">
        <div className="mb-4 rounded-3xl bg-white p-4 shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-800">学段选择</h3>
            <span className="text-xs text-gray-400">
              当前：{gradeOptions.find((grade) => grade.id === gradeId)?.shortLabel || '初一'}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {gradeOptions.map((grade) => (
              <Link
                key={grade.id}
                to={`/${grade.id}`}
                className={`rounded-2xl border px-3 py-3 text-center transition-all ${
                  grade.id === gradeId
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                    : grade.enabled
                    ? 'border-gray-200 bg-white text-gray-700'
                    : 'border-dashed border-gray-200 bg-gray-50 text-gray-400'
                }`}
              >
                <div className="text-sm font-bold">{grade.shortLabel}</div>
                <div className="mt-1 text-xs">{grade.enabled ? '已接入' : '筹备中'}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-lg">
          <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
            <span className="mr-2 text-2xl">🏆</span> 我的勋章
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {achievementList.map((achievement, index) => (
              <AchievementBadge key={index} {...achievement} />
            ))}
          </div>
        </div>

        <Link
          to={buildGradePath('/wrong-book')}
          className="mt-4 flex items-center justify-between rounded-2xl bg-white p-4 shadow-md transition-transform active:scale-95"
        >
          <div className="flex items-center">
            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl">
              📓
            </div>
            <div>
              <p className="font-bold text-gray-800">错题本</p>
              <p className="text-sm text-gray-500">温故知新，复习薄弱环节</p>
            </div>
          </div>
          <div className="flex items-center">
            {wrongQuestions.length > 0 && (
              <span className="mr-2 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                {wrongQuestions.length} 道待复习
              </span>
            )}
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      <main className="mt-6 p-4 pb-28">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="flex items-center text-xl font-bold text-gray-800">
            <span className="mr-2 text-2xl">🗺️</span> 知识地图
          </h3>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
            {gradeOptions.find((grade) => grade.id === gradeId)?.name || '初一数学'}
          </span>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter) => {
            const progress = chapterProgress[chapter.id]
            const isCompleted = progress?.status === 'completed'
            const isInProgress = progress?.status === 'in_progress'
            const progressValue = progress?.videoProgress || 0
            const statusLabel = isCompleted ? '已完成' : isInProgress ? '学习中' : '可开始'
            const statusStyle = isCompleted
              ? 'bg-green-100 text-green-600 border-green-400'
              : isInProgress
              ? 'bg-orange-100 text-orange-600 border-orange-400'
              : 'bg-blue-50 text-blue-600 border-blue-300'

            return (
              <Link
                key={chapter.id}
                to={buildGradePath(`/video/${chapter.id}`)}
                className="block rounded-3xl border-2 bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                <div className="flex items-center">
                  <div
                    className="mr-4 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-inner"
                    style={{ backgroundColor: `${chapter.color}20` }}
                  >
                    {chapter.icon}
                  </div>

                  <div className="flex-1">
                    <div className="mb-1 flex items-center">
                      <span className={`mr-2 rounded-full px-3 py-1 text-sm font-bold ${statusStyle}`}>
                        {statusLabel}
                      </span>
                      {chapter.isKeyChapter && (
                        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-600">重点</span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-gray-800">第{chapter.order}章 {chapter.title}</h4>
                    <p className="mt-1 text-sm text-gray-500">{chapter.subtitle}</p>

                    <div className="mt-3 flex items-center text-sm font-medium text-gray-500">
                      <span className="mr-4 flex items-center">⏱️ {chapter.estimatedTime}分钟</span>
                      <span className="flex items-center">📝 {chapter.questionCount}道题</span>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex justify-between text-sm font-bold text-gray-600">
                    <span>学习进度</span>
                    <span className={isCompleted ? 'text-green-600' : 'text-blue-600'}>{progressValue}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-green-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}
                      style={{ width: `${progressValue}%` }}
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <Link to={buildGradePath('/report')}>
          <div className="mt-6 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white shadow-xl transition-transform hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="flex items-center text-xl font-bold">
                  <span className="mr-2 text-2xl">🤖</span> AI 学习小助手
                </h4>
                <p className="mt-2 text-base text-white/90">快速生成学习诊断，帮你定位薄弱点和下一步重点。</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25 text-3xl">
                ✨
              </div>
            </div>
          </div>
        </Link>

        <Link to={buildGradePath('/notes')}>
          <div className="mt-4 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-6 text-white shadow-xl transition-transform hover:scale-[1.02]">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="flex items-center text-xl font-bold">
                  <span className="mr-2 text-2xl">📘</span> 知识点笔记
                </h4>
                <p className="mt-2 text-base text-white/90">按章节整理重点内容、例题和公式，适合随时复习。</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25 text-3xl">
                📚
              </div>
            </div>
          </div>
        </Link>
      </main>
    </div>
  )
}

export default Home
