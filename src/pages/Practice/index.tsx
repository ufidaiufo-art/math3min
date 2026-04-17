import React, { useMemo, useState, useEffect } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { useGradeRoute } from '@hooks/useGradeRoute'
import { useProgressStore } from '../../stores'
import { StarAnimation, ConfettiEffect, CelebrationModal } from '../../components/effects'
import type { QuestionData } from '../../data/questions'

// ==================== 常量定义 ====================

/** 答对时的鼓励语集合 */
const ENCOURAGE_CORRECT = ['太棒了！🎉', '真厉害！⭐', '答对了！🏆', '继续加油！🚀', '你真聪明！💡']

/** 答错时的鼓励语集合 */
const ENCOURAGE_WRONG = ['再想想看~🤔', '没关系，下次一定能答对！💪', '加油哦！🌟', '继续尝试！✨']

type TrainingStageFilter = 'all' | 'basic' | 'method' | 'comprehensive'

const TRAINING_STAGE_OPTIONS: Array<{
  value: TrainingStageFilter
  label: string
  shortLabel: string
}> = [
  { value: 'all', label: '全部', shortLabel: '全部' },
  { value: 'basic', label: '基础', shortLabel: '基础' },
  { value: 'method', label: '方法', shortLabel: '方法' },
  { value: 'comprehensive', label: '综合', shortLabel: '综合' },
]

const isTrainingStageFilter = (value: string | null): value is TrainingStageFilter =>
  value === 'all' || value === 'basic' || value === 'method' || value === 'comprehensive'

// ==================== 组件 ====================

/**
 * 练习页面组件
 * 
 * 功能说明：
 * - 显示章节练习题，支持单选题、填空题、判断题
 * - 答题后显示答案解析，包含解题思路、详细步骤、知识点等
 * - 记录答题进度和正确率
 * - 答对时触发星星动画，连续答对触发彩带效果
 * - 支持题目切换和练习完成后的跳转
 */
