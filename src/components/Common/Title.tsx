import React, { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

interface TitleProps {
  content: string
  size: string
  cls?: string
  type?: string
}
const Title: FC<TitleProps> = ({ content, size, cls = '', type = '' }) => {
  const titleRef = useRef() as React.MutableRefObject<HTMLHeadingElement>

  useEffect(() => {
    const chars = gsap.utils.selector(titleRef.current)('span')
    gsap.to(chars, {
      y: '0%',
      duration: 1.25,
      ease: 'expo.out',
      delay: type === 'header' ? 1 : 0.2,
      stagger: { amount: 0.35, from: 'random' },
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
      },
    })

    // gsap.to(titleRef.current, {
    //   scrollTrigger: {
    //     trigger: trigger,
    //     pin: true,
    //     markers: true,
    //     start: 'top center',
    //     end: '+=500',
    //     pinSpacing: true,
    //   },
    // })
  }, [])

  const getFontSize = (size: string) => {
    let s
    switch (size.toLowerCase()) {
      case 'md':
        s = 'title-line-md'
        break
      case 'lg':
        s = 'title-line-lg'
        break
      case 'xl':
        s = 'title-line-xl'
        break

      default:
        break
    }

    return s
  }

  return (
    <h1
      aria-label={content}
      className={['title', cls].join(' ')}
      ref={titleRef}
    >
      {content.split(' ').map((line, i) => (
        <div
          className={['title-line', getFontSize(size)].join(' ')}
          key={line + i.toString()}
        >
          {line.split('').map((char, i) => (
            <span
              key={i.toString()}
              className="relative inline-block whitespace-pre translate-y-full"
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </h1>
  )
}

export default Title
