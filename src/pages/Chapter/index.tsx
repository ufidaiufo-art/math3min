import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getChapterById, chapters } from '../../data/chapters'
import { getQuestionsByChapter } from '../../data/questions'
import { useProgressStore } from '../../stores'

const Chapter: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>()
  const navigate = useNavigate()
  const { chapterProgress, totalStudyTime } = useProgressStore()
  
  const chapter = chapterId ? getChapterById(chapterId) : null
  const questions = chapterId ? getQuestionsByChapter(chapterId) : []
  const progress = chapterId ? chapterProgress[chapterId] : null
  
  const currentChapterIndex = chapters.findIndex(c => c.id === chapterId)
  const prevChapter = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null
  const nextChapter = currentChapterIndex < chapters.length - 1 ? chapters[currentChapterIndex + 1] : null

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-500 mb-4">章节不存在</p>
          <Link to="/" className="text-indigo-600 font-medium">返回首页</Link>
        </div>
      </div>
    )
  }

  const completedCount = progress?.completedQuestions || 0
  const totalCount = questions.length
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </Link>
            <span className="font-medium">第{chapter.order}章</span>
            <div className="w-10" />
          </div>
          
          <h1 className="text-2xl font-bold mb-2">{chapter.title}</h1>
          <p className="text-white/80 text-sm mb-4">{chapter.subtitle}</p>
          
          {/* Progress card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold">{totalCount}</p>
                <p className="text-xs text-white/70">总题数</p>
              </div>
              <div className="text-center border-l border-white/20 pl-6">
                <p className="text-2xl font-bold">{completedCount}</p>
                <p className="text-xs text-white/70">已完成</p>
              </div>
              <div className="text-center border-l border-white/20 pl-6">
                <p className="text-2xl font-bold">{progressPercent}%</p>
                <p className="text-xs text-white/70">进度</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-4 pb-32">
        {/* Knowledge Points */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-5 bg-indigo-600 rounded-full mr-2"></span>
            知识点
          </h3>
          <div className="space-y-3">
            {chapter.sections.map((section, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{section}</span>
                </div>
                <span className="text-xs text-gray-400">待练习</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter Navigation */}
        <div className="grid grid-cols-2 gap-3">
          {prevChapter && (
            <button 
              onClick={() => navigate(`/chapter/${prevChapter.id}`)}
              className="bg-white rounded-xl p-4 shadow-sm text-left hover:shadow-md transition-shadow"
            >
              <span className="text-xs text-gray-400">上一章</span>
              <p className="font-medium text-gray-700 mt-1 truncate">{prevChapter.title}</p>
            </button>
          )}
          {nextChapter && (
            <button 
              onClick={() => navigate(`/chapter/${nextChapter.id}`)}
              className="bg-white rounded-xl p-4 shadow-sm text-right hover:shadow-md transition-shadow"
            >
              <span className="text-xs text-gray-400">下一章</span>
              <p className="font-medium text-gray-700 mt-1 truncate">{nextChapter.title}</p>
            </button>
          )}
        </div>
      </main>

      {/* Bottom Actions */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 safe-bottom">
        <div className="flex gap-3">
          <Link 
            to={`/video/${chapterId}`}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium text-center hover:bg-gray-200 transition-colors"
          >
            📹 看视频
          </Link>
          <Link 
            to={`/practice/${chapterId}`}
            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-medium text-center hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/30"
          >
            ✏️ 开始练习
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Chapter