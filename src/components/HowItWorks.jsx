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
// import addAnything from '@/images/addAnything.png'
import hero from '@/images/hero.png'

const steps = [
    {
        'header': 'Personalize your registry',
        'desc': 'Add a photo, greeting message and update the background colour of your registry.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    {
        'header': 'Add gifts & cash funds',
        'desc': 'In a click, you can add gifts from any URL or registries and set up your custom cash fund.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Preview & Share',
        'desc': 'Once you’re done adding gifts, you can start sharing it with friends and family.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    {
        'header': 'Get notified',
        'desc': 'Get notified when guests buy you something and track what’s remaining on your registry',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Track Gifts',
        'desc': 'add heading',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    {
        'header': 'Buy items',
        'desc': 'When guests buy you something, we proceed to convert the value of the gift to cash. This cash can then be used at your discretion to purchase anything you actually need.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Thank your guests',
        'desc': 'add heading',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    }
]

export function HowItWorks() {
  return (
    <>
        {steps.map((step) => {
            return (<div className={"bg-["+step.backgroundColor+"]"}>
            {/* lg:pt-2 */}
          <Container className="relative max-w-7xl">        
            <div className={step.align === "left" ? "mx-auto px-6 py-20 mx-auto xl:flex lg:items-center lg:gap-x-10 flex-wrap md:flex-nowrap flex-row-reverse": "mx-auto px-6 py-20 mx-auto xl:flex lg:items-center lg:gap-x-10 flex-wrap md:flex-nowrap"}>
                      <div>
                        <h1 className="max-w-4xl font-display md:text-7xl text-5xl font-medium tracking-tight text-[#005394]">
                            {step.header}
                        </h1>
                        <p className="mt-6 max-w-4xl text-2xl text-[#005394] tracking-tight">
                            {step.desc}
                        </p>
      
                        {/* <div className="">
                          <Button href="/" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] mt-10 px-8 py-5 text-[#545154] text-xl">Start Adding Gifts</Button>
                        </div> */}
                      
                      </div>
      
                      <div className="mx-auto max-w-xl">
                          <Image src={""} />
                      </div>
      
            </div>
          </Container>    
          </div>)
        })}
    
    </>    
  )
}
