'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { maxDevice } from '@/styles/device'
import { Link } from '@/i18n/navigation'

// import { ScrollIndicator } from './scrollIndicator'

const Container = styled.header<{ $scrolled: boolean }>`
  background: #ffffff;
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.75rem;
  margin: 0 auto;
  padding: 0 100px;
  transition: border-bottom 0.3s ease;

  @media ${maxDevice.tablet} {
    padding: 0 30px;
    height: 3.5rem;
  }

  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid #d0d0d0' : '1px solid #ffffff')};
`

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-right: 40px;
`

const CenterBlock = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  width: 100%;

  a {
    font-size: 20px;
    text-decoration: none;
    color: #333333;
    transition: color 0.2s ease;

    &:hover {
      color: #ff6f61;
    }

    @media ${maxDevice.tablet} {
      font-size: 14px;
    }
  }
`

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* <ScrollIndicator /> */}
      <Container $scrolled={scrolled}>
        <LeftBlock>
          <Image src="/static/povr-eshka-logo.png" alt="logo" width={60} height={60} priority />
        </LeftBlock>
        <CenterBlock>
          <Link
            href={{
              pathname: '/',
            }}
            locale="ru"
          >
            Главная
          </Link>
          <Link
            href={{
              pathname: '/categories',
            }}
            locale="ru"
          >
            Категории
          </Link>
        </CenterBlock>
        <RightBlock>{/* <SearchInput /> */}</RightBlock>
      </Container>
    </>
  )
}
