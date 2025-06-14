'use client'

import React, { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export interface StyledComponentsRegistryProps {
  children: React.ReactNode
}

export default function StyledComponentsRegistry({ children }: Readonly<StyledComponentsRegistryProps>) {
  const [sheet] = useState(() => new ServerStyleSheet())

  useEffect(() => {
    return () => {
      sheet?.seal()
      sheet?.instance?.clearTag()
    }
  }, [])

  useServerInsertedHTML(() => {
    const styles = sheet?.getStyleElement()
    sheet?.instance?.clearTag()
    return <>{styles}</>
  })

  return <StyleSheetManager sheet={sheet?.instance}>{children}</StyleSheetManager>
}
