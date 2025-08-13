'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { maxDevice } from '@/styles/device'
import { Link } from '@/i18n/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

import { LocaleSelect } from '@/components/LocaleSelect'

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
  padding: 0 100px;
  border-bottom: ${({ $scrolled }) => ($scrolled ? '1px solid #d0d0d0' : 'transparent')};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 6px rgba(0,0,0,0.05)' : 'none')};
  transition: all 0.3s ease;

  @media ${maxDevice.tablet} {
    padding: 0 20px;
    height: 3.5rem;
  }
`

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
  }
`

const CenterBlock = styled.nav<{ $menuOpen?: boolean }>`
  display: flex;
  gap: 24px;
  align-items: center;

  a {
    font-size: 18px;
    text-decoration: none;
    color: #333333;
    transition: color 0.2s ease;

    &:hover {
      color: #ff6f61;
    }
  }

  @media ${maxDevice.tablet} {
    display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 3.5rem;
    left: 0;
    right: 0;
    background: #fff;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    gap: 16px;
  }
`

const BurgerMenu = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;

  @media ${maxDevice.tablet} {
    display: block;
  }
`

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: #ff6f61;
  border-radius: 6px;
  transition: all 0.25s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #e65c50;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 111, 97, 0.3);
  }

  @media ${maxDevice.tablet} {
    height: 36px;
    font-size: 14px;
    padding: 0 16px;
  }

  @media ${maxDevice.mobileL} {
    width: 100%;
    justify-content: center;
  }
`

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Container $scrolled={scrolled}>
      <LeftBlock>
        <Link href="/" locale="ru">
          <Image src="/static/povr-eshka-logo.png" alt="logo" width={50} height={50} priority />
        </Link>
      </LeftBlock>

      <CenterBlock $menuOpen={menuOpen}>
        <Link href="/" locale="ru">
          Главная
        </Link>
        <Link href="/categories" locale="ru">
          Категории
        </Link>
      </CenterBlock>

      <RightBlock>
        <LocaleSelect />
        <StyledButton href="https://example.com" target="_blank" rel="noopener noreferrer">
          Предложить рецепт
        </StyledButton>
        <BurgerMenu onClick={() => setMenuOpen(prev => !prev)}>{menuOpen ? <FiX /> : <FiMenu />}</BurgerMenu>
      </RightBlock>
    </Container>
  )
}
