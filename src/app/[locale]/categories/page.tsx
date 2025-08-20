'use client'

import styled from 'styled-components'

import { maxDevice } from '@/styles/device'
import { SEASONAL_CATEGORIES_ARR } from '@/components/MainCategories/constants'
import { CATEGORIES_ARR } from '@/components/PopularCategories/constants'
import { CategoryCard } from '@/components/Cards/CategoryCard'
import { PageWrapper } from '@/components/PageWrapper'

const Container = styled.section`
  background-color: #ffffff;
  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 100px;
  margin-bottom: 40px;

  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

const Content = styled.div`
  padding: 5px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5px;
`

const CategoriesPage = () => {
  const allCategories = [...SEASONAL_CATEGORIES_ARR, ...CATEGORIES_ARR]

  return (
    <PageWrapper>
      <Container>
        <Content>
          <Grid>
            {allCategories.map(({ key, ...item }) => (
              <CategoryCard key={key} {...item} variant="medium" />
            ))}
          </Grid>
        </Content>
      </Container>
    </PageWrapper>
  )
}

export default CategoriesPage
