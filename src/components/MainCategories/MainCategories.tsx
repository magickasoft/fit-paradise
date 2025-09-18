'use client'

import styled from 'styled-components'
import { MAIN_CATEGORIES_ARR } from './constants'
import { maxDevice } from '@/styles/device'
import { MainCategoryCard } from '../Cards/MainCategoryCard'

const Container = styled.section`
  background-color: #ffffff;
  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 20px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;

  & > * {
    flex: 1 1 350px;
    width: 30%;
    max-width: 500px;
  }
`

const Content = styled.div`
  padding: 10px;
  padding-top: 40px;
`

export const MainCategories = () => {
  return (
    <Container id="techStacks">
      <Content>
        <Grid>
          {MAIN_CATEGORIES_ARR.map(({ key, ...item }) => (
            <MainCategoryCard title={item.label} key={key} {...item} />
          ))}
        </Grid>
      </Content>
    </Container>
  )
}
