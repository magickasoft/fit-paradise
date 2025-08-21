'use client'

import styled from 'styled-components'

import { Link } from '@/i18n/navigation'

type VariantType = 'large' | 'medium' | 'small' | 'slider'

const CardHeight: Record<VariantType, string> = {
  large: '400px',
  medium: '200px',
  small: '180px',
  slider: '290px',
}

const Card = styled.div<{ color?: string; variant: VariantType; bgimage?: string; bgsize?: string }>`
  width: 100%;
  background-color: ${({ color }) => color || '#f7f5f6'};
  background-image: ${({ bgimage }) => (bgimage ? `url(${bgimage})` : 'none')};
  background-size: ${({ bgsize }) => bgsize || 'cover'};
  background-position: center;
  background-repeat: no-repeat;
  padding: ${({ variant }) => (variant === 'large' ? '20px' : '12px')};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${({ variant }) => CardHeight[variant]};
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
    height: ${({ variant }) => (variant === 'slider' ? '260px' : variant === 'large' ? '220px' : '180px')};
  }
`

const Title = styled.div<{ variant: VariantType }>`
  font-size: ${({ variant }) => {
    switch (variant) {
      case 'large':
        return '24px'
      case 'medium':
        return '20px'
      case 'small':
        return '18px'
      case 'slider':
        return '22px'
      default:
        return '20px'
    }
  }};
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
    font-size: ${({ variant }) => {
      switch (variant) {
        case 'large':
          return '20px'
        case 'medium':
          return '18px'
        case 'small':
          return '16px'
        case 'slider':
          return '20px'
        default:
          return '18px'
      }
    }};
    padding: 15px;
  }
`

export const CategoryCard = ({
  img,
  label,
  color,
  variant = 'large',
  backgroundSize = 'cover',
}: {
  img: string | null
  label: string
  color: string
  name: string
  variant?: VariantType
  backgroundSize?: string
}) => {
  return (
    <Link
      href={{
        pathname: '/',
        // params: { name },
      }}
      locale="ru"
    >
      <Card role="link" color={color} variant={variant} bgimage={img || undefined} bgsize={backgroundSize}>
        <Title className="card-title" variant={variant}>
          {label}
        </Title>
      </Card>
    </Link>
  )
}
