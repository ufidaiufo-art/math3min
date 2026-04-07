import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import {
  DEFAULT_GRADE_ID,
  getCurriculumByGrade,
  normalizeGradeId,
} from '@features/curriculum'

function normalizePath(path = '') {
  if (!path) return ''
  return path.startsWith('/') ? path : `/${path}`
}

export function useGradeRoute() {
  const params = useParams<{ gradeId?: string }>()
  const gradeId = normalizeGradeId(params.gradeId)
  const curriculum = useMemo(() => getCurriculumByGrade(gradeId), [gradeId])

  return {
    gradeId,
    curriculum,
    isDefaultGrade: gradeId === DEFAULT_GRADE_ID,
    buildGradePath: (path = '') => `/${gradeId}${normalizePath(path)}`,
  }
}
