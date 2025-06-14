'use client'

import React, { useState, useEffect } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export interface StyledComponentsRegistryProps {
  children: React.ReactNode
}

export default function StyledComponentsRegistry({ children }: Readonly<StyledComponentsRegistryProps>) {
  const [styledComponentsStyleSheet] = useState(() => (typeof window === 'undefined' ? new ServerStyleSheet() : null))

  useEffect(() => {
    return () => {
      if (styledComponentsStyleSheet) {
        styledComponentsStyleSheet.seal()
        styledComponentsStyleSheet.instance.clearTag()
      }
    }
  }, [styledComponentsStyleSheet])

  useServerInsertedHTML(() => {
    if (!styledComponentsStyleSheet) return null

    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return <StyleSheetManager sheet={styledComponentsStyleSheet!.instance}>{children}</StyleSheetManager>
}
