'use client';

import styled from 'styled-components';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';

type VariantType = 'large' | 'medium' | 'small' | 'slider';

const CardHeight: Record<VariantType, string> = {
  large: '250px',
  medium: '200px',
  small: '180px',
  slider: '290px',
};

const ContentWidth: Record<VariantType, number> = {
  large: 240,
  medium: 180,
  small: 140,
  slider: 240,
};

const ContentHeight: Record<VariantType, number> = {
  large: 220,
  medium: 160,
  small: 120,
  slider: 220,
};

const Card = styled.div<{ color?: string; variant: VariantType }>`
  background-color: ${({ color }) => color || '#f7f5f6'};
  padding: ${({ variant }) => (variant === 'large' ? '20px' : '12px')};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

  &:hover {
    opacity: 1;
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 24px rgb(0, 0, 0, 0.15);

    .card-title {
      font-weight: 700;
      transform: scale(1.05);
    }

    .card-image {
      transform: scale(1.08);
    }
  }

  @media (width <= 768px) {
    min-width: 220px;
    height: ${({ variant }) =>
      variant === 'slider' ? '260px' : variant === 'large' ? '220px' : '180px'};
  }
`;

const Title = styled.div<{ variant: VariantType }>`
  font-size: ${({ variant }) => (variant === 'large' ? '14px' : '12px')};
  line-height: 1.2;
  color: #333;
  margin: 0;
  position: absolute;
  left: 15px;
  bottom: 15px;
  text-align: left;
  transition:
    transform 0.3s ease,
    font-weight 0.3s ease;

  @media (width <= 768px) {
    font-size: ${({ variant }) => (variant === 'large' ? '13px' : '11px')};
  }
`;

const Content = styled.div<{ variant: VariantType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: transform 0.3s ease;

  img {
    width: ${({ variant }) => ContentWidth[variant]}px;
    height: ${({ variant }) => ContentHeight[variant]}px;
    object-fit: contain;

    @media (width <= 768px) {
      width: ${({ variant }) => ContentWidth[variant] * 0.8}px;
      height: ${({ variant }) => ContentHeight[variant] * 0.8}px;
    }
  }
`;

export const CategoryCard = ({
  img,
  label,
  color,
  name,
  variant = 'large',
}: {
  img: string | null;
  label: string;
  color: string;
  name: string;
  variant?: VariantType;
}) => {
  return (
    <Link
      href={{
        pathname: '/categories/[name]',
        params: { name },
      }}
      locale="ru"
    >
      <Card role="link" color={color} variant={variant}>
        <Content className="card-image" variant={variant}>
          {img && (
            <Image
              width={ContentWidth[variant]}
              height={ContentHeight[variant]}
              src={img}
              alt="icon"
              priority
            />
          )}
        </Content>
        <Title className="card-title" variant={variant}>
          {label}
        </Title>
      </Card>
    </Link>
  );
};
