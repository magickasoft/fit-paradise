'use client'

import styled from 'styled-components'

const Card = styled.div<{
  $backgroundColor?: string
  variant?: 'default' | 'short'
}>`
  width: 150px;
  min-width: 150px;
  height: ${({ variant }) => (variant === 'short' ? '180px' : '220px')};
  min-height: ${({ variant }) => (variant === 'short' ? '180px' : '220px')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 10px 10px 10px;
  border-radius: 8px;
  gap: 10px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#ffffff'};
`

const ImageBlock = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`

const NoImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #dddddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
  color: #999;
`

const TextBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
`

const Title = styled.h2<{ $variant?: 'default' | 'short' }>`
  font-size: 0.7rem;
  font-weight: normal;
  margin: 5px 0;
  text-align: center;
  color: #777;

  ${({ $variant }) =>
    $variant === 'short' &&
    `
      display: -webkit-box;
      -webkit-line-clamp: 2; /* количество строк */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`

type DetailCardProps = {
  backgroundColor?: string
  key: string
  name: string
  text?: string
  img: string | null
  variant?: 'default' | 'short'
}

export const DetailCard = ({ name, text, img, backgroundColor, variant = 'default' }: DetailCardProps) => {
  return (
    <Card $backgroundColor={backgroundColor} variant={variant}>
      <ImageBlock>{img ? <Image src={img} alt={name} /> : <NoImage>No image</NoImage>}</ImageBlock>
      <TextBlock>
        {text && <Description>{text}</Description>}
        <Title $variant={variant}>{name}</Title>
      </TextBlock>
    </Card>
  )
}
