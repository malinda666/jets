import React, { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

interface ParagrpahProps {
  content: string
  size?: string
  cls?: string
  type?: string
}
const Paragraph: FC<ParagrpahProps> = ({
  content,
  size = 'md',
  cls = '',
  type = '',
}) => {
  const paraRef = useRef() as React.MutableRefObject<HTMLHeadingElement>

  useEffect(() => {
    const chars = gsap.utils.selector(paraRef.current)('span')
    gsap.to(chars, {
      y: '0%',
      duration: 1.25,
      ease: 'expo.out',
      delay: type === 'header' ? 1 : 0.2,
      stagger: { amount: type === 'header' ? 0.3 : 0.4, from: 'start' },
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top 85%',
      },
    })
  }, [])

  const getFontSize = (size: string) => {
    let s
    switch (size.toLowerCase()) {
      case 'md':
        s = 'para-line-md'
        break
      case 'lg':
        s = 'para-line-lg'
        break

      default:
        s = 'para-line-md'
        break
    }

    return s
  }

  return (
    <div aria-label={content} className={['para', cls].join(' ')} ref={paraRef}>
      {content.split('\n').map((line, i) => (
        <p
          className={['para-line', getFontSize(size)].join(' ')}
          key={line + i.toString()}
        >
          <span key={i.toString()} className="reveal-txt">
            {line.replace(/^\s+|\s+$/g, '')}
          </span>
        </p>
      ))}
    </div>
  )
}

export default Paragraph
