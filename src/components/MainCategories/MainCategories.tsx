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
  margin-bottom: 20px;

  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`

const Content = styled.div`
  padding: 10px;
  padding-top: 100px;
`

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;

  @media ${maxDevice.tablet} {
    font-size: 20px;
    text-align: center;
  }
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
