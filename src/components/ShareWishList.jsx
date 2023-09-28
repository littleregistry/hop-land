import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import shareRegistry from '@/images/shareRegistry.png'



export function ShareWishList() {
  return (
    <div className="bg-[#FEF6EA]">
       {/* lg:pt-32 */}
    <Container className="relative max-w-7xl">
      <div className="px-6 py-20 mx-auto lg:flex lg:items-center lg:gap-x-10 lex-wrap md:flex-nowrap flex-row-reverse">               
                <div>
                <h1 className="max-w-4xl font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-[#005394]">
                Share wishlist with friends and family

                </h1>
                <p className="mt-6 max-w-5xl text-xl sm:text-2xl text-[#005394] tracking-tight">                
                Share one link for your guests to shop everything in one place!  Customize your domain name so it's easy to remember & share.
                </p>
                <div className="mt-10">                    
                    <a href="/" className="bg-[#005394] hover:bg-[#1162a0] py-4 px-16 sm:px-10 text-[#fff] text-xl rounded-full font-semibold ">Try now</a>                    
                </div>
                <div className="mt-10 flex gap-x-6">
                </div>
                </div>

                <div className="mx-auto max-w-xl">
                    <Image  src={shareRegistry} />
                </div>

      </div>
    </Container>
    </div>

  )
}
