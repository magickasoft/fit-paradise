'use client'

import styled from 'styled-components'
import { CategoryCard } from '../Cards/CategoryCard'
import { SEASONAL_CATEGORIES_ARR } from './constants'
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

export const SeasonalCategories = () => {
  return (
    <Container id="techStacks">
      <Content>
        <Title>СЕЗОННЫЕ КАТЕГОРИИ</Title>
        <Grid>
          {SEASONAL_CATEGORIES_ARR.map(({ key, ...item }) => (
            <CategoryCard key={key} {...item} />
          ))}
        </Grid>
      </Content>
    </Container>
  )
}
