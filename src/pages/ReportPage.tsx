import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { generateDiagnosisReport, isAiReportConfigured } from './api/aiReportShim'
import { getChapterById } from './data/chaptersShim'
import { useProgressStore } from './storesShim'
import {
  buildDimensionViews,
  buildLocalDiagnosisReport,
  type ReportRecommendation,
} from './utils/reportAnalysisShim'

const ReportPage: React.FC = () => {
  const {
    totalQuestions,
    getCorrectRate,
    totalStudyTime,
    studyStreak,
    getWeakPoints,
    getChapterAbilities,
    getRecommendations,
    currentReport,
    setCurrentReport,
  } = useProgressStore()

  const correctRate = getCorrectRate()
  const weakPoints = getWeakPoints()
  const chapterAbilities = getChapterAbilities()
  const recommendations = getRecommendations()

  const [loading, setLoading] = useState(false)
  const [statusText, setStatusText] = useState<string | null>(null)
  const [learningAdvice, setLearningAdvice] = useState('')

  const weakPointsKey = useMemo(() => JSON.stringify(weakPoints), [weakPoints])
  const chapterAbilitiesKey = useMemo(() => JSON.stringify(chapterAbilities), [chapterAbilities])
  const recommendationsKey = useMemo(() => JSON.stringify(recommendations), [recommendations])

  const reportInput = useMemo(
    () => ({
      totalQuestions,
      correctCount: Math.round((correctRate / 100) * totalQuestions),
      correctRate,
      totalStudyTime,
      studyStreak,
      weakPoints,
      chapterAbilities,
      recommendations: recommendations as ReportRecommendation[],
    }),
    [
      totalQuestions,
      correctRate,
      totalStudyTime,
      studyStreak,
      weakPointsKey,
      chapterAbilitiesKey,
      recommendationsKey,
    ]
  )

  const localReportView = useMemo(
    () => buildLocalDiagnosisReport(reportInput),
    [reportInput]
  )

  useEffect(() => {
    let cancelled = false

    async function loadReport() {
      if (totalQuestions === 0) {
        setLoading(false)
        setCurrentReport(null)
        setLearningAdvice(localReportView.learningAdvice)
        setStatusText(null)
        return
      }

      setLoading(true)
      setStatusText(
        isAiReportConfigured()
          ? '正在生成 AI 学习诊断，请稍候...'
          : '当前未配置大模型，已自动使用本地诊断结果。'
      )

      try {
        const result = await generateDiagnosisReport(reportInput)

        if (cancelled) return

        setCurrentReport(result.report)
        setLearningAdvice(result.learningAdvice)
        setStatusText(
          isAiReportConfigured()
            ? 'AI 诊断已生成。'
            : '当前展示的是本地诊断结果。'
        )
      } catch (error) {
        console.error(error)
        if (cancelled) return
        setCurrentReport(localReportView.report)
        setLearningAdvice(localReportView.learningAdvice)
        setStatusText('AI 诊断失败，已自动回退到本地分析。')
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadReport()

    return () => {
      cancelled = true
    }
  }, [
    totalQuestions,
    reportInput,
    localReportView,
    setCurrentReport,
  ])

  const report = currentReport ?? localReportView.report
  const overallScore = report.overallScore
  const rankPercentile = report.ranking.percentile

  const dimensionScores = useMemo(() => {
    const base = buildDimensionViews(chapterAbilities)
    return base.map((dim) => {
      const matched = report.dimensions.find((item) => item.dimension === dim.name)
      return { ...dim, score: matched?.score ?? dim.score }
    })
  }, [chapterAbilities, report.dimensions])

  const renderedWeakPoints = report.weakPoints
  const renderedRecommendations =
    report.recommendationItems && report.recommendationItems.length > 0
      ? report.recommendationItems
      : recommendations

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-4 shadow-md">
        <Link to="/" className="-ml-2 rounded-full p-2 hover:bg-gray-100">
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-lg font-bold text-gray-800">AI 学习诊断报告</h1>
        <div className="w-10" />
      </header>

      <main className="p-4">
        {statusText && (
          <div className={`mb-4 rounded-2xl p-4 text-sm ${loading ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}`}>
            {statusText}
          </div>
        )}

        {totalQuestions === 0 ? (
          <div className="py-10 text-center">
            <div className="mb-4 text-6xl">📝</div>
            <p className="mb-4 text-lg text-gray-500">还没有做题记录</p>
            <Link
              to="/"
              className="inline-block rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 font-bold text-white shadow-lg"
            >
              开始做题
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-5 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6 text-white shadow-xl">
              <div className="text-center">
                <p className="mb-2 text-sm text-white/80">综合得分</p>
                <div className="mb-3 text-6xl font-bold">
                  {overallScore}
                  <span className="text-2xl">分</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className="rounded-full bg-white/20 px-4 py-1.5 font-medium">超过 {rankPercentile}% 同学</span>
                  {studyStreak > 0 && <span className="font-bold text-yellow-300">连续学习 {studyStreak} 天</span>}
                </div>
              </div>

              <div className="mt-6 flex justify-around border-t border-white/20 pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold">{totalQuestions}</p>
                  <p className="text-xs text-white/70">做题总数</p>
                </div>
                <div className="border-l border-white/20 pl-6 text-center">
                  <p className="text-3xl font-bold">{correctRate}%</p>
                  <p className="text-xs text-white/70">平均正确率</p>
                </div>
                <div className="border-l border-white/20 pl-6 text-center">
                  <p className="text-3xl font-bold">{Math.round((totalStudyTime / 60) * 10) / 10}h</p>
                  <p className="text-xs text-white/70">学习时长</p>
                </div>
              </div>
            </div>

            <div className="mb-5 rounded-3xl bg-white p-5 shadow-lg">
              <h3 className="mb-5 flex items-center text-lg font-bold text-gray-800">
                <span className="mr-2 text-2xl">能力分析</span>
              </h3>
              <div className="space-y-4">
                {dimensionScores.map((dim) => (
                  <div key={dim.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-gray-700">{dim.name}</span>
                      <span
                        className={`font-bold ${
                          dim.score >= 80 ? 'text-green-600' : dim.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                        }`}
                      >
                        {dim.score > 0 ? `${dim.score}分` : '暂无数据'}
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                      <div className={`h-full rounded-full transition-all duration-1000 ${dim.color}`} style={{ width: `${dim.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {renderedWeakPoints.length > 0 && (
              <div className="mb-5 rounded-3xl bg-white p-5 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="flex items-center text-lg font-bold text-gray-800">
                    <span className="mr-2 text-2xl">薄弱知识点</span>
                  </h3>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">需要重点加强</span>
                </div>

                <div className="space-y-4">
                  {renderedWeakPoints.slice(0, 3).map((point, index) => {
                    const chapter = getChapterById(point.chapterId)
                    return (
                      <div key={point.knowledgePointId}>
                        <div className="mb-2 flex items-center">
                          <div
                            className={`mr-3 flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${
                              index === 0 ? 'bg-red-100' : index === 1 ? 'bg-orange-100' : 'bg-yellow-100'
                            }`}
                          >
                            <span
                              className={`text-lg font-bold ${
                                index === 0 ? 'text-red-500' : index === 1 ? 'text-orange-500' : 'text-yellow-600'
                              }`}
                            >
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="font-bold text-gray-800">{point.knowledgePointName}</p>
                            <p className="text-xs text-gray-500">{point.chapterName || chapter?.title || '未知章节'}</p>
                          </div>
                          <div className="text-right">
                            <p
                              className={`text-lg font-bold ${
                                index === 0 ? 'text-red-500' : index === 1 ? 'text-orange-500' : 'text-yellow-600'
                              }`}
                            >
                              {point.masteryRate}%
                            </p>
                            <p className="text-xs text-gray-400">掌握率</p>
                          </div>
                        </div>
                        <div
                          className={`h-2.5 overflow-hidden rounded-full ${
                            index === 0 ? 'bg-red-100' : index === 1 ? 'bg-orange-100' : 'bg-yellow-100'
                          }`}
                        >
                          <div
                            className={`h-full rounded-full ${
                              index === 0 ? 'bg-red-500' : index === 1 ? 'bg-orange-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${point.masteryRate}%` }}
                          />
                        </div>
                        {point.wrongCount > 0 && <p className="mt-1 text-xs text-gray-400">错题 {point.wrongCount} 次</p>}
                        {point.suggestion && <p className="mt-2 text-xs text-gray-500">{point.suggestion}</p>}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {renderedRecommendations.length > 0 && (
              <div className="mb-5 rounded-3xl bg-white p-5 shadow-lg">
                <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
                  <span className="mr-2 text-2xl">AI 推荐学习路径</span>
                </h3>

                <div className="relative space-y-4 pl-8">
                  <div className="absolute bottom-3 left-3 top-3 w-1 rounded-full bg-gradient-to-b from-blue-400 to-purple-400" />

                  {renderedRecommendations.map((rec, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-4">
                        <div className="mb-1 flex items-center">
                          <span className="mr-2 text-lg">{rec.type === 'review' ? '复习' : rec.type === 'practice' ? '练习' : '错题'}</span>
                          <p className="font-bold text-gray-800">{rec.title}</p>
                        </div>
                        <p className="text-sm text-gray-600">{rec.description}</p>
                        {rec.chapterId !== 'all' && (
                          <Link
                            to={`/practice/${rec.chapterId}`}
                            className="mt-3 inline-block rounded-xl bg-blue-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-600"
                          >
                            开始练习
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-3xl border-2 border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-5 shadow-lg">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 shadow-md">
                  <span className="text-base font-bold text-white">建议</span>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-800">AI 学习建议</h4>
                  <p className="leading-relaxed text-gray-700">{learningAdvice || report.summary || localReportView.learningAdvice}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default ReportPage
