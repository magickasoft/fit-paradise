'use client'

import styled from 'styled-components'

const Container = styled.div`
  background: #ffffff;
  color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 16px;
`

export const Footer = () => {
  return (
    <footer>
      <Container>Fit-Paradise 2025</Container>
    </footer>
  )
}
