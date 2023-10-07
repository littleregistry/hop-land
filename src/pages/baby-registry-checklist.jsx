import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Image from 'next/image';

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { Disclosure } from '@headlessui/react'
import { Button } from '@/components/Button'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { Helmet } from 'react-helmet';

import registryChecklist from './registry-checklist-items.json';

import {ChecklistTipsModal} from '@/components/ChecklistTipsModal'

export default function Checklist() {

    const [userChecklist, setUserCheckList] = useState([])
    const [open, setOpen] = useState(false)

    const [productTip, setProductTip] = useState("")


    useEffect(() => {
		setUserCheckList(registryChecklist)
	}, [])

    const openModal = (product) => {
        setOpen(true)
        setProductTip(product)
    }

    const handleCheckboxChange = async(productTypeName, checklistCategoryId) => {
        console.log(productTypeName, checklistCategoryId)

        let newUserChecklist = [...userChecklist]

        // Find the item in the array with the matching ID        
        let listIndex = newUserChecklist.findIndex(categoryList => categoryList.category_id === checklistCategoryId)

        // console.log('openSection', category_id, id)

        let productItemIndex = newUserChecklist[listIndex].products.findIndex((item) => { 
            // console.log(item)
            return item.product_type == productTypeName
        });

        let productCheckedBoxValue = newUserChecklist[listIndex].products[productItemIndex].checked

        newUserChecklist[listIndex].products[productItemIndex].checked = !productCheckedBoxValue       

        setUserCheckList(newUserChecklist)
    };

    function countOccurrences(arr, attribute) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i][attribute] === true) {
            count++;
          }
        }
        return count;
    }

    return(        
        <div className="pt-4">
        <Helmet>
            <title>Baby Registry Checklist (with Pictures & Tips)</title>
            <meta name="description" content="Get your free personalized baby registry checklist & recommendations." />
            <meta name="keywords" content="baby registry checklist, shopping, baby product recommendations" />
            {/* <meta name="author" content="Your Name" /> */}
            <meta property="og:title" content="Personalized baby registry checklist" />
            <meta property="og:description" content="Get your free personalized baby registry checklist & recommendations." />
            {/* <meta property="og:image" content="https://example.com/image.jpg" /> */}
            <meta property="og:url" content="https://littleregistry.ca/baby-registry-checklist" />
            {/* <meta name="twitter:title" content="My Page Title" />
            <meta name="twitter:description" content="This is a description of my page" />
            <meta name="twitter:image" content="https://example.com/image.jpg" />
            <meta name="twitter:card" content="summary_large_image" /> */}
        </Helmet>

        <Header />        

        <div className="px-4 md:px-12 pt-2">            

            <div className="flex flex-nowrap justify-center mt-24">
                <div className="max-w-xl">
                    <h1 id="your-orders-heading" className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Baby Registry Checklist
                    </h1>                    

                    {/* Desc */}
                    <p className="flex justify-center mt-2 text-medium text-center text-gray-600">
                        Click on each product to learn more. Sign up to save your progress.
                    </p>
                </div>                       
                
            </div>

             {/* CTA */}
             <div className="flex justify-center">
             <Link href="/signup" 
                className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-lg my-8 text-center font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                    {/* <div className="mx-6 my-10 p-10 rounded-3xl bg-[#461F69] text-[#ffffff]">                     */}
                    <p>
                        Sign up to set up your baby registry in minutes
                    </p>                        
            </Link>     
            </div>
            <Link href="https://forms.gle/H4qqXrk4Ttnhbs9CA">
                    {/* <div className="mx-6 my-10 p-10 rounded-3xl bg-[#461F69] text-[#ffffff]">                     */}
                            <p className="text-sm underline sm:text-lg hover:text-gray-500 text-center tracking-tight">
                                Want more personalized brand recommendations?<br/>Fill in a short form and get advice from a baby registry expert.
                            </p>                        
                    {/* </div> */}
            </Link>     

           
            
                    
                                                                         
            <div className="grid place-content-center grid-cols-1 px-0 md:px-20">
            
                <ChecklistTipsModal productTip={productTip} open={open} setOpen={setOpen} />

                <>                    
                    <dl className="mt-10 space-y-6 ">
                        {userChecklist.map((checklist) => {
                            let productsChecked = countOccurrences(checklist.products, 'checked')
                            let percentageChecked = productsChecked / checklist.products.length *100                                    

                            return (<Disclosure as="div" key={checklist.category_id} className="p-4 md:p-6 border-2 rounded-3xl bg-white" defaultOpen>
                            {({ open }) => (
                            <>                                
                                <dt>
                                <Disclosure.Button className="w-full">

                                    <div>                                
                                    {/* CATEGORY NAME & EXPAND */}
                                    <div className="w-full">

                                    

                                    <div className="flex justify-between text-left text-gray-900">
                                            <div className="flex items-center text-xl font-medium leading-7">                                                      
                                            <Image 
                                            className="p-2 in-block"
                                            width={60}
                                            height={60}
                                            alt="category icon"
                                            src={checklist.categoryIcon}
                                            />

                                            <div className="p-2">{checklist.category}</div>
                                            </div>                                                                   
                                            <div className="flex items-center">   
                                            <div className="ml-6 flex h-7 text-slate-500 items-center"> {productsChecked} / { checklist.products.length }</div>
                                            <span className="ml-6 flex h-7 items-center">
                                            {open ? (
                                                <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                                            )}
                                            </span>  
                                        </div>                                                                                        
                                    </div>
                                    </div>
                                    </div>
                                    
                                    {/* Progress bar */}
                                        <div className="w-full bg-gray-200 mt-2 rounded-full h-2.5">
                                    <div className="w-6/8 bg-red-400 h-2.5 rounded-full" style={{width: `${percentageChecked}%`}}></div>
                                    </div>           


                                </Disclosure.Button>
                                </dt>
                                
                                <Disclosure.Panel as="dd" className="mt-2">
                                <p className="text-base leading-7 text-gray-600">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-10">
                                        {checklist.products.map((product) => (
                                        <>                                                                        
                                        <div className="group relative rounded-lg p-2 ring-offset-2 ring-1 ring-[#EBEBEB] shadow-[0px_6px_4px_2px_#f7fafc]">
                                            
                                            <div onClick={() => openModal(product)} className="cursor-pointer w-full relative h-36 md:h-36 lg:h-64 
                                                rounded-lg bg-white">                                            
                                                    <Image                                                key={product.image_url}
                                                        fill={true}
                                                        src={product.image_url}
                                                        alt={""}
                                                        className="
                                                        object-contain object-center
                                                        group-hover:opacity-75"
                                                    />                                          
                                            </div>

                                                
                                            <div className="">
                                                <h3 className="text text-gray-700 font-semibold line-clamp-2 text-center">{product.product_type}</h3>
                                                <h3 className="text text-gray-700 line-clamp-2 text-center text-stone-400">{product.tag}</h3>
                                            </div>

                                            <div className="absolute group-hover:block flex top-2 right-2">
                                                <input                    
                                                    checked={product.checked}
                                                    onChange={() => handleCheckboxChange(product.product_type, checklist.category_id)}
                                                    type="checkbox"                    
                                                    className="flex h-10 w-10                    
                                                    rounded-full border
                                                    justify-center items-center
                                                    text-gray-900 mr-2 bg-white absolute left-0
                                                    cursor-pointer relative
                                                    "
                                                />				
                                            </div>
                                            
                                        </div> 
                                        </>
                                    ))}
                                </div>
                                </p>
                                </Disclosure.Panel>
                            </>
                            )}
                        </Disclosure>
                        )
                        })}
                    </dl>

                </>
                
            </div>   

             <div className="flex justify-center">
             <Link href="/signup" 
                className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-lg my-8 text-center font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100">
                    {/* <div className="mx-6 my-10 p-10 rounded-3xl bg-[#461F69] text-[#ffffff]">                     */}
                    <p>
                        Sign up to set up your baby registry in minutes
                    </p>                        
            </Link>     
            </div>
            <Link href="https://forms.gle/H4qqXrk4Ttnhbs9CA">
                    {/* <div className="mx-6 my-10 p-10 rounded-3xl bg-[#461F69] text-[#ffffff]">                     */}
                            <p className="text-sm underline sm:text-lg hover:text-gray-500 text-center tracking-tight">
                                Want more personalized brand recommendations?<br/>Fill in a short form and get advice from a baby registry expert.
                            </p>                        
                    {/* </div> */}
            </Link>      

            <br /><br />                 
                                                                  
        </div>
        <Footer />
        </div>
    )
}