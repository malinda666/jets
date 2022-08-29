// use-fade-in.tsx

import { RefObject, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export const useFadeIn = <El extends Element = HTMLDivElement>(
  onComplete?: () => void,
  delay?: number
): [RefObject<El>, gsap.plugins.ScrollTriggerInstance | undefined] => {
  const targetRef = useRef<El>(null)
  const [scrollTriggerInstance, setScrollTriggerInstance] =
    useState<gsap.plugins.ScrollTriggerInstance>()

  useEffect(() => {
    if (!targetRef.current) return
    const tl = gsap.timeline({
      delay: delay ?? 0,
      onComplete: onComplete,
    })

    // Edit your animation here:
    tl.fadeIn(targetRef.current.children, {
      stagger: 0.15,
      y: 30,
    })

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetRef.current,
      once: true,
      animation: tl,
    })
    setScrollTriggerInstance(scrollTriggerInstance)

    return () => {
      scrollTriggerInstance.kill()
    }
  }, [onComplete, delay])

  return [targetRef, scrollTriggerInstance]
}
