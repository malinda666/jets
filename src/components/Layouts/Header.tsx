import { FC, useRef, useEffect, useState, MutableRefObject } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const navBar = useRef() as MutableRefObject<HTMLElement>
  const menuButton = useRef() as MutableRefObject<HTMLDivElement>
  const menuWrapper = useRef() as MutableRefObject<HTMLDivElement>

  const menuTl = useRef() as any

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const trigger = gsap.utils.selector(document)('section')[0]
    const navList = gsap.utils.selector(navBar.current)('ul')

    gsap.set(menuButton.current, { opacity: 0, y: 20 })
    gsap.set(menuWrapper.current, { x: '100%' })

    menuTl.current = gsap.timeline({ paused: true })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'center+=200 center+=5',
          toggleActions: 'play none none reverse',
        },
        defaults: {
          ease: 'power3.inOut',
        },
      })
      .to(navList, {
        duration: 0.2,
        y: -20,
        opacity: 0,
      })
      .to(
        menuButton.current,
        {
          duration: 0.3,
          y: 0,
          opacity: 1,
        },
        0.1
      )
  }, [])

  useEffect(() => {
    menuTl.current.to(
      menuWrapper.current,
      {
        x: '0%',
        ease: 'expo.out',
        duration: 1,
      },
      0
    )
    if (isMenuOpen) {
      menuTl.current.play()
    } else {
      menuTl.current.reverse()
      menuTl.current.seek(0)
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-16 py-4 z-[99] mix-blend-exclusion text-third">
        <div className="relative font-title font-semibold text-lg">
          Jet Seattle&trade;
        </div>
        <nav ref={navBar}>
          <ul className="flex items-center justify-end space-x-2">
            <li>Explore</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div
          className="absolute right-0 p-16"
          ref={menuButton}
          aria-hidden
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          Menu
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
