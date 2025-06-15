'use client'

import React, { ButtonHTMLAttributes, useEffect } from 'react'
import styled from 'styled-components'
import { isProduction } from '@/process.env/NODE_ENV'
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
  children: React.ReactNode
  'aria-label'?: string
}

export default function Button({ primary, children, ...rest }: Readonly<ButtonProps>) {
  useEffect(() => {
    if (!isProduction) {
      const hasTextContent =
        typeof children === 'string' || (Array.isArray(children) && children.some(child => typeof child === 'string'))

      const hasAriaLabel = rest['aria-label'] || rest['aria-labelledby']

      if (!hasTextContent && !hasAriaLabel) {
        console.warn(
          'Button: Missing accessible name. Add text content or provide an aria-label ' +
            'for icon-only buttons to ensure accessibility.',
        )
      }
    }
  }, [children, rest])

  return (
    <StyledButton $primary={primary} aria-disabled={rest.disabled ? 'true' : undefined} {...rest}>
      {children}
    </StyledButton>
  )
}
