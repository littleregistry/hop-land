import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import checkout from '@/images/checkout.png'
import hero from '@/images/hero.png'




export function ReceiveGifts() {
  return (
    <div className="bg-[#13253B]">
      {/* lg:pt-32 */}
    <Container className="relative max-w-7xl">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:flex  lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <div>
                <h1 className="max-w-4xl font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-[#FEF2D4]">
                Receive gifts from your love ones 
                </h1>
                <p className="mt-6 max-w-5xl text-xl sm:text-2xl text-[#FEF2D4] tracking-tight">
                Easy one-step checkout (No redirects). Your love ones can shop items from different store, checkout once all in one place. 
                </p>
                <div className="mt-10">                    
                    <a href="/signup" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] py-4 px-16 sm:px-10 text-[#545154] text-xl rounded-full font-semibold ">Join Now</a>                    
                </div> 
                {/* <p className="mt-6 max-w-5xl font-semibold text-lg sm:text-xl text-[#FEF2D4] tracking-tight">
                  See how we're different
                </p>                */}

                <div className="mt-10 flex gap-x-6">
                </div>
                </div>
                <div className="mx-auto max-w-xl">
                    <Image src={checkout} />
                </div>


      </div>

      
    </Container>
    </div>
  )
}
