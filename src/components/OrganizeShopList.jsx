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
import checklist from '@/images/checklist-img.png'

import hero from '@/images/hero.png'



export function OrganizeShopList() {
  return (
    <div className="bg-[#FEF6EA]">
      {/* lg:pt-2 */}
    <Container className="relative max-w-7xl">
        
      <div className="mx-auto pb-20 lg:flex flex-1 lg:items-center lg:gap-x-10 flex-wrap md:flex-nowrap flex-row-reverse">
                <div className="pl-4 pt-20 pb-20">
                  <h1 className="max-w-4xl lg:pt-0 font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-[#005394]">
                    Organize your shopping list
                  </h1>
                  <p className="mt-6 max-w-4xl text-xl sm:text-2xl text-[#005394] tracking-tight">
                  One link to curate everything you need for your new baby.
                  Use our built in checklist so you don’t miss a thing!
                  {/* Add gifts and gift cards from your favorite brands or registries all in one list.  */}
                  </p>  

                  <div className="mt-10">                    
                    <a href="/" className="bg-[#005394] hover:bg-[#1162a0] py-4 px-16 sm:px-10 text-[#fff] text-xl rounded-full font-semibold ">Start Adding Gifts</a>                    
                  </div>

                  <p className="underline ml-4 mt-6 max-w-4xl text-xl sm:text-2xl text-[#005394] tracking-tight">
                  Go to Checklist
                  </p>
                  
                </div>

                <div className="w-full pt-2 lg:pt-20 mx-10 max-w-xl relative">
                    <Image height={1200} src={checklist} />
                </div>

      </div>
    </Container>
    </div>
  )
}
