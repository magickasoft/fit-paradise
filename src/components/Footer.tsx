'use client'

import { RECIPES_OBJ } from '@/constants.ts/recipes/recipes'
import styled from 'styled-components'

const Container = styled.div`
  background: #ffffff;
  color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 16px;
`

export const Footer = () => {
  const recipesCount = Object.values(RECIPES_OBJ).reduce((acc, recipes) => {
    return acc + recipes.length
  }, 0)

  return (
    <footer>
      <Container>{recipesCount}</Container> {/* Удалён лишний проп color */}
    </footer>
  )
}
