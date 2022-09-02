import { FC } from 'react'

interface MarqueeProps {
  content: string
  dir?: string
  speed?: number
}

const Marquee: FC<MarqueeProps> = ({ content, dir = 'left', speed = 2 }) => {
  return (
    <div
      className="relative w-full h-[13vw] overflow-hidden flex items-center justify-center"
      data-scroll
      data-scroll-speed={dir === 'left' ? speed : speed * -1}
      data-scroll-direction="horizontal"
    >
      <p className="text-[15vw] title-line uppercase font-extrabold">
        {content}
      </p>
    </div>
  )
}

export default Marquee
