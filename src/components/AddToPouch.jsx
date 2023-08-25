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
import hero from '@/images/hero.png'



export function AddToPouch() {
  return (
    <div className="bg-[#FEF6EA]">
    <Container className="relative max-w-7xl lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                <div className="max-w-xl">
                    <Image src={addAnything} />
                </div>
                <div>
                <h1 className="mx-auto max-w-2xl font-display text-5xl font-medium tracking-tight text-[#005394] sm:text-7xl">
                  Add anything from any store
                </h1>
                <p className="mt-6 max-w-lg text-2xl text-[#005394] tracking-tight">
                Yes! You're not restricted to just one store. Keep track of everything you need all in one place.
                </p>
                <div className="mt-10 flex gap-x-6">
                </div>
                </div>

      </div>
    </Container>
    </div>
  )
}
