'use client'

import { PageWrapper } from '@/components/PageWrapper'
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

export default function CategoryPage() {
  // const resolvedParams = use(params) // Unwrap the Promise
  // const recipes = resolvedParams.name ? RECIPES_OBJ[resolvedParams.name] : []
  // const isMobile = useIsMobile()
  // const variant = isMobile ? 'full' : 'base'

  return (
    <PageWrapper>
      <Cards>
        CARD
        {/* {recipes.map(({ key, ...current }) => (
          <RecipeCard key={key} {...current} variant={variant} />
        ))} */}
      </Cards>
    </PageWrapper>
  )
}
