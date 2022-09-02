import type { NextPage } from 'next'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'

import {
  Section,
  Title,
  Button,
  Explore,
  Paragraph,
  Marquee,
} from '@/components'
import { useMain } from '@/context'

import HeroImage from '../../public/images/sl4.webp'
import AboutImage from '../../public/images/sl2.webp'

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
          <Paragraph
            type="header"
            cls="relative max-w-lg mt-8"
            content={`Lorem ipsum dolor sit amet con sectetur adipisicing elit. \n   Repellat beatae animi laboriosam.`}
          />
        </div>
      </Section>
      <Section size="sm" isLight>
        <div
          className="absolute -top-1/4 h-2/4 w-1/2 overflow-hidden rounded-md"
          data-scroll
          data-scroll-speed="1.5"
        >
          <Image
            src={AboutImage}
            alt="about-image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="relative h-full w-2/3 flex flex-col items-center justify-end">
          <Paragraph
            size="lg"
            cls="relative max-w-auto mb-8"
            content={`Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Facilis nihil itaque doloribus porro\n quod placeat fuga necessitatibus fugit.\n Maiores blanditiis voluptate illo eius.\n Sapiente quasi dignissimos\n temporibus minus, voluptas saepe.`}
          />
          <Button cls="mb-16">About us</Button>
        </div>
      </Section>
      <Section size="xl" isLight>
        <div className="relative h-full w-full flex flex-col items-center justify-between">
          <div className="relative w-[250%] h-auto mt-16">
            <Marquee content="test paragraph" />
            <Marquee content="test paragraph" dir="right" />
          </div>
        </div>
      </Section>
      <Section>
        <h1 className="text-9xl">Last section</h1>
      </Section>
    </>
  )
}

export default Home
