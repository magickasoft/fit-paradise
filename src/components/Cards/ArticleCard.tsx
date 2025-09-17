'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { minDevice } from '@/styles/device'
import { FiClock, FiStar } from 'react-icons/fi'
import { Link } from '@/i18n/navigation'
import { use } from 'react'

const Card = styled.div<{
  variant?: string
}>`
  background: #fffdfa;
  border-radius: 12px;
  border: 1px solid #eee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: ${({ variant }) => (variant === 'base' ? '220px' : '100%')};
  min-height: 280px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }
`

const ImageBlock = styled.div<{
  variant?: string
}>`
  position: relative;
  width: 100%;
  height: ${({ variant }) => (variant === 'full' ? '140px' : 'auto')};
  aspect-ratio: 1.3 / 1;
  background: #f5f3f3;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  flex: 1;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${minDevice.laptop} {
    font-size: 16px;
  }
`

const Description = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.4;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Characteristic = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: #444;
`

const CharItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

type ArticleCardProps = {
  img?: string | null
  id: string
  title: string
  description: string
  variant?: 'full' | 'base'
}

export const ArticleCard = ({ img, id, title, description, variant = 'base' }: ArticleCardProps) => {
  return (
    <Link
      href={{
        pathname: '/article/[name]',
        params: { name: id },
      }}
      locale="ru"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card variant={variant}>
        <ImageBlock variant={variant}>
          {img ? (
            <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} sizes="220px" />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                color: '#aaa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Нет изображения
            </div>
          )}
        </ImageBlock>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
      </Card>
    </Link>
  )
}
