import { FC, useRef, useEffect, useState, MutableRefObject } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { MenuIcon, CloseIcon, Button } from '@/components'
import { useMain } from '@/context'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const main = useMain()
  const menuWrapper = useRef() as MutableRefObject<HTMLDivElement>
  const headerRef = useRef() as MutableRefObject<HTMLHeadElement>

  const menuTl = useRef() as any

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const menubutton = gsap.utils.selector(headerRef)('#js--menu-button')
    const explorebutton = gsap.utils.selector(headerRef)('button')
    const logo = gsap.utils.selector(headerRef)('#js--logo')

    const menuCloseButton = gsap.utils.selector(menubutton)('#js--closebutton')
    const menuOpenButton = gsap.utils.selector(menubutton)('#js--menubutton')

    gsap.set(menuWrapper.current, { y: '100%' })
    gsap.set([menuCloseButton, menubutton, explorebutton, logo], {
      yPercent: 30,
      opacity: 0,
      pointerEvents: 'none',
    })
    gsap.set(menuOpenButton, { yPercent: 0, opacity: 1, pointerEvents: 'all' })

    menuTl.current = gsap.timeline({
      paused: true,
      defaults: { ease: 'expo.inOut' },
    })
    // menu reveal timeline
    gsap
      .timeline({
        defaults: {
          ease: 'expo.out',
        },
      })

      .to(
        logo,
        {
          duration: 1.25,
          yPercent: 0,
          opacity: 1,
          pointerEvents: 'all',
        },
        0
      )
      .to(
        [explorebutton, menubutton],
        {
          duration: 1.25,
          yPercent: 0,
          opacity: 1,
          pointerEvents: 'all',
          stagger: {
            amount: 0.125,
            from: 'end',
          },
        },
        0.2
      )

    // menu open close timeline
    menuTl.current
      .addLabel('openMenu', 0)
      .to(
        menuWrapper.current,
        {
          y: '0%',
          ease: 'expo.inOut',
          duration: 1.25,
        },
        'openMenu'
      )
      .to(
        menuOpenButton,
        {
          yPercent: -30,
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.5,
        },
        'openMenu'
      )
      .to(
        menuCloseButton,
        {
          yPercent: 0,
          opacity: 1,
          pointerEvents: 'all',
          duration: 0.5,
        },
        'openMenu+=0.15'
      )
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      menuTl.current.play()
    } else {
      menuTl.current.reverse()
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full flex items-center justify-between px-16 py-6 z-[99] mix-blend-exclusion text-white"
        ref={headerRef}
      >
        <div
          className="relative font-title font-semibold text-lg"
          id="js--logo"
        >
          Jet Seattle&trade;
        </div>

        <div className="relative flex items-center justify-end">
          <Button
            variant="primary"
            onClick={() => main?.setExploreOpen(!main.isExploreOpen)}
            cls="mr-8"
          >
            Explore Locations
          </Button>
          <div
            className="relative ml-4 cursor-pointer flex items-center justify-center w-4 h-4"
            aria-hidden
            id="js--menu-button"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span className="absolute w-6 h-6" id="js--menubutton">
              <MenuIcon />
            </span>
            <span className="absolute w-6 h-6" id="js--closebutton">
              <CloseIcon />
            </span>
          </div>
        </div>
      </header>
      <div
        className="fixed top-0 right-0 w-full min-h-screen bg-black z-[98]"
        ref={menuWrapper}
      >
        <nav className="absolute inset-0 flex items-center justify-center">
          <ul className="relative flex flex-col items-center justify-center">
            <li className="text-4xl text-light">Explore</li>
            <li className="text-4xl text-light">About Us</li>
            <li className="text-4xl text-light">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
