'use client'

import styled from 'styled-components'
import { CategoryCard } from '../Cards/CategoryCard'
import { MAIN_CATEGORIES_ARR } from './constants'
import { maxDevice } from '@/styles/device'

const Container = styled.section`
  background-color: #ffffff;
  min-height: 300px;

  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0px 100px;
  margin-bottom: 40px;
  margin-top: 20px;

  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  & > * {
    flex: 1 1 350px;
    max-width: 400px;
  }
`

const Content = styled.div`
  padding: 10px;
  padding-top: 100px;
`

export const MainCategories = () => {
  return (
    <Container id="techStacks">
      <Content>
        <Grid>
          {MAIN_CATEGORIES_ARR.map(({ key, ...item }) => (
            <CategoryCard key={key} {...item} variant="large" />
          ))}
        </Grid>
      </Content>
    </Container>
  )
}
