'use client'

import React, { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export interface StyledComponentsRegistryProps {
  children: React.ReactNode
}

export default function StyledComponentsRegistry({ children }: Readonly<StyledComponentsRegistryProps>) {
  const [sheet] = useState(() => new ServerStyleSheet())
  const [isServer] = useState(() => typeof window === 'undefined')

  useEffect(() => {
    return () => {
      if (isServer) {
        sheet.seal()
      }
    }
  }, [sheet, isServer])

  useServerInsertedHTML(() => {
    try {
      if (!isServer) return null

      const styles = sheet.getStyleElement()
      return <>{styles}</>
    } catch (error) {
      console.error('Error processing styled-components styles:', error)
      return null
    } finally {
      sheet.instance.clearTag()
    }
  })

  if (!isServer) return <>{children}</>

  return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
}
