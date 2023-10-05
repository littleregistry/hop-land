import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { CallToAction } from '@/components/CallToAction'
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
import { OrganizeShopList } from '@/components/OrganizeShopList'
import { SetupCashFund } from '@/components/SetupCashFund'
import { ShareWishList } from '@/components/ShareWishList'
import { WhyLove } from '@/components/WhyLove.jsx'
import { ReceiveGifts } from '@/components/ReceiveGifts.jsx'
import { TrackGifts } from '@/components/TrackGifts.jsx'

import { Faq } from '@/components/Faq.jsx'


export default function Home() {
  const isMobile = typeof window !== "undefined"
  useEffect(() => {
    if (isMobile) {
      const head = document.querySelector("head");
      const script = document.createElement("script");
  
      script.setAttribute("src", '../scripts/crisp.js');
      head.appendChild(script);
  
      return () => {
        head.removeChild(script);
      };
    }
    
  }, []);
  return (
    <>    
      <Header />

      {/* <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />        
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta> */}

      <main className="">

        <HeroTwo />
        <OrganizeShopList />
        <SetupCashFund />
        <ShareWishList />
        <ReceiveGifts />
        <TrackGifts />


        <WhyLove />

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
