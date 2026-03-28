import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useProgressStore } from '../../stores'

interface LocationState {
  correctCount: number
  totalCount: number
  chapterId?: string
}

const Result: React.FC = () => {
  const location = useLocation()
  const { totalQuestions, correctCount: totalCorrect, getCorrectRate } = useProgressStore()
  
  // 从location获取本次练习结果，或使用默认值
  const state = location.state as LocationState
  const sessionCorrect = state?.correctCount || 8
  const sessionTotal = state?.totalCount || 10
  const accuracy = Math.round((sessionCorrect / sessionTotal) * 100)
  
  // 根据正确率获取评价
  const getEvaluation = (rate: number) => {
    if (rate >= 90) return {
      icon: '🏆',
      title: '太棒了！',
      message: '你的表现非常出色，继续保持！',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    }
    if (rate >= 70) return {
      icon: '👍',
      title: '做得不错！',
      message: '还有进步空间，再接再厉！',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    }
    if (rate >= 50) return {
      icon: '💪',
      title: '继续加油！',
      message: '建议回顾一下知识点再练习',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    }
    return {
      icon: '📚',
      title: '需要努力',
      message: '别灰心，多练习一定能进步！',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  }
  
  const evaluation = getEvaluation(accuracy)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col">
      {/* Header */}
      <header className="p-4">
        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
          返回首页
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Result Card */}
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 text-center">
          {/* Icon */}
          <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${evaluation.color} flex items-center justify-center text-5xl shadow-lg`}>
            {evaluation.icon}
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{evaluation.title}</h2>
          <p className="text-gray-500 text-sm mb-6">{evaluation.message}</p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className={`${evaluation.bgColor} rounded-2xl p-4`}>
              <p className={`text-3xl font-bold ${evaluation.textColor}`}>{accuracy}%</p>
              <p className="text-gray-500 text-xs mt-1">正确率</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-3xl font-bold text-gray-700">{sessionCorrect}/{sessionTotal}</p>
              <p className="text-gray-500 text-xs mt-1">答对题数</p>
            </div>
          </div>
          
          {/* Overall Stats */}
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-400 mb-2">累计学习数据</p>
            <div className="flex justify-center gap-6">
              <div>
                <p className="text-lg font-bold text-gray-700">{totalQuestions}</p>
                <p className="text-xs text-gray-400">总做题</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-700">{getCorrectRate()}%</p>
                <p className="text-xs text-gray-400">总正确率</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-sm mt-8 space-y-3">
          <Link 
            to="/"
            className="block w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold text-center shadow-lg hover:bg-gray-50 transition-colors"
          >
            返回首页
          </Link>
          <Link 
            to={state?.chapterId ? `/practice/${state.chapterId}` : '/practice/random'}
            className="block w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-2xl font-bold text-center border border-white/30 hover:bg-white/30 transition-colors"
          >
            再练一组
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Result