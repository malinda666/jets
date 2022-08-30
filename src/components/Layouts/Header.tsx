import { FC, useRef, useEffect, useState, MutableRefObject } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const menuWrapper = useRef() as MutableRefObject<HTMLDivElement>
  const headerRef = useRef() as MutableRefObject<HTMLHeadElement>

  const menuTl = useRef() as any

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const menubutton = gsap.utils.selector(headerRef)('#js--menu-button')
    const logo = gsap.utils.selector(headerRef)('#js--logo')

    const menuCloseButton = gsap.utils.selector(menubutton)('span')[1]
    const menuOpenButton = gsap.utils.selector(menubutton)('span')[0]

    gsap.set(menuWrapper.current, { x: '100%' })
    gsap.set(menuCloseButton, {
      yPercent: 30,
      opacity: 0,
      pointerEvents: 'none',
    })
    gsap.set(menuOpenButton, { yPercent: 0, opacity: 1, pointerEvents: 'all' })

    menuTl.current = gsap.timeline({
      paused: true,
      defaults: { ease: 'expo.out' },
    })
    // menu reveal timeline
    gsap
      .timeline({
        defaults: {
          ease: 'expo.out',
        },
      })

      .from(
        logo,
        {
          duration: 1.25,
          yPercent: 10,
          opacity: 0,
        },
        0
      )
      .from(
        menubutton,
        {
          duration: 1.25,
          yPercent: 10,
          opacity: 0,
        },
        0.2
      )

    // menu open close timeline
    menuTl.current
      .to(
        menuWrapper.current,
        {
          x: '0%',
          ease: 'expo.out',
          duration: 1,
        },
        0
      )
      .to(
        menuCloseButton,
        {
          yPercent: 0,
          opacity: 1,
          pointerEvents: 'all',
          duration: 1.2,
        },
        '-=0.5'
      )
      .to(
        menuOpenButton,
        {
          yPercent: -30,
          opacity: 0,
          pointerEvents: 'none',
          duration: 1.2,
        },
        0
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

        <div
          className="absolute right-0 p-16 cursor-pointer flex items-center justify-center"
          aria-hidden
          id="js--menu-button"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <span className="absolute">Menu</span>
          <span className="absolute">Close</span>
        </div>
      </header>
      <div
        className="fixed top-0 right-0 w-2/3 min-h-screen bg-black z-[98]"
        ref={menuWrapper}
      >
        <nav className="absolute inset-0 flex items-center justify-center">
          <ul className="relative flex flex-col items-center justify-center">
            <li className="text-2xl text-light">Explore</li>
            <li className="text-2xl text-light">About Us</li>
            <li className="text-2xl text-light">Contact</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
