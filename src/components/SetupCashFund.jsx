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
import cashfunds from '@/images/cashfunds.png'
import hero from '@/images/hero.png'



export function SetupCashFund() {
  return (
    <div className="bg-[#13253B]">
      {/* lg:pt-32 */}
    <Container className="relative max-w-7xl">
      <div className="mx-auto max-w-7xl px-6 py-24 xl:flex  lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <div>
                <h1 className="max-w-4xl font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-[#FEF2D4]">
                  Set up a cash fund
                </h1>
                <p className="mt-6 max-w-5xl text-xl sm:text-2xl text-[#FEF2D4] tracking-tight">
                Let your friends and family contribute and save towards anything from diapers, 
                doula, childcare, or baby’s future savings accounts.
                </p>
                <div className="mt-10">                    
                    <Link href="/" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] py-4 px-16 sm:px-10 text-[#545154] text-xl rounded-full font-semibold ">Join Now</Link>
                </div>                

                <div className="mt-10 flex gap-x-6">
                </div>
                </div>
                <div className="mx-auto max-w-xl">
                    <Image src={cashfunds} alt="cash-funds-graphic"/>
                </div>


      </div>

      
    </Container>
    </div>
  )
}
