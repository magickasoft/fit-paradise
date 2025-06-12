'use client'

// import React, { ButtonHTMLAttributes, useEffect, useRef, ReactNode, isValidElement, ReactElement } from 'react'
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

// interface ElementProps {
//   children?: ReactNode
//   [key: string]: unknown
// }

// function hasTextContent(node: ReactNode): boolean {
//   let result = false

//   if (typeof node === 'string') {
//     result = node.trim().length > 0
//   } else if (typeof node === 'number') {
//     result = true
//   } else if (Array.isArray(node)) {
//     result = node.some(hasTextContent)
//   } else if (isValidElement(node)) {
//     const element = node as ReactElement<ElementProps>
//     const children = element.props?.children
//     result = children ? hasTextContent(children) : false
//   }

//   return result
// }

export default function Button({
  primary,
  children,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...rest
}: Readonly<ButtonProps>) {
  // const hasWarnedRef = useRef(false)

  // useEffect(() => {
  //   const isProduction = process.env.NODE_ENV === 'production'

  //   if (isProduction || hasWarnedRef.current) return

  //   const hasAriaLabel = ariaLabel ?? ariaLabelledby
  //   const hasContent = hasTextContent(children)

  //   if (!hasContent && !hasAriaLabel) {
  //     console.warn(
  //       'Button: Missing accessible name. Add text content or provide an aria-label ' +
  //         'for icon-only buttons to ensure accessibility.',
  //     )
  //     hasWarnedRef.current = true
  //   }
  // }, [children, ariaLabel, ariaLabelledby])

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
