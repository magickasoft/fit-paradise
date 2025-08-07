import { ReactNode } from 'react'
import GlobalStyle from './globals-styles'

export interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
