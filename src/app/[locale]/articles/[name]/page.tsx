'use client'

import { ARTICLES_CATEGORIES_ARR } from '@/app/constants/articles'

import { ArticleCard } from '@/components/Cards/ArticleCard'
import { useIsMobile } from '@/components/hooks/useIsMobile.client'
import { PageWrapper } from '@/components/PageWrapper'
import { use } from 'react'
import styled from 'styled-components'

const Cards = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: hidden;
`

export default function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = use(params)

  const articles = resolvedParams.name ? ARTICLES_CATEGORIES_ARR[`${resolvedParams.name}Articles`].content : []
  const isMobile = useIsMobile()
  const variant = isMobile ? 'full' : 'base'

  return (
    <PageWrapper>
      <Cards>
        {Object.values(articles).map(current => (
          <ArticleCard key={current.id} {...current} variant={variant} />
        ))}
      </Cards>
    </PageWrapper>
  )
}
