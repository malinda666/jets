import type { NextPage } from 'next'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { Section } from '@/components'

gsap.registerPlugin(ScrollTrigger)

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <h1 className="text-9xl">First section</h1>
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
