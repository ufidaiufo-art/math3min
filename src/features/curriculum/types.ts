import type { ChapterData } from '../../data/chapters'
import type { KnowledgePointData } from '../../data/knowledgePoints'
import type { ChapterNotes } from '../../data/notes'
import type { QuestionData } from '../../data/questions'

export type GradeId = 'grade7' | 'grade8' | 'grade9'

export interface CurriculumBundle {
  gradeId: GradeId
  gradeName: string
  shortLabel: string
  enabled: boolean
  description: string
  chapters: ChapterData[]
  knowledgePoints: KnowledgePointData[]
  notes: ChapterNotes[]
  questions: QuestionData[]
}
