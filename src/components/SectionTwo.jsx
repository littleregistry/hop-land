import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'
import { useState } from 'react'

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



export function SectionTwo() {
  const [domainName, setDomainName] = useState("");
    
    const handleChange = (e) => {
        setDomainName(e.target.value)        
    }

  return (
    <div className="bg-[#FAEAE7] py-32 overflow-x-hidden overflow-y-hidden">
    <Container className="relative max-w-7xl text-center lg:pt-32">
      
      <div className="hidden lg:block rotate-6 absolute -top-10 md:-left-20">
        <Image src={toyCard} className="" alt="" />
      </div>

      <div className="hidden lg:block -rotate-6 absolute top-72 md:-left-48">
        <Image src={mobyCard} className="" alt="" />
      </div>
      <div className="hidden lg:block rotate-4 absolute top-96 md:-left-25">
        <Image src={diaperCard} className="" alt="" />
      </div>

      <div className="hidden lg:block -rotate-6 absolute md:-right-24">
        <Image src={nunaCard} className="" alt="" />
      </div>
      <div className="hidden lg:block rotate-6 absolute top-96 md:-right-1">
        <Image src={collegeCard} className="" alt="" />
      </div>

      <h1 className="mx-auto max-w-2xl font-display font-medium tracking-tight text-slate-900 md:text-6xl sm:text-5xl text-3xl">
        Jumpstart your <br/> baby registry now
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-lg tracking-tight text-slate-700">
      </p>      
      <div className="mt-10">                   

            <div className="mt-10 mb-8 mx-auto px-8 w-96 rounded-full py-2 " style={{background: "white"}}>          
                <div className="flex p-2 rounded-md sm:max-w-md">                    
                  <span 
                  style={{color: 'gray', fontSize: 'larger'}}
                  className="flex select-none items-center ">littleregistry.com/</span>
                  <input
                    onChange={handleChange}
                    className="outline-none"
                    style={{border: 'none', fontSize: 'larger', width: '120px', left: '0', color: 'gray'
                    }}                    
                    type="text"                                       
                    placeholder="yourname"
                  />                   
                </div>
              </div>                    
        </div>

        <a href={"/signup?name="+domainName}  className="mt-12 bg-[#FC1938] hover:bg-[#FC1938] py-4 px-16 text-[#fff] text-xl font-semibold rounded-4xl">Claim your link</a>
      {/* </div> */}
      {/* <div className="mt-36 lg:mt-44">
      </div> */}
    </Container>
    </div>
  )
}
