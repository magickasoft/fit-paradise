import { ReactNode } from 'react'
import GlobalStyle from '@/components/styled-components/global-style'
import StyledComponentsRegistry from '@/components/styled-components/registry'

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
