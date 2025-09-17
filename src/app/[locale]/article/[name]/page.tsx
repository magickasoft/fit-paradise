'use client'

import styled from 'styled-components'

import { maxDevice } from '@/styles/device'
import { PageWrapper } from '@/components/PageWrapper'
import { use } from 'react'
import { ALL_ARTICLES, Article } from '@/app/constants/articles'

const ArticlePage = ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = use(params)
  const article = name ? ALL_ARTICLES[name] : null

  console.log('article', article)

  return <PageWrapper>ArticlePage</PageWrapper>
}

export default ArticlePage
