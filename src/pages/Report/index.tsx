import React from 'react'
import { Link } from 'react-router-dom'
import { useProgressStore } from '../../stores'
import { getChapterById } from '../../data/chapters'

const Report: React.FC = () => {
  const { 
    totalQuestions, 
    correctCount, 
    getCorrectRate, 
    totalStudyTime,
    studyStreak,
    getWeakPoints,
    getChapterAbilities,
    getRecommendations
  } = useProgressStore()
  
  const correctRate = getCorrectRate()
  const weakPoints = getWeakPoints()
  const chapterAbilities = getChapterAbilities()
  const recommendations = getRecommendations()
  
  // 计算综合得分（基于正确率和做题数）
  const calculateOverallScore = () => {
    if (totalQuestions === 0) return 0
    // 基础分是正确率，做题越多权重越高（最多额外加10分）
    const bonus = Math.min(totalQuestions / 10, 10)
    return Math.min(Math.round(correctRate + bonus), 100)
  }
  
  const overallScore = calculateOverallScore()
  
  // 计算排名百分比（模拟）
  const rankPercentile = Math.max(50, Math.min(99, overallScore + Math.floor(Math.random() * 10)))
  
  // 获取能力维度数据
  const getDimensionScores = () => {
    const dimensions = [
      { name: '基础运算', chapters: ['ch1', 'ch6'], color: 'bg-blue-500' },
      { name: '代数表达', chapters: ['ch2'], color: 'bg-purple-500' },
      { name: '方程求解', chapters: ['ch3', 'ch8'], color: 'bg-indigo-500' },
      { name: '几何图形', chapters: ['ch4', 'ch5'], color: 'bg-green-500' },
      { name: '应用分析', chapters: ['ch3', 'ch8', 'ch9'], color: 'bg-orange-500' },
      { name: '逻辑思维', chapters: ['ch1', 'ch5', 'ch7'], color: 'bg-pink-500' },
    ]
    
    return dimensions.map(dim => {
      const relevantAbilities = chapterAbilities.filter(ca => dim.chapters.includes(ca.chapterId))
      const avgScore = relevantAbilities.length > 0
        ? Math.round(relevantAbilities.reduce((sum, ca) => sum + ca.score, 0) / relevantAbilities.length)
        : 0
      return { ...dim, score: avgScore }
    })
  }
  
  const dimensionScores = getDimensionScores()
  
  // 获取学习建议
  const getLearningAdvice = () => {
    if (weakPoints.length === 0) {
      if (correctRate >= 90) {
        return '太棒了！你的数学基础非常扎实，建议挑战一些拓展题目，保持学习热情！🌟'
      }
      return '学习状态不错！继续保持，多做练习巩固知识点。💪'
    }
    
    const weakest = weakPoints[0]
    return `根据你的答题记录，你在「${weakest.name}」方面还需要加强。建议重点复习相关知识点多做专项练习，每天10-15分钟即可看到进步！📚`
  }

  return (
    <div className="min-h-screen pb-24 bg-gray-50">
      {/* 顶部 */}
      <header className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-md">
        <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
        </Link>
        <h1 className="font-bold text-gray-800 text-lg">🤖 AI诊断报告</h1>
        <div className="w-10" />
      </header>

      <main className="p-4">
        {/* 综合得分 */}
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl mb-5">
          <div className="text-center">
            <p className="text-white/80 text-sm mb-2">综合得分</p>
            <div className="text-6xl font-bold mb-3">{overallScore}<span className="text-2xl">分</span></div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="bg-white/20 px-4 py-1.5 rounded-full font-medium">
                超过 {rankPercentile}% 同学
              </span>
              {studyStreak > 0 && (
                <span className="text-yellow-300 font-bold">🔥 连续{studyStreak}天</span>
              )}
            </div>
          </div>
          
          <div className="flex justify-around mt-6 pt-6 border-t border-white/20">
            <div className="text-center">
              <p className="text-3xl font-bold">{totalQuestions}</p>
              <p className="text-xs text-white/70">做题总数</p>
            </div>
            <div className="text-center border-l border-white/20 pl-6">
              <p className="text-3xl font-bold">{correctRate}%</p>
              <p className="text-xs text-white/70">平均正确率</p>
            </div>
            <div className="text-center border-l border-white/20 pl-6">
              <p className="text-3xl font-bold">{Math.round(totalStudyTime / 60 * 10) / 10}h</p>
              <p className="text-xs text-white/70">学习时长</p>
            </div>
          </div>
        </div>

        {/* 能力分析 */}
        <div className="bg-white rounded-3xl p-5 shadow-lg mb-5">
          <h3 className="font-bold text-gray-800 mb-5 text-lg flex items-center">
            <span className="text-2xl mr-2">📊</span> 能力分析
          </h3>
          <div className="space-y-4">
            {dimensionScores.map((dim) => (
              <div key={dim.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 font-medium">{dim.name}</span>
                  <span className={`font-bold ${
                    dim.score >= 80 ? 'text-green-600' : 
                    dim.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {dim.score > 0 ? `${dim.score}分` : '暂无数据'}
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${dim.color}`}
                    style={{ width: `${dim.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 薄弱知识点 */}
        {weakPoints.length > 0 && (
          <div className="bg-white rounded-3xl p-5 shadow-lg mb-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800 text-lg flex items-center">
                <span className="text-2xl mr-2">⚠️</span> 薄弱知识点
              </h3>
              <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold">
                需重点加强
              </span>
            </div>
            
            <div className="space-y-4">
              {weakPoints.slice(0, 3).map((point, index) => {
                const chapter = getChapterById(point.chapterId)
                return (
                  <div key={point.knowledgePointId}>
                    <div className="flex items-center mb-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-sm ${
                        index === 0 ? 'bg-red-100' : index === 1 ? 'bg-orange-100' : 'bg-yellow-100'
                      }`}>
                        <span className={`font-bold text-lg ${
                          index === 0 ? 'text-red-500' : index === 1 ? 'text-orange-500' : 'text-yellow-600'
                        }`}>{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">{point.name}</p>
                        <p className="text-xs text-gray-500">{chapter?.title || '未知章节'}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-lg ${
                          index === 0 ? 'text-red-500' : index === 1 ? 'text-orange-500' : 'text-yellow-600'
                        }`}>{point.rate}%</p>
                        <p className="text-xs text-gray-400">掌握率</p>
                      </div>
                    </div>
                    <div className={`h-2.5 rounded-full overflow-hidden ${
                      index === 0 ? 'bg-red-100' : index === 1 ? 'bg-orange-100' : 'bg-yellow-100'
                    }`}>
                      <div 
                        className={`h-full rounded-full ${
                          index === 0 ? 'bg-red-500' : index === 1 ? 'bg-orange-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${point.rate}%` }}
                      />
                    </div>
                    {point.wrongCount > 0 && (
                      <p className="text-xs text-gray-400 mt-1">错题 {point.wrongCount} 次</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* 推荐学习路径 */}
        {recommendations.length > 0 && (
          <div className="bg-white rounded-3xl p-5 shadow-lg mb-5">
            <h3 className="font-bold text-gray-800 mb-4 text-lg flex items-center">
              <span className="text-2xl mr-2">🎯</span> AI推荐学习路径
            </h3>
            
            <div className="relative pl-8 space-y-4">
              <div className="absolute left-3 top-3 bottom-3 w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              
              {recommendations.map((rec, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-5 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white shadow-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
                    <div className="flex items-center mb-1">
                      <span className="text-lg mr-2">
                        {rec.type === 'review' ? '📖' : rec.type === 'practice' ? '✏️' : '🔁'}
                      </span>
                      <p className="font-bold text-gray-800">{rec.title}</p>
                    </div>
                    <p className="text-sm text-gray-600">{rec.description}</p>
                    {rec.chapterId !== 'all' && (
                      <Link 
                        to={`/practice/${rec.chapterId}`}
                        className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-600 transition-colors"
                      >
                        开始练习 →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 学习建议 */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-5 border-2 border-indigo-100 shadow-lg">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-2 text-lg">AI学习建议</h4>
              <p className="text-gray-700 leading-relaxed">
                {getLearningAdvice()}
              </p>
            </div>
          </div>
        </div>
        
        {/* 空状态 - 还没做过题 */}
        {totalQuestions === 0 && (
          <div className="text-center py-10">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-500 text-lg mb-4">还没有做题记录</p>
            <Link 
              to="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg"
            >
              开始做题
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}

export default Report
