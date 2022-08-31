import { FC, MutableRefObject, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import { useMain } from '@/context'
import { CloseIcon } from '@/components'

gsap.registerPlugin(ScrollTrigger)
const Explore: FC = () => {
  const main = useMain()
  const exploreTl = useRef() as any
  const exploreWrapper = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    gsap.set(exploreWrapper.current, { y: '100%' })

    exploreTl.current = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      paused: true,
    })
    exploreTl.current.to(exploreWrapper.current, {
      y: '0%',
      duration: 1.25,
    })
  }, [])

  useEffect(() => {
    if (main?.isExploreOpen) {
      exploreTl.current.play()
    } else {
      exploreTl.current.reverse()
    }
  }, [main?.isExploreOpen])

  return (
    <div
      className="fixed inset-0 bg-white flex items-center justify-center z-[99]"
      ref={exploreWrapper}
    >
      <div
        className="absolute left-0 top-0 w-16 m-8 group cursor-pointer"
        aria-hidden
        onClick={() => main?.setExploreOpen(false)}
      >
        <span className="relative" id="js--closebutton">
          <CloseIcon />
        </span>
      </div>
      explore
    </div>
  )
}

export default Explore
