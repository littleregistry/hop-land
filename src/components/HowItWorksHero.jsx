import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'
import { useEffect, useState, useRef } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import registryGraphicOne from '@/images/hero-one.png'
import registryGraphicTwo from '@/images/hero-two.png'
import registryGraphicThree from '@/images/hero-three.png'
import pinkBalloon from '@/images/pink-balloon.jpg'

const colors = [registryGraphicOne, registryGraphicTwo, registryGraphicThree];

export function HowItWorksHero() {
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
    <>

{/* brighter image ---  https://images.unsplash.com/photo-1552861067-ada40cee5c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80  */}

      <div className="bg-cover bg-right bg-[url('https://images.unsplash.com/photo-1552861067-ada40cee5c8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80')]">
        <div className="relative h-[600px]">
      <div className="absolute w-full h-full top-0 left-0" style={{background: 'rgba(0,0,0,.2)'}}>
      <div className="mx-auto max-w-7xl pt-32 pb-32 xl:flex lg:items-center lg:gap-x-10">
                
                <div className="">

                <h1 className="pt-16 pl-10 max-w-6xl font-display md:text-7xl text-5xl font-medium tracking-tight text-[#fff]">
                    Getting Started
                </h1>                
                <p className="pt-8 px-10 max-w-5xl text-2xl text-[#fff] tracking-tight">
                  Creating a Baby Registry Wish List is fun with BabyPouch. Help your loved ones get what you actually need for your new baby.
                </p>                                          
                </div>                
                  
                <div className="mt-10 mx-auto max-w-2xl w-full overflow-hidden">
                    <div 
                        className="w-full whitespace-nowrap h-200"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                      {/* <Image src={pinkBalloon} className="opacity-1 visible w-full h-full transition-opacity ease-in duration-700 inline-block"/> */}
                        {/* {colors.map((backgroundColor, idx) => (
                            
                        ))} */}
                    </div>
                </div>
                </div>
        </div>
      </div>
      </div>  
    </>
    
  )
}
