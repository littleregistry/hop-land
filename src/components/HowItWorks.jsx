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
import mainRegistry from '@/images/mainregistry.png'
// import addAnything from '@/images/addAnything.png'
import hero from '@/images/hero.png'

const steps = [
    {
        'header': 'Make your registry extra personalized. ',
        'desc': "With BabyPouch, you can choose from a collection of themes that match your vibe. Add a greeting message and custom URL to make it personal and easy to remember for you and your guests. ",
        'link_text': "",
        'image': '',
        'backgroundColor': 'black',
        'textColor': '#fffcfc',
        'align': 'right'
    },
    //pick a theme - virgo/leo 
    {
        'header': 'Add gift items from any store',
        'desc': 'Use BabyPouch with any Canadian retailers, and take advantage of any registry perks and completion discounts. You can support any indie brands that are unique and cannot be found in big stores. Keep track of everything in one place.',
        'link_text': "",
        'image': '',
        'backgroundColor': 'white',
        'align': 'left'
    },
    {
        'header': 'Add cash funds',
        'desc': "If you want to save up for diaper deliveries or baby’s future college fund, we let you set up any cash funds in a click. Your friends & family can choose any amount of money to give, using any major credit cards. It's simple, safe and 100% secure.",
        'link_text': "",
        'image': '',
        'backgroundColor': 'black',
        'align': 'right'
    },
    {
        'header': 'Prepare for launch',
        'desc': 'When you’re ready, preview your registry to explore the BabyPouch experience from your guest’s perspective.',
        'link_text': "",
        'image': '',
        'backgroundColor': 'white',
        'align': 'left'
    },
    {
        'header': 'Share with loved ones',
        'desc': "Share your unique BabyPouch URL with your friends and family. No need to disclose your home address publicly. With BabyPouch, your address and contact info stays private.",
        'link_text': "",
        'image': '',
        'backgroundColor': 'black',
        'align': 'right'
    },
    {
        'header': 'Guests buy you gifts',
        'desc': "BabyPouch offers a 1-step checkout experience. Your guests can shop items from different stores all in one place. Pick the items, fill in their payment info and confirm their purchases one time.",
        'link_text': "",
        'image': '',
        'backgroundColor': 'white',
        'align': 'left'
    },
    {
        'header': 'Receive gift contributions',
        'desc': "Get notified when guests buy you something. When guests buy you something, we proceed to convert the value of the gift to cash. We'll transfer the cash straight to your bank account. This cash can then be used at your discretion to purchase anything you actually need.",
        'link_text': "Learn how it works",
        'image': '',
        'backgroundColor': 'black',
        'align': 'right'
    },
    {
        'header': 'Thank your guests',
        'desc': "We let you track who bought the gift, their gift message and what’s remaining on your registry. We make it easy for you to keep track of all your thank you notes. ",
        'link_text': "",
        'image': '',
        'backgroundColor': 'white',
        'align': 'left'
    },    
    {
        'header': 'OUR UNIQUE APPROACH',
        'desc': "When someone buys from your BabyPouch registry, you receive the cash equivalent of the product. This enables us to be the most flexible baby registry option in the market. We're able to offer the following benefits.",
        'link_text': "",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },    
    {
        'header': '1-step checkout experience',
        'desc': "If you've used other universal baby registries, you will know every time when a guest shop, they will be redirected to different sites and need to ask for your shipping address to complete the purchase. Then they need to go back to the registry, mark things as purchased and fill out all the order information. It introduces many unnecessary steps for your friends and family to buy you gifts. When they forget to mark things as purchased, you risk receiving duplicates. With BabyPouch, your guest only needs to pay once on our site and they don't need to inquire your address. Making the whole process seamless and easy.",
        'link_text': "",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    {
        'header': 'Group gifting on any items',
        'desc': "Group gifting can be enabled on any gifts and cash funds regardless of which stores you're registered at. We let your loved ones chip in for any big ticket items, like strollers, car seats or high chairs. Most baby registries restrict group gifting only to cash funds or items from their stores.",
        'link_text': "",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    {
        'header': 'Unlimited gift exchange ',
        'desc': "If you change your mind and want to get something else even after you send out the registry, that's fine. You are in full contrl of how you want to spend the cash contributions. You can swap for something else that you actually want. Your guest won’t be notified.",
        'link_text': "",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Buy/Ship when you want',
        'desc': 'If you don’t want to store a high chair for 6 months before it’s useful, you can cash out the amount your guest paid to order products later.',
        'link_text': "",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    }
]

export function HowItWorks() {
  return (
    <>
        {steps.map((step, idx) => {
            return (<div key={idx} className={step.backgroundColor === "black" ? "bg-[#222324]" : "bg-[#ebeff5]"}>
            {/* lg:pt-2 */}
          <Container className="relative max-w-7xl">        
            <div className={step.align === "left" ? "mx-auto px-6 py-20 mx-auto xl:flex lg:items-center lg:gap-x-10 flex-wrap md:flex-nowrap": "mx-auto px-6 py-20 mx-auto xl:flex lg:items-center lg:gap-x-10 flex-wrap md:flex-nowrap flex-row-reverse"}>
                      <div>
                        <h1 className={step.backgroundColor === "black" ? "max-w-4xl font-display md:text-4xl text-2xl font-medium  tracking-tight text-[#ebeff5]": "max-w-4xl font-display md:text-4xl text-2xl font-medium  tracking-tight text-[#222324]"}>
                            {step.header}
                        </h1>
                        <p className={step.backgroundColor === "black" ? "mt-6 max-w-2xl md:text-2xl text-x; text-[#ebeff5] tracking-tight" : "mt-6 max-w-2xl md:text-2xl text-x; text-[#222324] tracking-tight"}>
                            {step.desc}
                        </p>

                        <p className="underline mt-6 max-w-2xl md:text-2xl text-x; text-[#005394] tracking-tight">
                            {step.link_text}
                        </p>                        
      
                        {/* <div className="">
                          <Button href="/" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] mt-10 px-8 py-5 text-[#545154] text-xl">Start Adding Gifts</Button>
                        </div> */}
                      
                      </div>
      
                      <div className="mx-auto max-w-xl">
                      </div>
      
            </div>
          </Container>    
          </div>)
        })}
    
    </>    
  )
}
