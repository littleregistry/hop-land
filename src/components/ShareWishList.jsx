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
import shareWishList from '@/images/shareWishList.png'
import hero from '@/images/hero.png'



export function ShareWishList() {
  return (
    <div className="bg-[#FEF6EA]">
       {/* lg:pt-32 */}
    <Container className="relative max-w-7xl">
      <div className="px-6 py-20 mx-auto xl:flex lg:items-center lg:gap-x-10 lex-wrap md:flex-nowrap flex-row-reverse">               
                <div>
                <h1 className="max-w-4xl font-display md:text-7xl text-5xl font-medium tracking-tight text-[#005394]">
                Share your Wishlist & Receive gifts from friends & family

                </h1>
                <p className="mt-6 max-w-5xl text-2xl text-[#005394] tracking-tight">
                We’ve got the easiest checkout experience out of any universal baby registries. Designed for guests of any age. 
                </p>
                <div className="mt-10 flex gap-x-6">
                </div>
                </div>

                <div className="mx-auto max-w-xl">
                    <Image src={shareWishList} />
                </div>

      </div>
    </Container>
    </div>

  )
}
