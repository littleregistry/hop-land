import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'
import { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import registryGraphicOne from '@/images/hero-one.png'
import registryGraphicTwo from '@/images/hero-two.png'
import registryGraphicThree from '@/images/hero-three.png'
import { AxiosClient } from '@/lib/axios'

import Amazon from '@/images/logo-display/amazon-logo.png'
import Babyrus from '@/images/logo-display/babies-r-us-logo.png'
import Etsy from '@/images/logo-display/etsy-logo.png'
import Indigo from '@/images/logo-display/indigo-logo.png'
import Snugglebugz from '@/images/logo-display/snugglebugz-logo.png'
import Westcoastkids from '@/images/logo-display/westcoastkids-logo.png'
import PotteryBarnKids from '@/images/logo-display/potterybarnkids-logo.png'
import Walmart from '@/images/logo-display/walmart-logo.png'
import { useRouter } from 'next/router'


const colors = [registryGraphicOne, registryGraphicThree];
// registryGraphicTwo, 

const canadianLogos = [
    Amazon, Babyrus, Etsy, Indigo, Snugglebugz, Westcoastkids, PotteryBarnKids
]

export function HeroTwo() {
    const router = useRouter()
    const [domainName, setDomainName] = useState("");
    const {
      control,
      register,
      handleSubmit,
      getValues,
      setValue,
      setError,
      reset,
      watch,
      trigger,
		formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    
    const handleChange = (e) => {
        setDomainName(e.target.value)        
    }

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2500;

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }
    const saveData = () => {
        router.push('/signup?registryName='+getValues('registryName'))

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
      <div className="mx-auto max-w-7xl pt-32 sm:pt-36 pb-32 lg:flex lg:items-center">
                <div>
                <h1 className="max-w-5xl font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-[#FC1938]">
                    Create an all-in-one baby registry in minutes
                </h1>                
                <p className="mt-6 max-w-5xl text-xl sm:text-2xl text-[#FC1938] tracking-tight">
                    Add anything from any store. 
                    Combine multiple registries into one wish list.                   
                </p>


              <form onSubmit={handleSubmit(saveData)} className="mt-10 sm:space-x-4 flex">
                    <div 
                        className="relative flex bg-white rounded-full border-1 py-1 text-gray-900 ring-1
                        ring-gray-300 placeholder:text-gray-500 focus:z-10 text-sm
                        focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                      <span className="flex select-none items-center pl-3 text-gray-900">littleregistry.ca/</span>
                      <input
                        type="text"
                        {...register('registryName', {
                          required: {
                            value: true,
                            message: 'Please choose a registry name'
                          },
                          validate: {
                            checkName: async(values) => {
                                try {
                                    let result = await AxiosClient.get(`registries/check_name?registry_name=${values}`)
                                    if (result.data.registry_name_exists) { return "This registry name already exists" }
                                    return true
                                } catch(e) {
                                    return "There was an error validating your registry name"
                                }
                            }
                          }
                        })}
                        className="block flex-1 text-sm border-0 bg-transparent py-0.5 pl-1 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:leading-6"
                        placeholder="myregistry"
                      />
                    </div>
                    
                    <button type="submit" className="bg-[#FC1938] hover:bg-[#FC1938] px-16 sm:px-6 text-white rounded-full ">Try now</button>
                </form>
                {errors.registryName &&
                <p className="mt-2 text-sm text-red-600">
                {errors.registryName.message}
                </p>
                }
                </div>
                <div className="mt-10 mx-auto max-w-2xl w-fit flex justify-end">
                {/* overflow-hidden */}
                <Image src={registryGraphicThree}/>
                </div>
      </div>

       <div className="grid items-center">
        <div className="flex justify-center mt-6 ml-10 max-w-6xl text-center font-semibold text-xl sm:text-2xl text-[#595757] tracking-tight">Connect all Canadian brands & stores in one list.</div>
        <div className="flex justify-center my-2 ml-10 max-w-6xl text-center font-medium text-lg sm:text-xl text-[#919191] tracking-tight">Enjoy perks & discounts from any stores </div>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center mb-10">
        {/* {canadianLogos.map((logo, idx) => (
                                <Image src={logo} key={'logo-'+idx} height={70} className="p-3" />
                                // className={idx == index ? "opacity-1 visible w-full h-full transition-opacity ease-in duration-700 inline-block" : "opacity-0 invisible w-full h-full transition-opacity ease-in duration-700 inline-block"}
            ))}
        </div> */}

        <Image src={Amazon} key={'logo-a'} height={70} width={160} className="p-2" alt="amazon-logo" />   
        <Image src={Babyrus} key={'logo-b'} height={70} className="p-2" alt="babyrus-logo"/>   
        <Image src={Etsy} key={'logo-c'} height={70} className="p-2" alt="etsy-logo" />   
        <Image src={Indigo} key={'logo-d'} height={70} width={180} className="p-2" alt="indigo-logo" />   
        <Image src={Snugglebugz} key={'logo-e'} height={60} className="p-2" alt="snuggle-bugz-logo" />   
        <Image src={Westcoastkids} key={'logo-f'} height={70} className="p-2" alt="westcoast-kids-logo"/>   
        <Image src={PotteryBarnKids} key={'logo-pbk'} height={70} className="p-2" alt="pottery-barn-kids-logo"/>
        <Image src={Walmart} key={'logo-walmart'} height={80} className="p-2" alt="walmart-logo"/>
        </div>
     </div>                     

    </Container>
    </div>
  )
}
