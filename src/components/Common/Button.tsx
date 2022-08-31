import {
  ButtonHTMLAttributes,
  FC,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import gsap from 'gsap'

import Arrow from './Arrow'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: string
  variant?: string
  hasArrow?: boolean
  cls?: string
}

const getButtonSize = (size: string) => {
  let _size

  switch (size) {
    case 'sm':
      _size = 'px-5 py-2 text-base'
      break
    case 'md':
      _size = 'px-6 py-3 text-lg'
      break
    case 'lg':
      _size = 'px-8 py-5 text-2xl'
      break

    default:
      _size = 'h-full'
      break
  }

  return _size
}

const getButtonVariant = (variant: string) => {
  let _variant

  switch (variant) {
    case 'primary':
      _variant = 'bg-white text-dark'
      break
    case 'secondary':
      _variant = 'bg-dark text-white'
      break
    case 'outline':
      _variant = 'bg-transparent text-dark border border-dark'
      break

    default:
      _variant = 'h-full'
      break
  }

  return _variant
}

const Button: FC<ButtonProps> = ({
  children,
  size = 'sm',
  variant = 'primary',
  hasArrow = true,
  cls,
  ...props
}) => {
  const buttonWrapper = useRef() as MutableRefObject<HTMLButtonElement>

  // useEffect(() => {
  //   gsap.to(buttonWrapper.current, {
  //     y: '0%',
  //     duration: 1.24,
  //     opacity: 1,
  //     ease: 'expo.out',
  //     delay: 0.5,
  //   })
  // }, [])

  return (
    <button
      className={[
        'button',
        getButtonSize(size),
        getButtonVariant(variant),
        cls,
      ].join(' ')}
      {...props}
      ref={buttonWrapper}
    >
      <span className="content">{children}</span>
      {hasArrow ? (
        <span className="arrow">
          <Arrow />
        </span>
      ) : null}
    </button>
  )
}

export default Button
