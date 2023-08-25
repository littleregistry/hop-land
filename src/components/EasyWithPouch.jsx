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
import RegInspoGraphic from '@/images/reg-inspo-graphic.png'
import checkListGraphic from '@/images/checklist-graphic.png'



export function EasyWithPouch() {
  return (
    <Container className="pt-20 relative max-w-7xl text-center lg:pt-32">
      <h1 className="mx-auto max-w-2xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        We make baby registry building fun, fast & easy
      </h1>
      <p className="mx-auto max-w-lg text-2xl text-[#005394] tracking-tight">
        We get it – things can get really overwhelming. That’s why we create tools to help!
      </p>
      <p className="mx-auto mt-6 max-w-lg text-lg tracking-tight text-slate-700">
      </p>
      
      <div className='flex'>
        <div className='bg-white h-full'><Image className='p-10 h-72 w-72' src={checkListGraphic} /></div>
        
        <Image className='p-10 h-72 w-72' src={RegInspoGraphic} />
      </div>
      
     
      <div className="mt-36 lg:mt-44">
      </div>
    </Container>
  )
}
