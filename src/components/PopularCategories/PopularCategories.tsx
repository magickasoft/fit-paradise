'use client'

import styled from 'styled-components'

import { CATEGORIES_ARR } from './constants'
import { CategoryCard } from '../Cards/CategoryCard'
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  padding: 10px;

  @media ${maxDevice.tablet} {
    flex-direction: column;
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

export const PopularCategories = () => {
  return (
    <Container id="techStacks">
      <Title>ПОПУЛЯРНЫЕ КАТЕГОРИИ</Title>
      <Wrapper>
        {CATEGORIES_ARR.map(({ name, key, ...category }) => {
          return <CategoryCard key={key || name} name={name} {...category} variant="medium" />
        })}
      </Wrapper>
    </Container>
  )
}
