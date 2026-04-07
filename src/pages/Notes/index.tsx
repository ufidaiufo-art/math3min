import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGradeRoute } from '@hooks/useGradeRoute'
import type { NoteSection } from '@features/curriculum/grade7/notes'

interface ParsedTable {
  headers: string[]
  rows: string[][]
}

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'table'; table: ParsedTable }
  | { type: 'spacer' }

const isTableLine = (line: string) => /^\s*\|.*\|\s*$/.test(line)

const isSeparatorLine = (line: string) => {
  const trimmed = line.trim()
  return (
    isTableLine(trimmed) &&
    trimmed
      .replace(/\|/g, '')
      .trim()
      .split(/\s+/)
      .every((cell) => /^:?-{3,}:?$/.test(cell))
  )
}

const parseTableRow = (line: string) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim())

const parseBlocks = (content: string): ContentBlock[] => {
  const lines = content.replace(/\r\n/g, '\n').split('\n')
  const blocks: ContentBlock[] = []

  let index = 0
  while (index < lines.length) {
    const rawLine = lines[index]
    const line = rawLine.trim()

    if (!line) {
      blocks.push({ type: 'spacer' })
      index += 1
      continue
    }

    const headerLine = lines[index]
    const separatorLine = lines[index + 1]
    if (headerLine && separatorLine && isTableLine(headerLine) && isSeparatorLine(separatorLine)) {
      const table: ParsedTable = {
        headers: parseTableRow(headerLine),
        rows: [],
      }

      index += 2
      while (index < lines.length && isTableLine(lines[index])) {
        table.rows.push(parseTableRow(lines[index]))
        index += 1
      }

      blocks.push({ type: 'table', table })
      continue
    }

    blocks.push({ type: 'paragraph', text: rawLine })
    index += 1
  }

  return blocks
}

const renderInlineContent = (value: string) => {
  const tokens = value.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)

  return tokens.map((token, index) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={`${token}-${index}`} className="font-semibold text-gray-900">
          {token.slice(2, -2)}
        </strong>
      )
    }

    return <React.Fragment key={`${token}-${index}`}>{token}</React.Fragment>
  })
}

