import { FC, useRef, useEffect, MutableRefObject } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const navBar = useRef() as MutableRefObject<HTMLElement>
  const menuButton = useRef() as MutableRefObject<HTMLDivElement>
  const menuWrapper = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const trigger = gsap.utils.selector(document)('section')[0]
    const navList = gsap.utils.selector(navBar.current)('ul')

    gsap.set(menuButton.current, { opacity: 0, y: 20 })

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
        <div className="absolute right-0 p-16" ref={menuButton}>
          menu
        </div>
      </header>
      <div className="menu hidden" ref={menuWrapper}></div>
    </>
  )
}

export default Header
