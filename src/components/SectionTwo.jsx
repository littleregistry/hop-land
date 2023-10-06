import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'
import { useState } from 'react'
import { useForm }from 'react-hook-form'

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
    const saveData = () => {
        router.push('/signup?registryName='+getValues('registryName'))

    }

    
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
      <div className="flex justify-center">                   
        <form onSubmit={handleSubmit(saveData)} className="mt-10 sm:space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row">
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
                    
                    <button type="submit" className="bg-[#FC1938] hover:bg-[#FC1938] py-2 px-16 sm:px-6 text-white rounded-full ">Try now</button>
                </form>
                
        </div>
        {errors.registryName &&
        <p className="mt-2 text-sm text-red-600">
        {errors.registryName.message}
        </p>
        }

      {/* </div> */}
      {/* <div className="mt-36 lg:mt-44">
      </div> */}
    </Container>
    </div>
  )
}
