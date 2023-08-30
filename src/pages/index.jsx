import Head from 'next/head'
import Image from 'next/image'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HeroTwo } from '@/components/HeroTwo'
import { SectionTwo } from '@/components/SectionTwo'
import { LogoCloud } from '@/components/LogoCloud'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import screenshotRegistry from '@/images/main.gif'
import { AddToPouch } from '@/components/AddToPouch'
import { SetupCashFund } from '@/components/SetupCashFund'
import { ShareWishList } from '@/components/ShareWishList.jsx'
import { EasyWithPouch } from '@/components/EasyWithPouch.jsx'
import { Faq } from '@/components/Faq.jsx'


export default function Home() {
  return (
    <>
      <Head>
        <title>Baby Pouch - People-Friendly Baby Registry</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Header />
      <main>

        <HeroTwo />
        <AddToPouch />
        <SetupCashFund />
        <ShareWishList />

        <EasyWithPouch />

        <Faq />
        
        <SectionTwo />

        {/* <SecondaryFeatures /> */}

        {/* all the logos */}

        {/* <LogoCloud />               */}

      </main>
      <Footer />
    </>
  )
}
