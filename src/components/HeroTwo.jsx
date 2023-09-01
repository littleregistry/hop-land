import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'
import { useEffect, useState, useRef } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import registryGraphicOne from '@/images/hero-one.png'
import registryGraphicTwo from '@/images/hero-two.png'
import registryGraphicThree from '@/images/hero-three.png'

const colors = [registryGraphicOne, registryGraphicTwo, registryGraphicThree];

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
    <div className="bg-[#FAEAE7] p-10">
    <Container className="relative max-w-7xl">
      <div className="mx-auto max-w-7xl pt-32 pb-32 xl:flex lg:items-center lg:gap-x-10">
                <div>
                <h1 className="max-w-5xl font-display md:text-7xl text-5xl font-medium tracking-tight text-[#FC1938]">
                    Create a beautiful baby registry in minutes
                </h1>                
                <p className="mt-6 max-w-5xl text-2xl text-[#FC1938] tracking-tight">
                  All-in-one baby registry for Canadian families 🍁 One link to curate everything you need for your new baby. 
                  </p>
                <div className="mt-10 flex gap-x-6">
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="block px-8 rounded-full border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 w-72 sm:text-lg sm:leading-6"
                    placeholder="babypouch.co/yourname"
                    aria-describedby="email-description"
                    />
                    <Button href="/" className="bg-[#FC1938] hover:bg-[#FC1938] px-8 py-3 text-[#fff] text-xl">Try now</Button>
                </div>
                </div>
                <div className="mt-10 mx-auto max-w-2xl w-full overflow-hidden">
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
