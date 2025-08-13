import { ReactNode } from 'react'
import GlobalStyle from './globals-styles'
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry'

export interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <>
      <GlobalStyle />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  )
}
