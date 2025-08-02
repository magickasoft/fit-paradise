'use client'

import { PageWrapper } from '@/components/PageWrapper'
import { RECIPES_OBJ } from '@/constants.ts/recipes/recipes'
import { RecipeCard } from '@/components/Cards/RecipeCard'

import styled from 'styled-components'
import { useIsMobile } from '@/components/hooks/useIsMobile.client'

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

export default function CategoryPage({ params }: { params: { name: string } }) {
  const recipes = params.name ? RECIPES_OBJ[params.name] : []
  const isMobile = useIsMobile()
  const variant = isMobile ? 'full' : 'base'

  return (
    <PageWrapper>
      <Cards>
        {recipes.map(({ key, ...current }) => (
          <RecipeCard key={key} {...current} variant={variant} />
        ))}
      </Cards>
    </PageWrapper>
  )
}
