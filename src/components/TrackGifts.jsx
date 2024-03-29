import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import nunaCard from '@/images/hero-cards/nuna-trvl-stroller.png'
import collegeCard from '@/images/hero-cards/college-fund.png'
import mobyCard from '@/images/hero-cards/moby-wrap.png'
import diaperCard from '@/images/hero-cards/diaper-fund.png'
import toyCard from '@/images/hero-cards/nursery-toys.png'
import mainRegistry from '@/images/mainregistry.png'
import addAnything from '@/images/addAnything.png'
import giftTracker from '@/images/gift-tracker.png'
import hero from '@/images/hero.png'



export function TrackGifts() {
  return (
    <div className="bg-[#FEF6EA]">
      {/* lg:pt-2 */}
    <Container className="relative max-w-7xl">
        
      <div className="mx-auto px-6 py-20 mx-auto lg:flex lg:items-center lg:gap-x-10 lex-wrap md:flex-nowrap flex-row-reverse">
                <div>
                  <h1 className="max-w-4xl font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-[#005394]">
                    Track who bought you gifts
                  </h1>
                  <p className="mt-6 max-w-4xl text-xl sm:text-2xl text-[#005394] tracking-tight"> 
                  Get notified every time someone buys you a gift. Keep track of all contributions and kind messages in your gift tracker. 
                  </p>  

                  <div className="mt-10">                    
                    <Link href="/signup" className="bg-[#005394] hover:bg-[#1162a0] py-4 px-16 sm:px-10 text-[#fff] text-xl rounded-full font-semibold ">Start Adding Gifts</Link>
                  </div>
                  {/* <div className="">
                    <Button href="/" className="bg-[#005394] hover:bg-[#1162a0] mt-10 px-8 py-5 text-[#fff] text-xl">Start Adding Gifts</Button>
                  </div> */}

                <div className="mt-10 flex gap-x-6">
                </div>
                </div>

                <div className="mx-auto max-w-xl p-6">
                    <Image src={giftTracker} alt='gift-tracker-icon'/>
                </div>

      </div>
    </Container>
    </div>
  )
}
