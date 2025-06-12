'use client'

import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
  $primary?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  background: ${props => (props.$primary ? '#0070f3' : 'white')};
  color: ${props => (props.$primary ? 'white' : '#0070f3')};
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
  border: 1px solid #0070f3;

  &:hover {
    background: ${props => (props.$primary ? '#005bbf' : '#f0f0f0')};
  }
`

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  children: React.ReactNode
}

export default function Button({ primary, children, ...rest }: Readonly<ButtonProps>) {
  return (
    <StyledButton $primary={primary} {...rest}>
      {children}
    </StyledButton>
  )
}
