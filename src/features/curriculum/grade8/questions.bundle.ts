import type { QuestionData } from '../../../data/questions'
import { questions as rawQuestions } from './questions'
import { knowledgePoints } from './knowledgePoints'

type RawQuestion = (typeof rawQuestions)[number]

const knowledgePointToChapterId = new Map(
  knowledgePoints.map((item) => [item.id, item.chapterId])
)

const difficultyMap: Record<number, QuestionData['difficulty']> = {
  1: 'easy',
  2: 'medium',
  3: 'hard',
}

const pointsMap: Record<QuestionData['difficulty'], number> = {
  easy: 5,
  medium: 10,
  hard: 15,
}

const questionTypeMap: Record<string, QuestionData['type']> = {
  choice: 'single_choice',
  fill: 'fill_blank',
  solution: 'fill_blank',
}

function extractOptions(question: string): string[] | undefined {
  const normalized = question.replace(/\r\n/g, '\n')

  if (!/(?:^|\n)\s*A\.\s*/.test(normalized)) {
    return undefined
  }

  const matches = [
    ...normalized.matchAll(/(?:^|\n)\s*([A-D])\.\s*([\s\S]*?)(?=(?:\n\s*[A-D]\.\s*)|$)/g),
  ]

  if (matches.length === 0) {
    return undefined
  }

  return matches.map((match) => match[2].trim())
}

function normalizeContent(question: string): string {
  const normalized = question.replace(/\r\n/g, '\n')
  const optionStart = normalized.search(/(?:^|\n)\s*A\.\s*/)

  if (optionStart === -1) {
    return normalized.trim()
  }

  return normalized.slice(0, optionStart).trim()
}

function inferChapterId(rawQuestion: RawQuestion): string {
  return knowledgePointToChapterId.get(rawQuestion.knowledgePointId) ?? 'ch1'
}

function normalizeQuestion(rawQuestion: RawQuestion): QuestionData {
  const difficulty = difficultyMap[rawQuestion.difficulty] ?? 'medium'
  const type = questionTypeMap[rawQuestion.type] ?? 'fill_blank'
  const options = rawQuestion.type === 'choice' ? extractOptions(rawQuestion.question) : undefined

  return {
    id: rawQuestion.id,
    chapterId: inferChapterId(rawQuestion),
    knowledgePointId: rawQuestion.knowledgePointId,
    type,
    content: normalizeContent(rawQuestion.question),
    options,
    answer: rawQuestion.answer,
    analysis: rawQuestion.analysis,
    difficulty,
    points: pointsMap[difficulty],
  }
}

export const questions: QuestionData[] = rawQuestions.map(normalizeQuestion)
