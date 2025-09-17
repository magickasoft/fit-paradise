'use client'

import styled from 'styled-components'

import { maxDevice } from '@/styles/device'
import { PageWrapper } from '@/components/PageWrapper'
import { use } from 'react'
import { ALL_ARTICLES } from '@/app/constants/articles'

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

const ArticlePage = ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = use(params)
  const article = name ? ALL_ARTICLES[name] : null

  return <PageWrapper>ArticlePage</PageWrapper>
}

export default ArticlePage
