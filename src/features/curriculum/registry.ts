import {
  chapters as grade7Chapters,
} from './grade7/chapters'
import {
  knowledgePoints as grade7KnowledgePoints,
} from './grade7/knowledgePoints'
import {
  allNotes as grade7Notes,
} from './grade7/notes'
import {
  questions as grade7Questions,
} from './grade7/questions'
import type { CurriculumBundle, GradeId } from './types'

export const DEFAULT_GRADE_ID: GradeId = 'grade7'

const emptyBundle = (
  gradeId: GradeId,
  gradeName: string,
  shortLabel: string,
  description: string
): CurriculumBundle => ({
  gradeId,
  gradeName,
  shortLabel,
  enabled: false,
  description,
  chapters: [],
  knowledgePoints: [],
  notes: [],
  questions: [],
})

export const curriculumRegistry: Record<GradeId, CurriculumBundle> = {
  grade7: {
    gradeId: 'grade7',
    gradeName: '初一数学',
    shortLabel: '初一',
    enabled: true,
    description: '已接入完整的初一章节、知识点、笔记与题库。',
    chapters: grade7Chapters,
    knowledgePoints: grade7KnowledgePoints,
    notes: grade7Notes,
    questions: grade7Questions,
  },
  grade8: emptyBundle(
    'grade8',
    '初二数学',
    '初二',
    '初二内容筹备中，后续可直接接入章节、知识点、笔记和题库。'
  ),
  grade9: emptyBundle(
    'grade9',
    '初三数学',
    '初三',
    '初三内容筹备中，后续可直接接入中考专题与综合复习内容。'
  ),
}

export const gradeOptions = Object.values(curriculumRegistry).map((bundle) => ({
  id: bundle.gradeId,
  name: bundle.gradeName,
  shortLabel: bundle.shortLabel,
  enabled: bundle.enabled,
  description: bundle.description,
}))

export function isSupportedGradeId(value?: string): value is GradeId {
  return value === 'grade7' || value === 'grade8' || value === 'grade9'
}

export function normalizeGradeId(value?: string): GradeId {
  return isSupportedGradeId(value) ? value : DEFAULT_GRADE_ID
}

export function getCurriculumByGrade(gradeId?: string): CurriculumBundle {
  return curriculumRegistry[normalizeGradeId(gradeId)]
}
