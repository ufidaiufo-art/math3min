import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getChapterById } from '../../data/chapters'
import { getKnowledgePointsByChapter } from '../../data/knowledgePoints'
import { useProgressStore } from '../../stores'
import BilibiliPlayer from '../../components/common/BilibiliPlayer'

const Video: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>()
  const [currentKpIndex, setCurrentKpIndex] = useState(0)
  const [videoCompleted, setVideoCompleted] = useState(false)
  const { chapterProgress, updateChapterProgress } = useProgressStore()

  const chapter = chapterId ? getChapterById(chapterId) : null
  const knowledgePoints = chapterId ? getKnowledgePointsByChapter(chapterId) : []
  const currentKP = knowledgePoints[currentKpIndex] || null
  const progress = chapterId ? chapterProgress[chapterId] : null

  // 切换到下一个知识点
  const handleNext = () => {
    if (currentKpIndex < knowledgePoints.length - 1) {
      setCurrentKpIndex(prev => prev + 1)
      setVideoCompleted(false)
    }
  }

  // 切换到上一个知识点
  const handlePrev = () => {
    if (currentKpIndex > 0) {
      setCurrentKpIndex(prev => prev - 1)
      setVideoCompleted(false)
    }
  }

  // 视频播放完成回调
  const handleVideoComplete = () => {
    setVideoCompleted(true)
    if (chapterId) {
      const newProgress = Math.round(((currentKpIndex + 1) / knowledgePoints.length) * 100)
      updateChapterProgress(chapterId, {
        videoProgress: newProgress,
        status: newProgress === 100 ? 'completed' : 'in_progress'
      })
    }
  }

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">章节不存在</p>
          <Link to="/" className="text-primary mt-2 inline-block">返回首页</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航 */}
      <header className="bg-white px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
        </Link>
        <div className="flex-1 text-center">
          <h1 className="font-bold text-gray-800">第{chapter.order}章：{chapter.title}</h1>
          {currentKP && (
            <p className="text-xs text-gray-500">{currentKP.order}.{currentKP.title}</p>
          )}
        </div>
        <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
      </header>

      {/* 视频播放器区域 */}
      <div className="bg-black aspect-video relative">
        <BilibiliPlayer
          bvid={currentKP?.videoBvid}
          videoUrl={currentKP?.videoUrl}
          page={currentKP?.videoPage}
          onComplete={handleVideoComplete}
        />
        
        {/* 知识点进度条 */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
          <div className="h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full relative" style={{ width: `${((currentKpIndex + 1) / knowledgePoints.length) * 100}%` }}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
            </div>
          </div>
          <div className="flex justify-between text-xs text-white/80 mt-1">
            <span>知识点 {currentKpIndex + 1}/{knowledgePoints.length}</span>
            <span>{Math.round(((currentKpIndex + 1) / knowledgePoints.length) * 100)}%</span>
          </div>
        </div>
        
        {/* 视频完成提示 */}
        {videoCompleted && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
            ✅ 已完成
          </div>
        )}
      </div>

      {/* 知识点进度 */}
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600">知识点进度</span>
          <span className="text-primary font-medium">{currentKpIndex + 1}/{knowledgePoints.length}</span>
        </div>
        <div className="flex space-x-1">
          {knowledgePoints.map((kp, index) => (
            <div 
              key={kp.id}
              onClick={() => setCurrentKpIndex(index)}
              className={`flex-1 h-1.5 rounded-full cursor-pointer transition-colors ${
                index <= currentKpIndex ? 'bg-primary' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 知识点内容 */}
      <main className="flex-1 overflow-auto p-4">
        {currentKP && (
          <>
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-primary font-bold">{currentKP.order}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{currentKP.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed whitespace-pre-line">
                    {currentKP.videoScript}
                  </p>
                </div>
              </div>
            </div>

            {/* 典型例题 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-center mb-3">
                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">典型例题</span>
              </div>
              <p className="text-gray-800 mb-3">{currentKP.example.question}</p>
              <div className="bg-orange-50 rounded-xl p-3">
                <p className="text-sm text-gray-700">
                  <span className="text-orange-600 font-medium">解析：</span>
                  {currentKP.example.analysis}
                </p>
              </div>
            </div>

            {/* 练习题预览 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">练习题</span>
                <span className="text-xs text-gray-400">共{currentKP.exercises.length}题</span>
              </div>
              <p className="text-gray-600 text-sm">完成练习巩固知识点</p>
            </div>
          </>
        )}
      </main>

      {/* 底部操作 */}
      <footer className="bg-white border-t border-gray-200 p-4 safe-bottom">
        <div className="flex items-center space-x-3">
          <button 
            onClick={handlePrev}
            disabled={currentKpIndex === 0}
            className="px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:border-primary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            上一个
          </button>
          
          {currentKpIndex < knowledgePoints.length - 1 ? (
            <button 
              onClick={handleNext}
              className="flex-1 bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
            >
              下一个知识点
            </button>
          ) : (
            <Link 
              to={`/practice/${chapterId}`}
              onClick={handleVideoComplete}
              className="flex-1 bg-primary text-white py-3 rounded-xl font-medium text-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
            >
              开始练习
            </Link>
          )}
        </div>
      </footer>
    </div>
  )
}

export default Video
