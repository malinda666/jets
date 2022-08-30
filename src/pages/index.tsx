import type { NextPage } from 'next'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { Section, Title, Button } from '@/components'
import Image from 'next/image'

import HeroImage from '../../public/images/sl4.webp'

gsap.registerPlugin(ScrollTrigger)

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <div className="absolute -top-[10%] left-0 w-full h-[150%] -z-[1] opacity-50">
          <Image
            src={HeroImage}
            alt="hero-image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            data-scroll
            data-scroll-speed="1.5"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <Title content="First" size="lg" />
          <Button variant="primary">Explore</Button>
        </div>
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
