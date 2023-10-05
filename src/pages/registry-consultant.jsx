import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
      <main className="min-h-[1000px]">

        <div className="mt-40 mx-10">
            <h1 className="text-2xl font-bold">Registry Consultant</h1>
            <br/>

            <p>
            Baby shopping is expensive, time consuming and super overwhelming. There are hundreds of options for every baby items. Which one should you choose? What’s actually essential? Which items actually fit your personal family needs? 
            </p>            

            <br/>

            <p>
            Let our registry consultant help you narrow down your options based on your lifestyle and family needs.  <b>It's free.</b>
            </p>

            <br/>

            <p>
            1. Fill out the forms below so we can serve you better. We want to tailor our recommendactions to meet your budget and family needs.  
            </p>
           
            <Link href="https://forms.gle/yPXVQAMQ1PhPx3zR8">
                <p className="text-[#fc1938] font-semibold underline">
                    Form A) I only need several product recommendations 
                </p>
            </Link>
            
            <Link href="https://forms.gle/8RRZd1azDXKLXZR4A">
                <p className="text-[#fc1938] font-semibold underline">
                    Form B) I need help building the entire baby registry 
                </p>
            </Link>
            

            <br/>

            <p>
            2. We will get back to you within 24 hours with product and brand recommendations. Your whole baby registry is built with careful selection. 
            </p>
            <p>
            (Receive additional 2-3 brand recommendactions per product and explained)
            </p>

            <br/>

            <p>
            3. Still not convinced? Let us send you a link so you can book a 1-1 call with any questions you have.
            </p>
        
        </div>
        
        {/* <HowItWorksHero />
        <HowItWorks />         */}

      </main>
      <Footer />
    </>
  )
}
