'use client'

import styled from 'styled-components'
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

const TextLogo = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: #333333;
  cursor: pointer;
`

const CenterBlock = styled.nav<{ $menuOpen?: boolean }>`
  display: flex;
  gap: 40px;
  align-items: center;

  a {
    font-size: 18px;
    font-weight: 600;
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
          <TextLogo>Fit-Paradise</TextLogo>
        </Link>
      </LeftBlock>

      <CenterBlock $menuOpen={menuOpen}>
        <Link href="/" locale="ru">
          Тренировки
        </Link>
        <Link href="/" locale="ru">
          Программы
        </Link>
        <Link href="/" locale="ru">
          Рецепты
        </Link>
        <Link href="/" locale="ru">
          Статьи
        </Link>
      </CenterBlock>
      <RightBlock>
        <LocaleSelect />
        <BurgerMenu onClick={() => setMenuOpen(prev => !prev)}>{menuOpen ? <FiX /> : <FiMenu />}</BurgerMenu>
      </RightBlock>
    </Container>
  )
}
