'use client'

import styled from 'styled-components'

import { RecipeCard } from '../Cards/RecipeCard'
import { CATEGORIES_ARR } from './constants'
import { CategoryCard } from '../Cards/CategoryCard'
import { RECIPES_OBJ } from '@/constants.ts/recipes/recipes'
import { maxDevice } from '@/styles/device'

const Container = styled.section`
  background-color: #ffffff;
  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 100px;
  margin: 0 auto 40px;

  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`

const H5 = styled.h5`
  font-weight: 600;
  margin: 0 0 12px 0;
  font-size: 24px;
  line-height: 1.3;

  @media ${maxDevice.laptop} {
    font-size: 26px;
  }
  @media ${maxDevice.tablet} {
    font-size: 22px;
    margin: 0 0 8px 0;
  }
`

const Wrapper = styled.div`
  padding: 10px;

  @media ${maxDevice.tablet} {
    padding: 16px 12px;
  }
`

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;

  @media ${maxDevice.tablet} {
    font-size: 20px;
    text-align: center;
  }
`

const CategoryRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 24px;

  @media ${maxDevice.tablet} {
    flex-direction: column;
    gap: 4px;
  }
`

const CategoryCardWrapper = styled.div`
  flex-shrink: 0;

  @media ${maxDevice.tablet} {
    width: 100%;
  }
`

const RecipesScroll = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 8px;
  max-width: 94vw;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
`

export const PopularCategories = () => {
  return (
    <Container id="techStacks">
      <Wrapper>
        <Title>ПОПУЛЯРНЫЕ КАТЕГОРИИ</Title>

        {CATEGORIES_ARR.map(({ name, key, ...category }) => {
          const recipes = RECIPES_OBJ[name]?.slice(0, 10) || []

          return (
            <CategoryRow key={key || name}>
              <CategoryCardWrapper>
                <CategoryCard key={key || name} name={name} {...category} variant="slider" />
              </CategoryCardWrapper>

              {recipes.length > 0 && (
                <RecipesScroll>
                  {recipes.map(({ key, name, ...recipe }) => (
                    <RecipeCard name={name} key={key || name} {...recipe} />
                  ))}
                </RecipesScroll>
              )}
            </CategoryRow>
          )
        })}
      </Wrapper>
    </Container>
  )
}
