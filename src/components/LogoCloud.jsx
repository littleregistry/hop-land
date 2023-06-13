import { Fragment } from 'react'
import Image from 'next/image'

import thule from '@/images/brand-logos/thule-logo.png'
import adenAnais from '@/images/brand-logos/aden-anais-logo.png'
import babybrezza from '@/images/brand-logos/babybrezza-logo.png'
import boppy from '@/images/brand-logos/boppy-logo.png'
import clek from '@/images/brand-logos/clek-logo.png'
import drBrown from '@/images/brand-logos/dr-brown-logo.png'
import ergobaby from '@/images/brand-logos/ergobaby-logo.png'
import fridababy from '@/images/brand-logos/fridababy-logo.png'
import graco from '@/images/brand-logos/graco-logo.png'
import kyteBaby from '@/images/brand-logos/kyte-baby-logo.png'
import lansinoh from '@/images/brand-logos/lansinoh-logo.png'
import nuna from '@/images/brand-logos/nuna-logo.png'
import oxo from '@/images/brand-logos/oxo-logo.png'
import skipHop from '@/images/brand-logos/skip-hop-logo.png'
import spectra from '@/images/brand-logos/spectra-logo.png'
import tula from '@/images/brand-logos/tula-logo.png'
import babybjorn from '@/images/brand-logos/babybjorn-logo.png'
import nanit from '@/images/brand-logos/nanit-logo.png'
import uppababy from '@/images/brand-logos/uppababy-logo.png'
import evenflo from '@/images/brand-logos/evenflo-logo.png'


const logos = [thule, adenAnais, babybrezza, boppy, clek, drBrown, ergobaby, fridababy, graco, kyteBaby, lansinoh, nuna, oxo, skipHop, spectra, tula, babybjorn, nanit, uppababy, evenflo]

export function LogoCloud() {  

  return (
    <>
    <div
        className="mx-auto relative max-w-2xl mb-12 mt-12"
      >
        <p className="mt-2 font-display text-2xl text-slate-900">
          Let us find the right baby products for you
        </p>
        <p className="mt-4 text-lg text-slate-600">
          We carry 100+ most trusted brands.
        </p>
        
        <br />        
        <div className="relative pb-10">
          <div className="relative mx-auto w-6/6 lg:w-[40rem] overflow-hidden rounded-xl">            
            <div class="grid grid-rows-4 grid-flow-col flex items-center gap-4">            
              {logos.map((logo, idx) => {
              return <Image                
                  key={idx}
                  src={logo}
                  alt=""
                  sizes="12rem"
                />
            })}
            </div>
          </div>
        </div>  
      </div>  
    </>
  )
}
