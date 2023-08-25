import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'
import { useEffect, useState, useRef } from 'react'

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
import hero from '@/images/hero.png'
import herotwo from '@/images/herotwo.png'

const colors = [hero, herotwo];

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
    <div className="bg-[#FAEAE7]">
    <Container className="relative max-w-7xl">
      <div className="mx-auto max-w-7xl pb-32 lg:flex lg:items-center lg:gap-x-10">
                <div>
                <h1 className="mx-auto max-w-2xl font-display text-5xl font-medium tracking-tight text-[#FC1938] sm:text-7xl">
                    Create a beautiful baby registry in minutes
                </h1>
                <p className="mt-6 max-w-lg text-2xl text-[#FC1938] tracking-tight">
                    One link to curate your baby wish list + help your loved ones
                    get what you need for your new family.
                </p>
                <div className="mt-10 flex gap-x-6">
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="block px-8 rounded-full border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-xl sm:leading-6"
                    placeholder="babypouch.co/myregistry"
                    aria-describedby="email-description"
                    />
                    <Button href="/" className="bg-[#FC1938] hover:bg-[#FC1938] px-8 py-3 text-[#fff] text-xl">Try now</Button>
                </div>
                </div>
                <div className="m-auto max-w-2xl w-full overflow-hidden">
                    <div 
                        className="w-full whitespace-nowrap h-200"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {colors.map((backgroundColor, idx) => (
                            <Image src={backgroundColor} key={idx} className={idx == index ? "opacity-1 visible w-full h-full transition-opacity ease-in duration-700 inline-block" : "opacity-0 invisible w-full h-full transition-opacity ease-in duration-700 inline-block"}/>
                        ))}
                    </div>
                </div>
      </div>

      
    </Container>
    </div>
  )
}
