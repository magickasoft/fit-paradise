import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Page } from '../../components'
import { RecipeCard } from '../../components/cards/recipe-card'
import { RECIPES_OBJ } from '../../constants.ts/recipes/recipes'

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [breakpoint])

  return isMobile
}

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

const CategoryPage = () => {
  const router = useRouter()
  const { name } = router.query as { name?: string }

  const recipes = name ? RECIPES_OBJ[name] : []
  const isMobile = useIsMobile()
  const variant = isMobile ? 'full' : 'base'

  return (
    <Page>
      <Cards>
        {recipes.map(({ key, ...current }) => (
          <RecipeCard key={key} {...current} variant={variant} />
        ))}
      </Cards>
    </Page>
  )
}

export default CategoryPage
