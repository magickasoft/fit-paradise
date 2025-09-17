import { advicesArticles } from '@/app/constants/articles/advices'
import { healthArticles } from '@/app/constants/articles/health'
import { motivationArticles } from '@/app/constants/articles/motivation'

export const CATEGORIES_ARR: { key: string; label: string; img?: string | null; color: string }[] = [
  {
    key: healthArticles.id,
    label: healthArticles.title,
    img: healthArticles.img || undefined,
    color: '#E9E4DF',
  },
  {
    key: motivationArticles.id,
    label: motivationArticles.title,
    img: motivationArticles.img || undefined,
    color: '#D8E0E3',
  },
  {
    key: advicesArticles.id,
    label: advicesArticles.title,
    img: advicesArticles.img || undefined,
    color: '#DCE6F2',
  },
]
