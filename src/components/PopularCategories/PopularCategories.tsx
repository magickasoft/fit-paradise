'use client'

import styled from 'styled-components'

import { CATEGORIES_ARR } from './constants'
import { CategoryCard } from '../Cards/CategoryCard'
import { maxDevice } from '@/styles/device'
import { ArticleCard } from '../Cards/ArticleCard'
import { ArticlesScroll } from '../RecipesScroll'
import { ARTICLES_CATEGORIES_ARR } from '@/app/constants/articles'

const Container = styled.section`
  background-color: #ffffff;

  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 50px;
  margin: 0 auto 40px;

  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 10px;

  @media ${maxDevice.tablet} {
    flex-direction: column;
    padding: 16px 12px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const Title = styled.h2`
  margin-bottom: 32px;
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

export const PopularCategories = () => {
  return (
    <Container id="techStacks">
      <TitleContainer>
        <Title>ПОПУЛЯРНЫЕ КАТЕГОРИИ СТАТЕЙ</Title>
      </TitleContainer>

      <Wrapper>
        {CATEGORIES_ARR.map(({ key, label, ...category }) => {
          const articles = Object.values(ARTICLES_CATEGORIES_ARR[`${key}Articles`].content).slice(0, 10) || []

          return (
            <CategoryRow key={key}>
              <CategoryCardWrapper>
                <CategoryCard title={label} key={key} name={key} {...category} variant="slider" />
              </CategoryCardWrapper>

              {articles.length > 0 && (
                <ArticlesScroll>
                  {articles.map(article => (
                    <ArticleCard key={article.id} {...article} />
                  ))}
                </ArticlesScroll>
              )}
            </CategoryRow>
          )
        })}
      </Wrapper>
    </Container>
  )
}
