import styled from 'styled-components'

const InfoContainer = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
`

const InfoBlockTitle = styled.span`
  font-size: 0.9rem;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

const InfoBlockValue = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const InfoBlock = ({ name, value, gauge }: { name: string; value: number; gauge: string }) => {
  return (
    <InfoContainer>
      <InfoBlockTitle>{name}</InfoBlockTitle>
      <InfoBlockValue>
        {value}
        {gauge}
      </InfoBlockValue>
    </InfoContainer>
  )
}
