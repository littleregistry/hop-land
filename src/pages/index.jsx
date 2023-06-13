import Head from 'next/head'
import Image from 'next/image'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import screenshotRegistry from '@/images/registry.gif'

export default function Home() {
  return (
    <>
      <Head>
        <title>Baby Pouch - The world&#39;s first AI baby registry</title>
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
        <Hero />

        {/* screenshot of registry */}
        <div className="relative pb-10">
            <div className="relative mx-auto w-5/6 lg:w-[30rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={screenshotRegistry}
                alt=""
                sizes="25rem"
              />
            </div>
          </div>

        <SecondaryFeatures />

        {/* all the logos */}
      </main>
      <Footer />
    </>
  )
}
