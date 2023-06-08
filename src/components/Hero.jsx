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

export function Hero() {
  return (
    <Container className="pt-20 text-center lg:pt-32">
      <Link href="#" aria-label="Home">
        <Image
          className="w-14 h-14 mx-auto"
          src={babypouchLogo}
          alt=""
        />
        <h1 className="text-2xl font-semibold mt-4 mb-8">Baby Pouch</h1>
      </Link>
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Create your baby registry in seconds
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Our AI shopping assistant will help you find the right baby products for you based on your lifestyle and preferences, at the best price.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/">Create your registry</Button>
      </div>
      <div className="mt-36 lg:mt-44">
      </div>
    </Container>
  )
}
