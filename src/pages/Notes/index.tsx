import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { allNotes, getNotesByChapterId, type ChapterNotes, type NoteSection } from '../../data/notes'
import { chapters } from '../../data/chapters'

const Notes: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>()
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]))
  
  // 如果指定了章节，显示该章节笔记；否则显示笔记列表
  const currentNotes = chapterId ? getNotesByChapterId(chapterId) : null
  
  const toggleSection = (index: number) => {
    const newSet = new Set(expandedSections)
    if (newSet.has(index)) {
      newSet.delete(index)
    } else {
      newSet.add(index)
    }
    setExpandedSections(newSet)
  }
  
  // 展开/收起所有
  const expandAll = () => {
    if (currentNotes) {
      setExpandedSections(new Set(currentNotes.sections.map((_, i) => i)))
    }
  }
  
  const collapseAll = () => {
    setExpandedSections(new Set())
  }
  
  // 渲染笔记列表页
  if (!chapterId) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        {/* 顶部 */}
        <header className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6 pb-10 rounded-b-[2.5rem] shadow-xl">
          <div className="flex items-center mb-6">
            <Link to="/" className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </Link>
            <h1 className="font-bold text-xl ml-2">📚 知识点笔记</h1>
          </div>
          <p className="text-white/80 text-sm">完整的初一数学知识点笔记，随时查阅复习</p>
        </header>
        
        <main className="p-4 -mt-6">
          {/* 统计卡片 */}
          <div className="bg-white rounded-3xl p-5 shadow-lg mb-5">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <p className="text-3xl font-bold text-indigo-600">{allNotes.length}</p>
                <p className="text-sm text-gray-500">章节课</p>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-center flex-1">
                <p className="text-3xl font-bold text-purple-600">
                  {allNotes.reduce((sum, n) => sum + n.sections.length, 0)}
                </p>
                <p className="text-sm text-gray-500">知识点</p>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div className="text-center flex-1">
                <p className="text-3xl font-bold text-pink-600">
                  {allNotes.reduce((sum, n) => sum + (n.formulas?.length || 0), 0)}
                </p>
                <p className="text-sm text-gray-500">公式</p>
              </div>
            </div>
          </div>
          
          {/* 章节列表 */}
          <div className="space-y-4">
            {chapters.map((chapter) => {
              const notes = getNotesByChapterId(chapter.id)
              const hasNotes = !!notes
              
              return (
                <Link
                  key={chapter.id}
                  to={hasNotes ? `/notes/${chapter.id}` : '#'}
                  className={`block bg-white rounded-3xl p-5 shadow-md transition-all ${
                    hasNotes ? 'hover:shadow-xl active:scale-95' : 'opacity-50'
                  }`}
                  onClick={(e) => !hasNotes && e.preventDefault()}
                >
                  <div className="flex items-center">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mr-4 shadow-inner"
                      style={{ backgroundColor: `${chapter.color}20` }}
                    >
                      {chapter.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h3 className="font-bold text-gray-800 text-lg">{chapter.title}</h3>
                        {chapter.isKeyChapter && (
                          <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">
                            重点
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm">{chapter.subtitle}</p>
                      {hasNotes ? (
                        <div className="flex items-center mt-2 text-xs text-gray-400">
                          <span className="mr-3">📖 {notes.sections.length} 个知识点</span>
                          {notes.formulas && <span>📝 {notes.formulas.length} 个公式</span>}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-400 mt-2">笔记整理中...</p>
                      )}
                    </div>
                    {hasNotes && (
                      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </main>
      </div>
    )
  }
  
  // 渲染具体章节笔记
  if (!currentNotes) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-gray-500 text-lg mb-4">该章节笔记正在整理中</p>
          <Link 
            to="/notes"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            返回笔记列表
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 顶部 */}
      <header className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-4 pb-8 sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <Link to="/notes" className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </Link>
          <div className="flex gap-2">
            <button 
              onClick={expandAll}
              className="text-xs bg-white/20 px-3 py-1.5 rounded-full hover:bg-white/30 transition-colors"
            >
              展开全部
            </button>
            <button 
              onClick={collapseAll}
              className="text-xs bg-white/20 px-3 py-1.5 rounded-full hover:bg-white/30 transition-colors"
            >
              收起全部
            </button>
          </div>
        </div>
        <h1 className="font-bold text-2xl mb-2">{currentNotes.title}</h1>
        <p className="text-white/80 text-sm">{currentNotes.summary}</p>
      </header>
      
      <main className="p-4 -mt-4">
        {/* 知识点列表 */}
        <div className="space-y-4">
          {currentNotes.sections.map((section: NoteSection, index: number) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* 标题栏 */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-bold text-gray-800 text-left">{section.title}</h3>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedSections.has(index) ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              
              {/* 内容 */}
              {expandedSections.has(index) && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  {/* 主要内容 */}
                  <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                    {section.content}
                  </div>
                  
                  {/* 例题 */}
                  {section.examples && section.examples.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {section.examples.map((example: {title: string, content: string}, exIndex: number) => (
                        <div key={exIndex} className="bg-blue-50 rounded-xl p-4">
                          <h4 className="font-bold text-blue-700 mb-2">{example.title}</h4>
                          <p className="text-gray-700 text-sm whitespace-pre-line">{example.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 提示 */}
                  {section.tips && section.tips.length > 0 && (
                    <div className="mt-4 bg-yellow-50 rounded-xl p-4">
                      <h4 className="font-bold text-yellow-700 mb-2 flex items-center">
                        <span className="mr-2">💡</span> 学习提示
                      </h4>
                      <ul className="space-y-1">
                        {section.tips.map((tip: string, tipIndex: number) => (
                          <li key={tipIndex} className="text-gray-700 text-sm flex items-start">
                            <span className="text-yellow-500 mr-2">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* 公式汇总 */}
        {currentNotes.formulas && currentNotes.formulas.length > 0 && (
          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 border-2 border-indigo-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
              <span className="text-2xl mr-2">📝</span> 公式汇总
            </h3>
            <div className="space-y-3">
              {currentNotes.formulas.map((formula: string, index: number) => (
                <div key={index} className="bg-white rounded-xl p-3 shadow-sm">
                  <p className="text-gray-800 font-mono text-sm">{formula}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 常见错误 */}
        {currentNotes.commonMistakes && currentNotes.commonMistakes.length > 0 && (
          <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 border-2 border-red-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
              <span className="text-2xl mr-2">⚠️</span> 常见错误
            </h3>
            <ul className="space-y-2">
              {currentNotes.commonMistakes.map((mistake: string, index: number) => (
                <li key={index} className="text-gray-700 text-sm flex items-start">
                  <span className="text-red-500 mr-2 font-bold">{index + 1}.</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  )
}

export default Notes
