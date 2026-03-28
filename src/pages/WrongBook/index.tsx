import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useProgressStore } from '../../stores'
import { questions } from '../../data/questions'
import { getChapterById } from '../../data/chapters'

// 错题详情类型
interface WrongQuestionDetail {
  questionId: string
  question: typeof questions[0]
  wrongCount: number
  lastWrongAt: string
  isMastered: boolean
}

const WrongBook: React.FC = () => {
  const { 
    wrongQuestions, 
    knowledgePointStats, 
    chapterProgress, 
    masteredQuestions, 
    markQuestionMastered,
    unmarkQuestionMastered,
    isQuestionMastered 
  } = useProgressStore()
  const [selectedChapter, setSelectedChapter] = useState<string>('all')
  const [showMastered, setShowMastered] = useState<boolean>(true)

  // 获取错题详情列表
  const wrongQuestionDetails = useMemo(() => {
    const details: WrongQuestionDetail[] = []
    
    wrongQuestions.forEach((questionId) => {
      const question = questions.find((q) => q.id === questionId)
      const kpStats = Object.values(knowledgePointStats).find(
        (kp) => kp.knowledgePointId === question?.knowledgePointId
      )
      
      if (question) {
        details.push({
          questionId,
          question,
          wrongCount: kpStats?.wrongCount || 1,
          lastWrongAt: kpStats?.lastAttemptAt || new Date().toISOString(),
          isMastered: isQuestionMastered(questionId)
        })
      }
    })
    
    return details.sort((a, b) => {
      const dateA = a.lastWrongAt ? new Date(a.lastWrongAt).getTime() : 0
      const dateB = b.lastWrongAt ? new Date(b.lastWrongAt).getTime() : 0
      return dateB - dateA
    })
  }, [wrongQuestions, knowledgePointStats])

  // 筛选后的错题
  const filteredQuestions = useMemo(() => {
    return wrongQuestionDetails.filter((item) => {
      const chapterMatch = selectedChapter === 'all' || item.question.chapterId === selectedChapter
      const masteredMatch = showMastered || !item.isMastered
      return chapterMatch && masteredMatch
    })
  }, [wrongQuestionDetails, selectedChapter, showMastered])

  // 统计信息
  const stats = useMemo(() => {
    const total = wrongQuestionDetails.length
    const mastered = wrongQuestionDetails.filter((q) => q.isMastered).length
    const unmastered = total - mastered
    return { total, mastered, unmastered }
  }, [wrongQuestionDetails])

  // 获取章节名称
  const getChapterName = (chapterId: string) => {
    const chapter = getChapterById(chapterId)
    return chapter?.title || chapterId
  }

  // 获取所有有错题的章节
  const chaptersWithWrong = useMemo(() => {
    const chapterIds = new Set(wrongQuestionDetails.map((q) => q.question.chapterId))
    return Array.from(chapterIds).map((id) => ({
      id,
      name: getChapterName(id)
    }))
  }, [wrongQuestionDetails])

  if (wrongQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        {/* 顶部 */}
        <header className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-md">
          <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </Link>
          <h1 className="font-bold text-gray-800 text-lg">📕 错题本</h1>
          <div className="w-10" />
        </header>

        {/* 空状态 */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
          <div className="text-8xl mb-6">📚</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">暂无错题</h2>
          <p className="text-gray-500 text-center mb-8">
            做题时答错的题目会自动收录到这里<br />
            温故而知新，错题是进步的阶梯！
          </p>
          <Link 
            to="/" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg"
          >
            去练习
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 顶部 */}
      <header className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-md">
        <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
        </Link>
        <h1 className="font-bold text-gray-800 text-lg">📕 错题本</h1>
        <div className="w-10" />
      </header>

      <main className="p-4">
        {/* 统计卡片 */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-5">
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-4xl font-bold text-red-500">{stats.total}</p>
              <p className="text-sm text-gray-500 mt-1">错题总数</p>
            </div>
            <div className="text-center border-l border-gray-200 pl-6">
              <p className="text-4xl font-bold text-green-500">{stats.mastered}</p>
              <p className="text-sm text-gray-500 mt-1">已掌握</p>
            </div>
            <div className="text-center border-l border-gray-200 pl-6">
              <p className="text-4xl font-bold text-orange-500">{stats.unmastered}</p>
              <p className="text-sm text-gray-500 mt-1">待复习</p>
            </div>
          </div>
        </div>

        {/* 筛选栏 */}
        <div className="bg-white rounded-2xl p-4 shadow-md mb-5">
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={() => setSelectedChapter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedChapter === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              全部章节
            </button>
            {chaptersWithWrong.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedChapter === chapter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {chapter.name}
              </button>
            ))}
          </div>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={showMastered}
              onChange={(e) => setShowMastered(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
            <span>显示已掌握的错题</span>
          </label>
        </div>

        {/* 错题列表 */}
        <div className="space-y-4">
          {filteredQuestions.map((item, index) => (
            <div
              key={item.questionId}
              className={`bg-white rounded-3xl p-5 shadow-lg border-l-4 ${
                item.isMastered ? 'border-green-400 opacity-80' : 'border-red-400'
              }`}
            >
              {/* 题头 */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-500">
                    {getChapterName(item.question.chapterId)}
                  </span>
                </div>
                {item.isMastered && (
                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-bold">
                    ✓ 已掌握
                  </span>
                )}
              </div>

              {/* 题目内容 */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                <p className="text-gray-800 font-medium mb-3">
                  {item.question.content}
                </p>
                {item.question.options && (
                  <div className="space-y-2">
                    {item.question.options.map((opt, idx) => {
                      const label = String.fromCharCode(65 + idx)
                      const isAnswer = label === item.question.answer
                      return (
                        <div
                          key={idx}
                          className={`p-2 rounded-lg text-sm ${
                            isAnswer
                              ? 'bg-green-100 text-green-700 border border-green-300'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {label}. {opt}
                          {isAnswer && <span className="ml-2">✓ 正确答案</span>}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* 解析 */}
              <div className="bg-yellow-50 rounded-2xl p-4 mb-4">
                <p className="text-sm font-bold text-yellow-700 mb-2">📝 解析</p>
                <p className="text-sm text-gray-700">{item.question.analysis}</p>
              </div>

              {/* 操作按钮 */}
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    if (item.isMastered) {
                      unmarkQuestionMastered(item.questionId)
                    } else {
                      markQuestionMastered(item.questionId)
                    }
                  }}
                  className={`flex-1 py-3 rounded-xl font-bold text-sm transition-colors ${
                    item.isMastered
                      ? 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      : 'bg-green-100 text-green-600 hover:bg-green-200'
                  }`}
                >
                  {item.isMastered ? '↩ 重新复习' : '✓ 标记掌握'}
                </button>
                <Link
                  to={`/practice/${item.question.chapterId}`}
                  className="flex-1 bg-blue-100 text-blue-600 py-3 rounded-xl font-bold text-sm text-center hover:bg-blue-200 transition-colors"
                >
                  去练习
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 底部提示 */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">没有符合条件的错题</p>
          </div>
        )}
      </main>

      {/* 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <Link
            to="/"
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-2xl font-bold text-center shadow-lg"
          >
            练习错题 ({stats.unmastered}道待复习)
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WrongBook
