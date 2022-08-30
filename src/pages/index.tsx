import type { NextPage } from 'next'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

import { Section, Title, Button, Explore } from '@/components'
import { useMain } from '@/context'

import HeroImage from '../../public/images/sl4.webp'

gsap.registerPlugin(ScrollTrigger)

const Home: NextPage = () => {
  const main = useMain()

  return (
    <>
      <Explore />
      <Section cls="!h-[120vh]">
        <div className="absolute -top-[10%] left-0 w-full h-[150%] -z-[1] opacity-50">
          <Image
            src={HeroImage}
            alt="hero-image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            data-scroll
            data-scroll-speed="0.9"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <Title content="Adveture Awaits" size="md" />
          <Button
            variant="primary"
            onClick={() => main?.setExploreOpen(!main.isExploreOpen)}
            cls="mt-16"
          >
            Explore Locations
          </Button>
        </div>
      </Section>
      <Section isLight>
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