const Practice: React.FC = () => {
  // ==================== URL参数 ====================
  // 从URL获取章节ID，如 /practice/ch1 中的 ch1
  const { chapterId } = useParams<{ chapterId: string }>()
  const [searchParams, setSearchParams] = useSearchParams()
  const { curriculum, buildGradePath } = useGradeRoute()

  // ==================== 状态管理 ====================
  
  // 题目相关状态
  const [currentIndex, setCurrentIndex] = useState(0) // 当前题目索引
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null) // 用户选择的答案
  const [showAnalysis, setShowAnalysis] = useState(false) // 是否显示解析
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set()) // 已答题集合（防止重复计分）
  const [correctQuestionIds, setCorrectQuestionIds] = useState<Set<string>>(new Set()) // 答对题目集合
  const [encourageMsg, setEncourageMsg] = useState('') // 当前显示的鼓励语
  const [trainingStageFilter, setTrainingStageFilter] = useState<TrainingStageFilter>(() => {
    const stageFromUrl = searchParams.get('stage')
    return isTrainingStageFilter(stageFromUrl) ? stageFromUrl : 'all'
  })
  
  // 动画效果状态
  const [showStarAnimation, setShowStarAnimation] = useState(false) // 星星动画
  const [showConfetti, setShowConfetti] = useState(false) // 彩带效果
  const [showCelebration, setShowCelebration] = useState(false) // 章节完成弹窗
  
  // ==================== Store 数据 ====================
  
  // 从进度Store获取答题记录和进度更新函数
  const { recordQuestion, updateChapterProgress } = useProgressStore()
  
  // ==================== 计算属性 ====================
  
  // 获取当前章节信息
  const chapter = chapterId ? curriculum.chapters.find((item) => item.id === chapterId) ?? null : null
  
  // 获取当前章节的题目列表
  const chapterQuestions = useMemo(
    () => (chapterId ? curriculum.questions.filter((item) => item.chapterId === chapterId) : []),
    [chapterId, curriculum.questions]
  )

  const questions = useMemo(
    () =>
      chapterQuestions.filter((item) =>
        trainingStageFilter === 'all' ? true : item.trainingStage === trainingStageFilter
      ),
    [chapterQuestions, trainingStageFilter]
  )

  const stageCounts = useMemo(() => {
    return TRAINING_STAGE_OPTIONS.reduce<Record<TrainingStageFilter, number>>(
      (acc, option) => {
        acc[option.value] =
          option.value === 'all'
            ? chapterQuestions.length
            : chapterQuestions.filter((item) => item.trainingStage === option.value).length
        return acc
      },
      {
        all: 0,
        basic: 0,
        method: 0,
        comprehensive: 0,
      }
    )
  }, [chapterQuestions])
  
  // 获取当前题目
  const currentQuestion = questions[currentIndex] || null

  const answeredCountInView = useMemo(
    () => questions.filter((item) => answeredQuestions.has(item.id)).length,
    [questions, answeredQuestions]
  )

  const correctCountInView = useMemo(
    () => questions.filter((item) => correctQuestionIds.has(item.id)).length,
    [questions, correctQuestionIds]
  )
  
  // 计算练习进度百分比（已答题数 / 总题数）
  const practiceProgress = questions.length > 0 
    ? Math.round((answeredCountInView / questions.length) * 100) 
    : 0

  useEffect(() => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowAnalysis(false)
    setEncourageMsg('')
  }, [trainingStageFilter, chapterId])

  useEffect(() => {
    const stageFromUrl = searchParams.get('stage')
    const normalizedStage = isTrainingStageFilter(stageFromUrl) ? stageFromUrl : 'all'

    if (normalizedStage !== trainingStageFilter) {
      setTrainingStageFilter(normalizedStage)
    }
  }, [searchParams, trainingStageFilter])

  const updateTrainingStageFilter = (nextFilter: TrainingStageFilter) => {
    setTrainingStageFilter(nextFilter)

    const nextSearchParams = new URLSearchParams(searchParams)
    if (nextFilter === 'all') {
      nextSearchParams.delete('stage')
    } else {
      nextSearchParams.set('stage', nextFilter)
    }
    setSearchParams(nextSearchParams, { replace: true })
  }

  // ==================== 事件处理 ====================

  /**
   * 选择答案
   * @param answer 用户选择的答案
   */
  const handleSelectAnswer = (answer: string) => {
    // 如果已经显示解析，不允许更改答案
    if (showAnalysis) return
    setSelectedAnswer(answer)
  }

  /**
   * 提交答案
   * 检查答案正确性，显示解析，更新进度
   */
  const handleSubmit = () => {
    if (!selectedAnswer || !currentQuestion) return
    
    // 判断答案是否正确
    const isCorrect = selectedAnswer === currentQuestion.answer
    setShowAnalysis(true)
    
    // 根据正确性设置鼓励语和动画
    if (isCorrect) {
      // 随机选择一条鼓励语
      setEncourageMsg(ENCOURAGE_CORRECT[Math.floor(Math.random() * ENCOURAGE_CORRECT.length)])
      // 触发星星动画
      setShowStarAnimation(true)
      
      // 如果是连续答对3题或更多，触发彩带效果
      const recentCorrect = Array.from(answeredQuestions).filter((_, idx) => idx >= answeredQuestions.size - 2).length
      if (recentCorrect >= 2) {
        setShowConfetti(true)
      }
    } else {
      // 答错时显示鼓励语
      setEncourageMsg(ENCOURAGE_WRONG[Math.floor(Math.random() * ENCOURAGE_WRONG.length)])
    }
    
    // 如果是首次回答该题目，记录答题详情
    if (!answeredQuestions.has(currentQuestion.id)) {
      setAnsweredQuestions(prev => new Set(prev).add(currentQuestion.id))
      
      // 记录到Store用于AI诊断分析
      recordQuestion(
        isCorrect,
        currentQuestion.id,
        currentQuestion.knowledgePointId,
        currentQuestion.chapterId
      )
      
      // 更新正确计数
      if (isCorrect) {
        setCorrectQuestionIds(prev => new Set(prev).add(currentQuestion.id))
      }
      
      // 更新章节练习进度
      if (chapterId) {
        const newProgress = Math.round(((answeredQuestions.size + 1) / questions.length) * 100)
        updateChapterProgress(chapterId, {
          practiceProgress: newProgress
        })
      }
    }
  }

  /**
   * 切换到下一题
   */
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowAnalysis(false)
      setEncourageMsg('')
    }
  }

  /**
   * 切换到上一题
   */
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      setSelectedAnswer(null)
      setShowAnalysis(false)
      setEncourageMsg('')
    }
  }

  // ==================== 辅助函数 ====================

  /**
   * 获取选项字母（A、B、C、D...）
   * @param index 选项索引
   * @returns 对应的字母
   */
  const getOptionLabel = (index: number): string => {
    return String.fromCharCode(65 + index) // 65是'A'的ASCII码
  }

  // ==================== 渲染 ====================

  // 如果章节不存在或没有题目，显示空状态
  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center bg-white rounded-3xl p-8 shadow-lg max-w-sm">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-500 text-lg mb-2">暂无练习题</p>
          <p className="text-xs text-gray-400 mb-4">章节ID: {chapterId || 'undefined'}</p>
          <p className="text-xs text-gray-400 mb-4">章节对象: {chapter ? '存在' : '不存在'}</p>
          <p className="text-xs text-gray-400 mb-4">题目数量: {questions.length}</p>
          <Link to={buildGradePath()} className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold">
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  // 判断当前题目是否已回答过
  const isAnswered = currentQuestion ? answeredQuestions.has(currentQuestion.id) : false
  // 判断当前选择的答案是否正确
  const isCorrect = selectedAnswer === currentQuestion?.answer

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 顶部导航 - 显示章节标题、当前题号、进度条、正确率 */}
      <header className="bg-white px-4 py-4 flex items-center justify-between sticky top-0 z-10 shadow-md">
        <Link to={buildGradePath(`/video/${chapterId}`)} className="p-3 hover:bg-gray-100 rounded-2xl transition-colors">
          <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
          </svg>
        </Link>
        <div className="flex-1 mx-4">
          <div className="flex items-center justify-between text-base font-bold mb-2">
            <span className="text-gray-700">📝 第 {currentIndex + 1} 题</span>
            <span className="text-blue-600">共 {questions.length} 题</span>
          </div>
          {/* 进度条 - 显示当前题目进度 */}
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" 
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} 
            />
          </div>
        </div>
        {/* 正确率显示 */}
        <div className="text-center bg-green-50 px-4 py-2 rounded-2xl">
          <p className="text-xs text-green-600 font-bold">正确率</p>
          <p className="text-xl font-bold text-green-600">
            {answeredCountInView > 0 ? Math.round((correctCountInView / answeredCountInView) * 100) : 0}%
          </p>
        </div>
      </header>

      {/* 题目区域 */}
      <main className="flex-1 p-5 overflow-auto">
        <div className="mb-5 rounded-3xl bg-white p-4 shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-base font-bold text-gray-800">训练层级</h3>
            <span className="text-xs text-gray-400">
              当前：{TRAINING_STAGE_OPTIONS.find((item) => item.value === trainingStageFilter)?.label}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {TRAINING_STAGE_OPTIONS.map((option) => {
              const isActive = option.value === trainingStageFilter

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateTrainingStageFilter(option.value)}
                  className={`rounded-2xl border px-3 py-3 text-center transition-all ${
                    isActive
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  <div className="text-sm font-bold">{option.shortLabel}</div>
                  <div className="mt-1 text-xs">{stageCounts[option.value]} 题</div>
                </button>
              )
            })}
          </div>
        </div>

        {questions.length === 0 ? (
          <div className="rounded-3xl bg-white p-8 text-center shadow-md">
            <div className="mb-4 text-5xl">🧭</div>
            <p className="mb-2 text-lg font-bold text-gray-700">当前层级还没有题目</p>
            <p className="mb-5 text-sm text-gray-500">先切回“全部”，或者换一个训练层级继续练习。</p>
            <button
              type="button"
              onClick={() => updateTrainingStageFilter('all')}
              className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-bold text-white"
            >
              查看全部题目
            </button>
          </div>
        ) : (
          <>
        {currentQuestion && (
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 mb-5">
            {/* 题目标签：题型 + 难度 */}
            <div className="flex items-center mb-5">
              <span className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full font-bold">
                {currentQuestion.type === 'single_choice' ? '📝 单选题' : 
                 currentQuestion.type === 'fill_blank' ? '✏️ 填空题' : '◯ 判断题'}
              </span>
              <span className="ml-auto flex items-center bg-yellow-50 px-3 py-2 rounded-full">
                <span className="text-sm font-bold text-yellow-600 mr-1">难度</span>
                <span className="text-yellow-500">
                  {currentQuestion.difficulty === 'easy' ? '⭐' : 
                   currentQuestion.difficulty === 'medium' ? '⭐⭐' : '⭐⭐⭐'}
                </span>
              </span>
              {currentQuestion.trainingStage && (
                <span className="ml-3 rounded-full bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-600">
                  {currentQuestion.trainingStage === 'basic'
                    ? '基础'
                    : currentQuestion.trainingStage === 'method'
                    ? '方法'
                    : '综合'}
                </span>
              )}
            </div>

            {/* 题目内容 */}
            <div className="mb-6 bg-gray-50 rounded-2xl p-5">
              <p className="text-gray-800 text-xl leading-relaxed font-medium">
                {currentQuestion.content}
              </p>
            </div>

            {/* 单选题选项区域 */}
            {currentQuestion.type === 'single_choice' && currentQuestion.options && (
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  const optionLabel = getOptionLabel(index)
                  const isSelected = selectedAnswer === optionLabel
                  const isCorrectAnswer = optionLabel === currentQuestion.answer
                  const showCorrect = showAnalysis && isCorrectAnswer
                  const showWrong = showAnalysis && isSelected && !isCorrectAnswer
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectAnswer(optionLabel)}
                      disabled={showAnalysis}
                      className={`w-full text-left p-5 rounded-2xl border-3 transition-all active:scale-95 ${
                        showCorrect 
                          ? 'border-green-500 bg-green-100 shadow-lg shadow-green-200' 
                          : showWrong 
                            ? 'border-red-500 bg-red-100 shadow-lg shadow-red-200'
                            : isSelected 
                              ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-200' 
                              : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 shadow-md'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0 shadow-inner ${
                          showCorrect 
                            ? 'bg-green-500 text-white' 
                            : showWrong 
                              ? 'bg-red-500 text-white'
                              : isSelected 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-gray-100 text-gray-600'
                        }`}>
                          {showCorrect ? '✓' : showWrong ? '✗' : optionLabel}
                        </span>
                        <span className={`text-lg font-medium ${showCorrect || showWrong ? 'text-gray-800' : 'text-gray-700'}`}>
                          {option}
                        </span>
                        {showCorrect && <span className="ml-auto text-2xl">🎉</span>}
                      </div>
                    </button>
                  )
                })}
              </div>
            )}

            {/* 填空题输入区域 */}
            {currentQuestion.type === 'fill_blank' && (
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200">
                  <label className="text-blue-600 font-bold text-base mb-2 block">✏️ 填写你的答案：</label>
                  <input
                    type="text"
                    value={selectedAnswer || ''}
                    onChange={(e) => handleSelectAnswer(e.target.value)}
                    disabled={showAnalysis}
                    placeholder="在这里输入答案..."
                    className="w-full p-5 text-xl border-3 border-blue-300 rounded-xl focus:border-blue-500 focus:outline-none disabled:bg-gray-100 text-center font-bold text-gray-700 placeholder:text-gray-400"
                  />
                </div>
              </div>
            )}

            {/* 判断题选项区域 */}
            {currentQuestion.type === 'judge' && (
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'A', text: '✓ 正确', emoji: '✅' },
                  { label: 'B', text: '✗ 错误', emoji: '❌' }
                ].map((option, index) => {
                  const optionLabel = option.label
                  const isSelected = selectedAnswer === optionLabel
                  const isCorrectAnswer = optionLabel === currentQuestion.answer
                  const showCorrect = showAnalysis && isCorrectAnswer
                  const showWrong = showAnalysis && isSelected && !isCorrectAnswer

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectAnswer(optionLabel)}
                      disabled={showAnalysis}
                      className={`p-6 rounded-2xl border-3 transition-all active:scale-95 text-center ${
                        showCorrect
                          ? 'border-green-500 bg-green-100 shadow-lg shadow-green-200'
                          : showWrong
                            ? 'border-red-500 bg-red-100 shadow-lg shadow-red-200'
                            : isSelected
                              ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-200'
                              : 'border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 shadow-md'
                      }`}
                    >
                      <div className="text-4xl mb-2">{option.emoji}</div>
                      <div className={`text-xl font-bold ${
                        showCorrect ? 'text-green-600' : showWrong ? 'text-red-600' : isSelected ? 'text-blue-600' : 'text-gray-700'
                      }`}>
                        {option.text}
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* 答案解析区域 - 显示正确答案、解题思路、步骤、知识点等 */}
        {showAnalysis && currentQuestion && (
          <div className={`rounded-3xl p-6 shadow-lg animate-bounce-in ${
            isCorrect ? 'bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-300' : 'bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-300'
          }`}>
            {/* 鼓励语 */}
            <div className="text-center mb-4">
              <p className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-orange-600'}`}>
                {encourageMsg}
              </p>
              {isCorrect && (
                <div className="flex justify-center gap-2 mt-2 text-3xl">
                  <span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
              )}
            </div>
            
            {/* 正确/错误标识 + 积分 */}
            <div className="flex items-center justify-between mb-4">
              <div className={`px-4 py-2 rounded-full font-bold text-base ${
                isCorrect ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
              }`}>
                {isCorrect ? '✓ 回答正确' : '✗ 回答错误'}
              </div>
              <div className="flex items-center bg-white/80 px-4 py-2 rounded-full">
                <span className="text-xl mr-1">💎</span>
                <span className="font-bold text-gray-700">+{currentQuestion.points}</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-5 shadow-inner space-y-4">
              {/* 正确答案显示 */}
              <p className="text-base font-bold text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">✓</span>
                正确答案：{currentQuestion.answer}
              </p>
              
              {/* 解题思路 */}
              {currentQuestion.thinking && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-2">🎯</span>
                    解题思路
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed bg-yellow-50 p-3 rounded-xl">
                    {currentQuestion.thinking}
                  </p>
                </div>
              )}
              
              {/* 详细解题步骤 */}
              {currentQuestion.steps && currentQuestion.steps.length > 0 && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2">📝</span>
                    解题步骤
                  </p>
                  <div className="space-y-3">
                    {currentQuestion.steps.map((step) => (
                      <div 
                        key={step.step} 
                        className={`p-3 rounded-xl ${
                          step.highlight 
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200' 
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-2 flex-shrink-0 ${
                            step.highlight ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                          }`}>
                            {step.step}
                          </span>
                          <div className="flex-1">
                            <p className={`font-bold text-sm mb-1 ${step.highlight ? 'text-blue-700' : 'text-gray-700'}`}>
                              {step.title}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {step.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* 简要解析（兼容旧数据） */}
              {!currentQuestion.steps && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2">💡</span>
                    解题思路
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {currentQuestion.analysis}
                  </p>
                </div>
              )}
              
              {/* 关键知识点标签 */}
              {currentQuestion.keyPoints && currentQuestion.keyPoints.length > 0 && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2">📚</span>
                    关键知识点
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.keyPoints.map((point, idx) => (
                      <span key={idx} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(currentQuestion.district || currentQuestion.examType) && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center mr-2">🏷️</span>
                    题目来源
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.district && (
                      <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                        {currentQuestion.district}
                      </span>
                    )}
                    {currentQuestion.examType && (
                      <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
                        {currentQuestion.examType}
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              {/* 常见错误（仅答错时显示） */}
              {!isCorrect && currentQuestion.commonMistakes && currentQuestion.commonMistakes.length > 0 && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-2">⚠️</span>
                    常见错误
                  </p>
                  <ul className="space-y-1">
                    {currentQuestion.commonMistakes.map((mistake, idx) => (
                      <li key={idx} className="text-red-600 text-sm flex items-start">
                        <span className="mr-2">•</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* 类似题目推荐 */}
              {currentQuestion.similarQuestions && currentQuestion.similarQuestions.length > 0 && (
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-base font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-2">🔗</span>
                    类似题目推荐
                  </p>
                  <div className="space-y-2">
                    {currentQuestion.similarQuestions.map((sq, idx) => (
                      <div key={idx} className="bg-indigo-50 p-3 rounded-xl flex items-center justify-between">
                        <span className="text-gray-700 text-sm flex-1 mr-2">{sq.content}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          sq.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
                          sq.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {sq.difficulty === 'easy' ? '简单' : sq.difficulty === 'medium' ? '中等' : '困难'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
          </>
        )}
      </main>

      {/* 底部操作栏 - 提交答案或切换题目 */}
      <footer className="bg-white border-t-2 border-gray-100 p-5 pb-8 safe-bottom">
        {!showAnalysis ? (
          // 未提交时显示提交按钮
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className={`w-full py-5 rounded-2xl font-bold text-xl transition-all active:scale-95 shadow-xl ${
              selectedAnswer 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-blue-300/50' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedAnswer ? '✓ 确认答案' : '请先选择答案'}
          </button>
        ) : (
          // 已提交时显示上一题/下一题按钮
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-6 py-5 rounded-2xl border-3 border-gray-200 text-gray-600 font-bold text-lg hover:border-blue-400 hover:text-blue-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← 上一题
            </button>
            {currentIndex < questions.length - 1 ? (
              <button 
                onClick={handleNext}
                className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-5 rounded-2xl font-bold text-xl transition-all active:scale-95 shadow-xl shadow-green-300/50"
              >
                下一题 →
              </button>
            ) : (
              <Link 
                to="/report"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-5 rounded-2xl font-bold text-xl text-center transition-all active:scale-95 shadow-xl shadow-purple-300/50"
              >
                🎉 完成练习
              </Link>
            )}
          </div>
        )}
      </footer>
      
      {/* 动画效果组件 */}
      <StarAnimation 
        show={showStarAnimation} 
        onComplete={() => setShowStarAnimation(false)} 
      />
      <ConfettiEffect 
        show={showConfetti} 
        onComplete={() => setShowConfetti(false)} 
      />
      <CelebrationModal
        show={showCelebration}
        type="chapter-complete"
        title="章节完成！"
        subtitle={`恭喜你完成了${chapter?.title || ''}的练习！`}
        chapterId={chapterId}
        onClose={() => setShowCelebration(false)}
      />
    </div>
  )
}

export default Practice
