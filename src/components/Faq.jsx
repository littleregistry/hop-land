import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'

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

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [  
  {
    question: "Why do I need an all-in-one baby registry?",
    answer:      
      "Right now, many individual registries only allow you to register gifts in their store. But sometimes it’s hard to find everything you want in one place. <br/><br/>"+
      "Here are 4 benefits of using an all-in-one baby registry. <br/><br/>"+
      "1. <b>Make things easy for your friends and family</b> – It’s a hassle to send out multiple registries for your friends and family. You can combine all the registries in one list for them to shop. <br/><br/>"+
      "2. <b>Registry at as many stores as you want</b> – Enjoy all the perks and completion discounts in any stores. Support small businesses and indie brands.  <br/><br/>"+
      "3. <b>Registry for any cash fund</b> – You can easily set up a cash fund (eg. diapers, doulas). Many individual store registries don’t allow it.  <br/><br/>"+
      "4. <b>Stay super organised</b> – It’s a tool to help you keep track of everything you need all in one place. It’s also sharable and shoppable."
  },
  {
    question: "Why should I use Little Registry?",
    answer:
      "BabyPouch gives you total flexibility to register anything on your baby registry - gifts from any stores and any cash funds. You can keep all your items on one page, easily track what's available or purchased, and who you need to thank. <br/><br/>"+
      "We're the only registry that offers the following: Group gifts on anything, cash funds,discreet gift exchange, Ship when you want, Privacy first features, lots of registry customization options." 
  },  
  {
    question: "How does BabyPouch work?",
    answer:
      "There are 4 steps to using BabyPouch. <br/><br/>"+ 
      "1. <b>Customize your registry </b>– Add a photo, greeting message and update the background colour of your registry. <br/><br/>"+
      "2. <b>Add gifts & cash funds</b> – In a click, you can add gifts from any URL or registries and set up your custom cash fund. <br/><br/>"+
      "3. <b>Share your registry</b> – Once you’re done adding gifts, you can start sharing it with friends and family.  <br/><br/>"+
      "4. <b>Get notified when someone buys you gifts </b>– Get notified when guests buy you something and track what’s remaining on your registry. <br/><br/>"+
      "When guests buy you something, we proceed to convert the value of the gift to cash. This cash can then be used at your discretion to purchase anything you actually need. <br/><br/>"
  },
  {
    question: "Is there a sample registry I can visit? ",
    answer:
      "Most definitely! You can check out our <a href='/'>sample registry</a> to explore the BabyPouch experience from your guest’s perspective. <br /><br /> Our registry is designed to be used by anyone from any age. The experience is incredibly seamless and personal.",
  },
  {
    question: "How is BabyPouch different from other baby registries?",
    answer:
      "The biggest complaint people have about other universal registries is the complex checkout experience – redirecting guests to checkout in other stores, then going back to mark products as purchased. <br/><br/>"+
      "This experience often leads to confusion if guests forget to mark gifts as purchased or enter the wrong shipping address. When that happens, you have a high chance of receiving nothing or duplicates from different friends and family members. It’s awkward to ask for a gift receipt to return someone’s gift. BabyPouch eliminate these concerns entirely with our unique approach. <br/><br/>"+
      "BabyPouch offers a 1-step checkout experience for your guests. Your guests can shop and checkout all in one place. BabyPouch also offers the most customizations options compared to any baby registries. You have full control over what gets ordered and shipped at your leisure."
  },
  {
    question: "What countries does BabyPouch support? ",
    answer:
      "Our customer support team only supports customers in Canada. However, our features work for users in both US & Canada. <br/><br/> If you have family members and friends from the US who want to contribute to your baby registry, they can do so with no problem.",
  },
  {
    question: "Do you offer any completion discounts?",
    answer:
      "BabyPouch is not an actual store and therefore doesn't offer any completion discounts. However, BabyPouch is designed to let you take advantage of completion discounts from multiple stores. We let you combine multiple registries into one. <br/><br/>"+ 
      "To qualify for completion discounts offered by any store, you still need to set up a registry directly on their site. Then you can proceed to paste the product link onto BabyPouch. <br/><br/>"+
      "If you already created a registry on their site, send us a message in the chat. We will transfer your existing products to BabyPouch for you."
  },
  {
    question: "What is your return policy? ",
    answer:
      "BabyPouch is not an actual store and therefore doesn't offer any returns or exchange. BabyPouch is designed to help you link multiple stores to one site. The return policy depends on the brand or store you registered at.",
  },
  {
    question: "Is BabyPouch free?",
    answer:
      "BabyPouch is completely free to use for you as a registrant.<br/><br/>"+
      "When guests purchase through our platform, we charge a 3% transaction fee. For example, if your guest purchased a $20 gift, we take a $0.6 transaction fee."
  },   
]



export function Faq() {
  return (
    <div className="pt-20 pb-20 relative lg:pt-32 lg:pb-24 bg-[#E6B8E6]">     

      <h1 className="mx-auto max-w-4xl text-[#461F69] text-center font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-slate-900">
      🤔 Still have questions?
      </h1>      
      <p className="mx-auto mt-4 max-w-lg text-lg tracking-tight text-slate-700">
      </p>
      <div className="bg-gray-900">
        <div className="p-4 mx-auto max-w-4xl divide-y divide-white/10 text-[#461F69]">          
          <dl className="mt-2 mx-6 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="bg-[#461F69] text-[#fff] px-2 py-2 rounded-lg">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="p-2 sm:p-4 text-medium sm:text-xl font-semibold leading-7">{faq.question}</span>
                        <span className="p-3 mt-3 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="p-2 sm:p-4 text-medium sm:text-xl leading-2 text-gray-300" dangerouslySetInnerHTML={{__html: faq.answer}} />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
    </div>
      {/* <div className="mt-10 flex justify-center gap-x-6">
        <input
          type="email"
          name="email"
          id="email"
          className="block rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="babypouch.co/myregistry"
          aria-describedby="email-description"
        />
        <Button href="/" className="bg-pouch-snow-500 hover:bg-pouch-snow-700 px-8 py-3 text-[#fff]">Claim your link</Button>
      </div> */}      
    </div>
  )
}
