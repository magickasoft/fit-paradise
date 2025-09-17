'use client'

import styled from 'styled-components'

import { Link } from '@/i18n/navigation'

type VariantType = 'large' | 'medium' | 'small' | 'slider'

const Card = styled.div<{ color?: string; bgimage?: string; bgsize?: string }>`
  width: 100%;
  background-color: ${({ color }) => color || '#f7f5f6'};
  background-image: ${({ bgimage }) => (bgimage ? `url(${bgimage})` : 'none')};
  background-size: ${({ bgsize }) => bgsize || 'cover'};
  background-position: center;
  background-repeat: no-repeat;
  padding: '20px';
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 400px;
  min-width: 250px;
  border-radius: 16px;
  overflow: hidden;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease,
    opacity 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
    z-index: 1;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

    .card-title {
      font-weight: 700;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    min-width: 220px;
    height: 220px;
  }
`

const Title = styled.div`
  font-size: '24px';
  font-weight: 600;
  line-height: 1.2;
  color: white;
  margin: 0;
  position: relative;
  z-index: 2;
  text-align: left;
  transition:
    transform 0.3s ease,
    font-weight 0.3s ease;
  padding: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 15px;
  }
`

export const MainCategoryCard = ({
  img,
  title,
  color,
  backgroundSize = 'cover',
  link,
  name,
}: {
  img?: string | null
  title: string
  color: string
  name: 'trainings' | 'relaxation' | 'nutrition'
  variant?: VariantType
  backgroundSize?: string
  link?: string
}) => {
  const renderCard = () => (
    <Card role="link" color={color} bgimage={img || undefined} bgsize={backgroundSize}>
      <Title className="card-title">{title}</Title>
    </Card>
  )

  if (link?.startsWith('http')) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
        {renderCard()}
      </a>
    )
  }

  return (
    <Link href={`/${name}`} locale="ru">
      {renderCard()}
    </Link>
  )
}
