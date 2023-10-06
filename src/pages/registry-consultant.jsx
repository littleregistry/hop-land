import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import consultantIllustration from '@/images/consultant.svg'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroTwo } from '@/components/HeroTwo'
import { Helmet } from 'react-helmet';

import { HowItWorksHero } from '@/components/HowItWorksHero'
import { HowItWorks } from '@/components/HowItWorks'



export default function HowitworksPage() {
  return (
    <>
      <Head>        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />        
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
        <Helmet>
            <title>LittleRegistry - How Registry Consultant works</title>
            <meta name="description" content="Get your free personalized baby registry checklist & recommendations." />
            <meta name="keywords" content="baby registry checklist, shopping, baby product recommendations" />
            {/* <meta name="author" content="Your Name" /> */}
            <meta property="og:title" content="Personalized baby registry checklist" />
            <meta property="og:description" content="Get your free personalized baby registry checklist & recommendations." />
            {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
            <meta property="og:url" content="https://littleregistry.ca/baby-registry-checklist" />
            {/* <meta name="twitter:title" content="My Page Title" />
            <meta name="twitter:description" content="This is a description of my page" />
            <meta name="twitter:image" content="https://example.com/image.jpg" />
            <meta name="twitter:card" content="summary_large_image" /> */}
            {/* <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta> */}
        </Helmet>
            
      <Header />
      <main className="pb-8">

        <div className="mt-40 mx-10">
            <h1 className="text-2xl font-bold">Registry Consultant</h1>
            <br/>

            <p>
            Baby shopping is expensive, time consuming and super overwhelming. There are hundreds of options for every baby items. Which one should you choose? What’s actually essential? Which items actually fit your personal family needs? 
            </p>            

            <br/>

            <p>
            Let our registry consultant help you narrow down your options based on your lifestyle and family needs.  <b>{`It's free.`}</b>
            </p>
            <button
                onClick={() => {document.getElementsByClassName('cc-nsge')[0].click() }}
                type="button"
                className="rounded-full mt-8 bg-gray-800 px-3.5 py-2.5 text-white text-sm font-semibold text-gray-900 hover:bg-gray-600"
            >
              Chat with a registry consultant now
            </button>


        </div>
        <div className="mt-12 flex justify-center">
          <Image src={consultantIllustration} width={450} height={450}/>
        </div>
        
        {/* <HowItWorksHero />
        <HowItWorks />         */}

      </main>
      <Footer />
    </>
  )
}
