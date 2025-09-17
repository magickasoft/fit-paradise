'use client'

import styled from 'styled-components'

import { maxDevice } from '@/styles/device'
import { PageWrapper } from '@/components/PageWrapper'
import { use } from 'react'
import { ALL_ARTICLES } from '@/app/constants/articles'

const ArticlePage = ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = use(params)
  const article = name ? ALL_ARTICLES[name] : null

  if (!article) return <PageWrapper>Статья не найдена</PageWrapper>

  return (
    <PageWrapper>
      <ArticleWrapper>
        <TopSection>
          {article.img && <ArticleImage src={article.img} alt={article.title} />}
          <Info>
            <Title>{article.title}</Title>
            <Meta>
              <Author>{article.author}</Author>
              <Date>{article.date}</Date>
            </Meta>
            <Description>{article.description}</Description>
            <Tags>
              {article.tags.map(tag => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </Tags>
          </Info>
        </TopSection>

        <Content>
          {article.content.map((paragraph, idx) => (
            <Paragraph key={idx}>{paragraph}</Paragraph>
          ))}
        </Content>
      </ArticleWrapper>
    </PageWrapper>
  )
}

export default ArticlePage

// ========== Styled Components ==========

const ArticleWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;

  @media ${maxDevice.tablet} {
    padding: 20px 15px;
  }
`

const TopSection = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  @media ${maxDevice.tablet} {
    flex-direction: column;
    gap: 20px;
  }
`

const ArticleImage = styled.img`
  width: 300px;
  border-radius: 10px;

  @media ${maxDevice.tablet} {
    width: 100%;
  }
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`

const Meta = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 15px;
`

const Author = styled.span``

const Date = styled.span``

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 15px;
`

const Tags = styled.div`
  margin-bottom: 15px;
`

const Tag = styled.span`
  margin-right: 10px;
  color: #0070f3;
  cursor: pointer;
`

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.7;
`

const Paragraph = styled.p`
  margin-bottom: 15px;
`