const RichContent: React.FC<{ content: string; compact?: boolean }> = ({ content, compact = false }) => {
  const blocks = useMemo(() => parseBlocks(content), [content])

  return (
    <div className={compact ? 'space-y-2 text-sm leading-7 text-gray-700' : 'space-y-3 text-sm leading-7 text-gray-700'}>
      {blocks.map((block, index) => {
        if (block.type === 'spacer') {
          return <div key={`spacer-${index}`} className="h-1" />
        }

        if (block.type === 'table') {
          return (
            <div
              key={`table-${index}`}
              className="overflow-x-auto rounded-2xl border border-indigo-100 bg-indigo-50/60"
            >
              <table className="min-w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-indigo-100/80 text-gray-900">
                    {block.table.headers.map((header, headerIndex) => (
                      <th
                        key={`header-${headerIndex}`}
                        className="border-b border-indigo-200 px-4 py-3 font-semibold"
                      >
                        {renderInlineContent(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.table.rows.map((row, rowIndex) => (
                    <tr key={`row-${rowIndex}`} className="bg-white/90 align-top">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`cell-${rowIndex}-${cellIndex}`}
                          className="border-b border-indigo-100 px-4 py-3 text-gray-700"
                        >
                          {renderInlineContent(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        return (
          <p key={`paragraph-${index}`} className="whitespace-pre-wrap break-words">
            {renderInlineContent(block.text)}
          </p>
        )
      })}
    </div>
  )
}

const Notes: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>()
  const { curriculum, buildGradePath } = useGradeRoute()
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]))

  const allNotes = curriculum.notes
  const chapters = curriculum.chapters
  const getNotesByChapterId = (id: string) => allNotes.find((note) => note.id === id)
  const currentNotes = chapterId ? getNotesByChapterId(chapterId) : null

  const toggleSection = (index: number) => {
    const next = new Set(expandedSections)
    if (next.has(index)) {
      next.delete(index)
    } else {
      next.add(index)
    }
    setExpandedSections(next)
  }

  const expandAll = () => {
    if (!currentNotes) return
    setExpandedSections(new Set(currentNotes.sections.map((_, index) => index)))
  }

  const collapseAll = () => {
    setExpandedSections(new Set())
  }

  if (!chapterId) {
    return (
      <div className="min-h-screen bg-gray-50 pb-24">
        <header className="rounded-b-[2.5rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-6 pb-10 pt-6 text-white shadow-xl">
          <div className="mb-6 flex items-center">
            <Link to={buildGradePath()} className="-ml-2 rounded-full p-2 transition-colors hover:bg-white/10">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="ml-2 text-xl font-bold">知识点笔记</h1>
          </div>
          <p className="text-sm text-white/80">
            {curriculum.enabled
              ? `当前查看 ${curriculum.gradeName} 的章节笔记、重点知识和例题整理。`
              : `${curriculum.gradeName} 笔记内容还在筹备中。`}
          </p>
        </header>

        <main className="-mt-6 p-4">
          {!curriculum.enabled && (
            <div className="mb-5 rounded-3xl bg-white p-6 text-center shadow-lg">
              <div className="mb-3 text-5xl">🛠️</div>
              <h2 className="text-xl font-bold text-gray-800">{curriculum.gradeName} 笔记筹备中</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">{curriculum.description}</p>
              <Link
                to="/grade7/notes"
                className="mt-5 inline-block rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-bold text-white"
              >
                先查看初一笔记
              </Link>
            </div>
          )}

          {curriculum.enabled && (
            <div className="mb-5 rounded-3xl bg-white p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <p className="text-3xl font-bold text-indigo-600">{allNotes.length}</p>
                  <p className="text-sm text-gray-500">章节笔记</p>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div className="flex-1 text-center">
                  <p className="text-3xl font-bold text-purple-600">{allNotes.reduce((sum, note) => sum + note.sections.length, 0)}</p>
                  <p className="text-sm text-gray-500">知识点</p>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div className="flex-1 text-center">
                  <p className="text-3xl font-bold text-pink-600">{allNotes.reduce((sum, note) => sum + (note.formulas?.length || 0), 0)}</p>
                  <p className="text-sm text-gray-500">公式</p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {chapters.map((chapter) => {
              const notes = getNotesByChapterId(chapter.id)
              const hasNotes = Boolean(notes)

              return (
                <Link
                  key={chapter.id}
                  to={hasNotes ? buildGradePath(`/notes/${chapter.id}`) : '#'}
                  className={`block rounded-3xl bg-white p-5 shadow-md transition-all ${hasNotes ? 'active:scale-95 hover:shadow-xl' : 'opacity-50'}`}
                  onClick={(event) => {
                    if (!hasNotes) {
                      event.preventDefault()
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div
                      className="mr-4 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner"
                      style={{ backgroundColor: `${chapter.color}20` }}
                    >
                      {chapter.icon}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center">
                        <h3 className="text-lg font-bold text-gray-800">{chapter.title}</h3>
                        {chapter.isKeyChapter && (
                          <span className="ml-2 rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-600">
                            重点
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{chapter.subtitle}</p>
                      {hasNotes ? (
                        <div className="mt-2 flex items-center text-xs text-gray-400">
                          <span className="mr-3">{notes?.sections.length} 个知识点</span>
                          {notes?.formulas && <span>{notes.formulas.length} 个公式</span>}
                        </div>
                      ) : (
                        <p className="mt-2 text-xs text-gray-400">笔记整理中...</p>
                      )}
                    </div>
                    {hasNotes && (
                      <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

  if (!currentNotes) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
          <div className="mb-4 text-6xl">📝</div>
          <p className="mb-4 text-lg text-gray-500">这一章的笔记还在整理中</p>
          <Link
            to={buildGradePath('/notes')}
            className="inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-bold text-white"
          >
            返回笔记列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="sticky top-0 z-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 pb-8 pt-4 text-white shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <Link to={buildGradePath('/notes')} className="-ml-2 rounded-full p-2 transition-colors hover:bg-white/10">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="rounded-full bg-white/20 px-3 py-1.5 text-xs transition-colors hover:bg-white/30"
            >
              展开全部
            </button>
            <button
              onClick={collapseAll}
              className="rounded-full bg-white/20 px-3 py-1.5 text-xs transition-colors hover:bg-white/30"
            >
              收起全部
            </button>
          </div>
        </div>
        <h1 className="mb-2 text-2xl font-bold">{currentNotes.title}</h1>
        <p className="text-sm leading-7 text-white/90">{currentNotes.summary}</p>
      </header>

      <main className="-mt-4 p-4">
        <div className="space-y-4">
          {currentNotes.sections.map((section: NoteSection, index: number) => (
            <div key={index} className="overflow-hidden rounded-2xl bg-white shadow-md">
              <button
                onClick={() => toggleSection(index)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-bold text-gray-800">{section.title}</h3>
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform ${expandedSections.has(index) ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedSections.has(index) && (
                <div className="border-t border-gray-100 px-4 pb-5">
                  <div className="mt-4 rounded-2xl bg-gray-50 p-4">
                    <RichContent content={section.content} />
                  </div>

                  {section.examples && section.examples.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {section.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="rounded-2xl bg-blue-50 p-4">
                          <h4 className="mb-2 font-bold text-blue-700">{example.title}</h4>
                          <RichContent content={example.content} compact />
                        </div>
                      ))}
                    </div>
                  )}

                  {section.tips && section.tips.length > 0 && (
                    <div className="mt-4 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
                      <h4 className="mb-2 flex items-center font-bold text-yellow-700">
                        <span className="mr-2">💡</span>
                        学习提示
                      </h4>
                      <ul className="space-y-2">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start text-sm leading-6 text-gray-700">
                            <span className="mr-2 text-yellow-500">•</span>
                            <span>{tip}</span>
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

        {currentNotes.formulas && currentNotes.formulas.length > 0 && (
          <div className="mt-6 rounded-2xl border-2 border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-5">
            <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
              <span className="mr-2 text-2xl">📘</span>
              公式汇总
            </h3>
            <div className="space-y-3">
              {currentNotes.formulas.map((formula, index) => (
                <div key={index} className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="break-words font-mono text-sm text-gray-800">{formula}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentNotes.commonMistakes && currentNotes.commonMistakes.length > 0 && (
          <div className="mt-6 rounded-2xl border-2 border-red-100 bg-gradient-to-r from-red-50 to-orange-50 p-5">
            <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
              <span className="mr-2 text-2xl">⚠️</span>
              常见错误
            </h3>
            <ul className="space-y-2">
              {currentNotes.commonMistakes.map((mistake, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <span className="mr-2 font-bold text-red-500">{index + 1}.</span>
                  <span>{mistake}</span>
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
