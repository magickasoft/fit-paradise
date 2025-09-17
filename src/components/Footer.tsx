'use client'

import styled from 'styled-components'

const Container = styled.div`
  background: #f9f9f9;
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  font-size: 14px;
  border-top: 1px solid #e0e0e0;
`

export const Footer = () => {
  return (
    <footer>
      <Container>© Fit-Paradise 2025</Container>
    </footer>
  )
}
