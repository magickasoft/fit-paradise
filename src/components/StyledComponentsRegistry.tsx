'use client'

import React, { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export interface StyledComponentsRegistryProps {
  children: React.ReactNode
}

export default function StyledComponentsRegistry({ children }: Readonly<StyledComponentsRegistryProps>) {
  const [sheet] = useState(() => new ServerStyleSheet())
  const [isClient] = useState(() => typeof window !== 'undefined')

  useEffect(() => {
    return () => {
      if (!isClient) {
        sheet.seal()
      }
    }
  }, [sheet, isClient])

  useServerInsertedHTML(() => {
    try {
      const styles = sheet.getStyleElement()
      sheet.instance.clearTag()
      return <>{styles}</>
    } catch (error) {
      console.error('Error processing styled-components styles:', error)
      return null
    }
  })

  if (isClient) return <>{children}</>

  return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
}
