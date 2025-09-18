'use client'

import styled from 'styled-components'
import { maxDevice } from '@/styles/device'

const Container = styled.section`
  background-color: #ffffff;
  min-height: 700px;
  max-width: 1920px;
  width: 90vw;
  padding: 80px 50px 40px;
  margin: 0 auto;

  @media ${maxDevice.tablet} {
    padding: 60px 20px 20px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media ${maxDevice.tablet} {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
`

const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${maxDevice.tablet} {
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 52px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;

  @media ${maxDevice.tablet} {
    font-size: 36px;
  }
`

const Description = styled.p`
  font-size: 28px;
  margin-bottom: 30px;
  line-height: 1.5;

  @media ${maxDevice.tablet} {
    font-size: 18px;
  }
`

const Button = styled.button`
  background-color: #ff4747;
  color: #fff;
  border: none;
  padding: 18px 36px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e04343;
  }

  @media ${maxDevice.tablet} {
    font-size: 16px;
    padding: 14px 28px;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;

  @media ${maxDevice.tablet} {
    width: 100%;
    order: -1;
    margin-bottom: 30px;
  }
`

const ImageBlock = styled.div`
  width: 80%;
  max-width: 500px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #f19199;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative; /* для абсолютной картинки */

  @media ${maxDevice.tablet} {
    max-width: 300px;
    width: 70%;
  }
`

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  max-height: 600px;
  transform: translate(-50%, -50%);

  @media ${maxDevice.tablet} {
    max-height: 300px;
  }
`

export const MainHeader = () => {
  return (
    <Container id="mainHeader">
      <ContentWrapper>
        <TextBlock>
          <Title>
            ДОБРО ПОЖАЛОВАТЬ
            <br /> B Fit-Paradise
          </Title>
          <Description>
            Теперь вы можете тренироваться, подбирать план питания, заботиться о своем здоровье и фокусироваться на
            мотивации в одном месте
          </Description>
          <Button>Перейти к тренировкам</Button>
        </TextBlock>
        <ImageContainer>
          <ImageBlock>
            <Image src="/static/imgs/main.png" alt="Пример изображения" />
          </ImageBlock>
        </ImageContainer>
      </ContentWrapper>
    </Container>
  )
}
