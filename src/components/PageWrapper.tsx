'use client'

import { maxDevice } from '@/styles/device'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  margin: 120px 140px 60px 140px;

  @media ${maxDevice.tablet} {
    margin: 120px 0px 60px 0px;
  }

  @media ${maxDevice.mobileL} {
    margin: 90px 0px 50px 0px;
  }

  @media ${maxDevice.laptopL} {
    flex-direction: column;
  }
`

const Label = styled.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 40px;

  @media ${maxDevice.mobileL} {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
  }
`

const Text = styled.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`

const Content = styled.div`
  width: 100%;
`

type PageWrapperProps = {
  label?: React.ReactNode
  text?: React.ReactNode
  children?: React.ReactNode
}

export const PageWrapper = ({ label, text, children }: PageWrapperProps) => (
  <Container>
    <Content>
      {label && <Label>{label}</Label>}
      {text && <Text>{text}</Text>}
      {children}
    </Content>
  </Container>
)
