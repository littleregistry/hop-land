import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'
import { useEffect, useState, useRef } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import registryGraphicOne from '@/images/hero-one.png'
import registryGraphicTwo from '@/images/hero-two.png'
import registryGraphicThree from '@/images/hero-three.png'

import Amazon from '@/images/logo-display/amazon-logo.png'
import Babyrus from '@/images/logo-display/babies-r-us-logo.png'
import Etsy from '@/images/logo-display/etsy-logo.png'
import Indigo from '@/images/logo-display/indigo-logo.png'
import Snugglebugz from '@/images/logo-display/snugglebugz-logo.png'
import Westcoastkids from '@/images/logo-display/westcoastkids-logo.png'
import PotteryBarnKids from '@/images/logo-display/potterybarnkids-logo.png'
import Walmart from '@/images/logo-display/walmart-logo.png'


const colors = [registryGraphicOne, registryGraphicThree];
// registryGraphicTwo, 

const canadianLogos = [
    Amazon, Babyrus, Etsy, Indigo, Snugglebugz, Westcoastkids, PotteryBarnKids
]

export function HeroTwo() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2500;

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();

        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
  return (
    <div className="bg-[#FAEAE7] p-4">
    <Container className="relative max-w-7xl">
      <div className="mx-auto max-w-7xl pt-32 sm:pt-36 pb-32 lg:flex lg:items-center lg:gap-x-10">
                <div>
                <h1 className="max-w-5xl font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-[#FC1938]">
                    Create an all-in-one baby registry in minutes
                </h1>                
                <p className="mt-6 max-w-5xl text-xl sm:text-2xl text-[#FC1938] tracking-tight">
                    Add anything from any store. 
                    Combine multiple registries into one wish list.                   
                </p>

                <div className="mt-10 sm:flex gap-x-6">
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="block px-8 rounded-full border-0 mb-8 sm:mb-0 py-5 text-gray-900 shadow-sm placeholder:text-gray-400 w-72 sm:text-lg sm:leading-6"
                    placeholder="littleregistry.com/you"
                    aria-describedby="email-description"
                    />

                    <a href="/" className="bg-[#FC1938] hover:bg-[#FC1938] py-4 px-24 sm:px-8 text-[#fff] text-xl font-semibold rounded-full">Try now</a>
                </div>                
                </div>
                <div className="mt-10 mx-auto max-w-2xl w-fit flex justify-end">
                {/* overflow-hidden */}
                    <div 
                        className="w-full whitespace-nowrap h-200 w-100"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {/*  */}

                        {colors.map((backgroundColor, idx) => (
                            <Image src={backgroundColor} height={700} key={idx} className={idx == index ? "opacity-1 visible transition-opacity ease-in duration-700 inline-block h-full" : "opacity-0 invisible transition-opacity ease-in duration-700 inline-block h-full"}/>
                        ))}

                        {/* <Image src={registryGraphicTwo} height={700} key={'test'}/>
                        <Image src={registryGraphicOne} height={700} key={'test'}/> */}
                    </div>
                </div>
      </div>

       <div className="grid items-center">
        <div className="flex justify-center mt-6 ml-10 max-w-6xl text-center font-semibold text-xl sm:text-2xl text-[#919191] tracking-tight">Connect all Canadian brands & stores in one list.</div>
        <div className="flex justify-center my-2 ml-10 max-w-6xl text-center font-medium text-lg sm:text-xl text-[#919191] tracking-tight">Enjoy perks & discounts from any stores </div>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center mb-10">
        {/* {canadianLogos.map((logo, idx) => (
                                <Image src={logo} key={'logo-'+idx} height={70} className="p-3" />
                                // className={idx == index ? "opacity-1 visible w-full h-full transition-opacity ease-in duration-700 inline-block" : "opacity-0 invisible w-full h-full transition-opacity ease-in duration-700 inline-block"}
            ))}
        </div> */}

        <Image src={Amazon} key={'logo-a'} height={70} width={160} className="p-2" />   
        <Image src={Babyrus} key={'logo-b'} height={70} className="p-2" />   
        <Image src={Etsy} key={'logo-c'} height={70} className="p-2" />   
        <Image src={Indigo} key={'logo-d'} height={70} width={180} className="p-2" />   
        <Image src={Snugglebugz} key={'logo-e'} height={60} className="p-2" />   
        <Image src={Westcoastkids} key={'logo-f'} height={50} className="p-2" />   
        <Image src={PotteryBarnKids} key={'logo-pbk'} height={70} className="p-2" />
        <Image src={Walmart} key={'logo-walmart'} height={80} className="p-2" />
        </div>
     </div>                     

    </Container>
    </div>
  )
}
