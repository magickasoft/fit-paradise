import { advicesArticles } from './advices'
import { healthArticles } from './health'
import { motivationArticles } from './motivation'

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

export interface ArticleCategory {
  id: string
  title: string
  img?: string | null
  description: string
  content: { [key: string]: Article }
}

export const ARTICLES_CATEGORIES_ARR: Record<string, ArticleCategory> = {
  advicesArticles,
  healthArticles,
  motivationArticles,
}

export const ALL_ARTICLES: { [key: string]: Article } = Object.values(ARTICLES_CATEGORIES_ARR).reduce((acc, obj) => {
  return { ...acc, ...obj.content }
}, {})
