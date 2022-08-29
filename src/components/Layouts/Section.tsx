import { FC, ReactNode } from 'react'

interface SectionProps {
  isLight?: boolean
  children: ReactNode
  cls?: string
  size?: string
}

const Section: FC<SectionProps> = ({
  isLight = false,
  children,
  cls,
  size,
}) => {
  const getSize = (type: string) => {
    let _sizeCls

    switch (type) {
      case 'sm':
        _sizeCls = 'h-full'
        break
      case 'md':
        _sizeCls = 'h-[100vh]'
        break
      case 'lg':
        _sizeCls = 'h-[120vh]'
        break
      case 'xl':
        _sizeCls = 'h-[150vh]'
        break

      default:
        _sizeCls = 'h-full'
        break
    }

    return _sizeCls
  }

  return (
    <section
      className={[
        'relative flex items-center justify-center',
        size ? getSize(size) : getSize('md'),
        isLight ? 'bg-light' : 'bg-dark',
        cls,
      ].join(' ')}
      data-scroll
      data-scroll-section
    >
      {children}
    </section>
  )
}

export default Section
