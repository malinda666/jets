import Head from 'next/head'
import { Ref, FC } from 'react'

type LayoutProps = {
  children?: React.ReactNode
  containerRef?: Ref<HTMLDivElement>

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
}

const PageLayout: FC<LayoutProps> = ({
  children,
  containerRef,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>NEXT+TS+GSAP+LS+TW Template</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      {/* TODO Header */}
      {/* <Header /> */}
      <div className="" ref={containerRef} data-scroll-container>
        <main className="max-w-7xl relative mx-auto">{children}</main>
      </div>
      {/* TODO Footer */}
      {/* <Footer /> */}
    </>
  )
}

export default PageLayout
