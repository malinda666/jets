import type { NextPage } from 'next'
import { MutableRefObject, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { Section } from '@/components'

gsap.registerPlugin(ScrollTrigger)

const Home: NextPage = () => {
  const headingRef = useRef() as MutableRefObject<HTMLHeadingElement>

  useEffect(() => {
    const trigger = gsap.utils.selector(document)('section')[0]
    gsap.to(headingRef.current, {
      scale: 3,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: trigger,
        markers: true,
        start: 'center center',
        end: '+=300',
        scrub: 1,
      },
    })
  }, [])

  return (
    <>
      <Section>
        <h1 className="text-9xl" ref={headingRef}>
          First section
        </h1>
      </Section>
      <Section>
        <h1 className="text-9xl">Second section</h1>
      </Section>
      <Section>
        <h1 className="text-9xl">Third section</h1>
      </Section>
      <Section>
        <h1 className="text-9xl">Last section</h1>
      </Section>
    </>
  )
}

export default Home
