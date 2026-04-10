import type { ChapterNotes, NoteSection } from '../../../data/notes'
import { chapters } from './chapters'
import { knowledgePoints } from './knowledgePoints'
import { notes_001_010 } from './notes_001_010'
import { notes_011_020 } from './notes_011_020'
import { notes_021_030 } from './notes_021_030'
import { notes_031_034 } from './notes_031_034'
import { notes_035_046 } from './notes_035_046'

type RawNoteEntry = {
  coreConcepts: string[]
  keyFormulas?: string[]
  commonMistakes?: string[]
  memoryTips?: string[]
}

const rawNotesByKnowledgePoint: Record<string, RawNoteEntry> = {
  ...notes_001_010,
  ...notes_011_020,
  ...notes_021_030,
  ...notes_031_034,
  ...notes_035_046,
}

function buildSection(title: string, entry: RawNoteEntry): NoteSection {
  const contentParts = [
    `核心概念：${entry.coreConcepts.join('；')}`,
    entry.memoryTips?.length ? `记忆提示：${entry.memoryTips.join('；')}` : '',
  ].filter(Boolean)

  return {
    title,
    content: contentParts.join('\n\n'),
    tips: entry.memoryTips,
  }
}

export const allNotes: ChapterNotes[] = chapters.map((chapter) => {
  const chapterKnowledgePoints = knowledgePoints.filter(
    (knowledgePoint) =>
      knowledgePoint.chapterId === chapter.id &&
      !knowledgePoint.id.endsWith('_example')
  )

  const sectionPairs = chapterKnowledgePoints
    .map((knowledgePoint) => {
      const noteEntry = rawNotesByKnowledgePoint[knowledgePoint.id]
      if (!noteEntry) {
        return null
      }

      return {
        knowledgePoint,
        noteEntry,
      }
    })
    .filter(
      (
        pair
      ): pair is {
        knowledgePoint: (typeof knowledgePoints)[number]
        noteEntry: RawNoteEntry
      } => pair !== null
    )

  const formulas = Array.from(
    new Set(sectionPairs.flatMap(({ noteEntry }) => noteEntry.keyFormulas ?? []))
  )
  const commonMistakes = Array.from(
    new Set(sectionPairs.flatMap(({ noteEntry }) => noteEntry.commonMistakes ?? []))
  )

  return {
    id: chapter.id,
    title: `${chapter.title}笔记`,
    summary:
      sectionPairs.length > 0
        ? `覆盖${sectionPairs.map(({ knowledgePoint }) => knowledgePoint.title).join('、')}等知识点。`
        : `${chapter.title}笔记整理中。`,
    sections: sectionPairs.map(({ knowledgePoint, noteEntry }) =>
      buildSection(knowledgePoint.title, noteEntry)
    ),
    formulas: formulas.length > 0 ? formulas : undefined,
    commonMistakes: commonMistakes.length > 0 ? commonMistakes : undefined,
  }
})

export const getNotesByChapterId = (chapterId: string): ChapterNotes | undefined => {
  return allNotes.find((note) => note.id === chapterId)
}
