import { advicesArticles } from './advices'

export interface Article {
  id: string
  img?: string | null
  title: string
  description: string
  author: string
  date: string
  tags: string[]
  content: string[]
}

export const ARTICLES_ARR: Record<string, Record<string, Article>> = {
  advicesArticles,
  healthArticles: {},
  motivationArticles: {},
  relaxationArticles: {},
}

export const ALL_ARTICLES = Object.values(ARTICLES_ARR).reduce((acc, obj) => {
  return { ...acc, ...obj }
}, {})
