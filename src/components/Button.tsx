'use client'

import React, { ButtonHTMLAttributes, ReactNode } from 'react'
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
  transition:
    background 0.2s,
    opacity 0.2s;
  border: 1px solid #0070f3;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${props => (props.$primary ? '#005bbf' : '#f0f0f0')};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:focus {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }

  &:focus-visible {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  children: ReactNode
  'aria-label'?: string
}

export default function Button({
  primary,
  children,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <StyledButton
      $primary={primary}
      aria-disabled={rest.disabled ? 'true' : undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
