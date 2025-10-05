'use client'

import styled from 'styled-components'

import { maxDevice } from '@/styles/device'
import { PageWrapper } from '@/components/PageWrapper'
import { ARTICLES_CATEGORIES_ARR } from '@/app/constants/articles'
import { CategoryCard } from '@/components/Cards/CategoryCard'

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
  return (
    <PageWrapper>
      <Container>
        <Content>
          <Grid>
            {Object.values(ARTICLES_CATEGORIES_ARR).map(({ id, ...item }) => (
              <CategoryCard color={''} name={id} key={id} {...item} variant="medium" />
            ))}
          </Grid>
        </Content>
      </Container>
    </PageWrapper>
  )
}

export default CategoriesPage
