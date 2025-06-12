'use client'

import React, { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export interface StyledComponentsRegistryProps {
  children: React.ReactNode
}

export default function StyledComponentsRegistry({ children }: Readonly<StyledComponentsRegistryProps>) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useEffect(() => {
    return () => {
      styledComponentsStyleSheet?.seal()
      styledComponentsStyleSheet?.instance?.clearTag()
    }
  }, [])

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet?.getStyleElement()
    styledComponentsStyleSheet?.instance?.clearTag()
    return <>{styles}</>
  })

  return <StyleSheetManager sheet={styledComponentsStyleSheet?.instance}>{children}</StyleSheetManager>
}
