'use client'

import styled from 'styled-components'

const ScrollBlock = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 8px;
  max-width: 94vw;
  align-items: stretch;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    transition: background 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.35);
  }
`

export const ArticlesScroll = ({ children }: { children: React.ReactNode }) => {
  return <ScrollBlock>{children}</ScrollBlock>
}
