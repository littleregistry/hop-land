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
        'desc': "With BabyPouch, you can (1) choose different color themes that matches your vibe. (2) You can also create a custom domain to make it easy to remember for you and your guests. (3) Not sure what to write, we have a bunch of sample greeting messages to choose from.",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    //pick a theme - virgo/leo 
    {
        'header': 'Add gift items',
        'desc': 'Add gifts from any stores (big retailers or indie brands). Simply paste a link to our app and your gifts will show up in our app. You can use BabyPouch with all Canadian stores, and take advantage of any (1)registry perks and completion discounts. (2)Checklist / (3) Registry Inspos',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Add cash funds',
        'desc': 'Set up any cash funds in a click. If you want to save up for diaper deliveries or baby’s future college fund, we let you add any funds for your loved ones to contribute.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    {
        'header': 'Preview',
        'desc': 'Check out your sample registry to explore the BabyPouch experience from your guest’s perspective. See a demo here.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Share',
        'desc': "Once you’re ready, you can share it with friends and family. When you share your registry, no need to share your home address publicly. With BabyPouch, your address and contact info stays private. Share your registry with wedding guests by adding your unique Hitchd URL to your wedding website, invitations or social media. Your guests are going to love Hitchd.",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    {
        'header': 'Guests buy you something',
        'desc': 'BabyPouch offers a 1-step checkout experience. All your guests need to do is to pick the items, then it’ll take them to a page to fill in their greeting note, payment info and confirm their purchases. Instead of pointing your guests to different sites to shop, they can shop different stores all in one place.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Get notified',
        'desc': "Get notified when guests buy you something. When guests buy you something, we proceed to convert the value of the gift to cash. We'll transfer the cash straight to your bank account. This cash can then be used at your discretion to purchase anything you actually need. This allows our platform to streamline the checkout experience for your guests. ",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Thank your guests',
        'desc': "Track Gifts  and track what’s remaining on your registry. Unlike Amazon, we let you track who bought the gift and their gift message. We make it easy for you to keep track of your thank you notes. When you receive a contribution, we'll keep you notified and let you know which guests to thank.",
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    },
    {
        'header': 'Unlimited gift exchange ',
        'desc': '-- You might change your mind and want to get something else even after you send out the registry. When someone buys from your BabyPouch registry, you receive the cash equivalent of the product. You can take that cash out and swap for something else that you actually want. Your guest won’t be notified when you swap behind the scenes. When someone buys from your BabyPouch registry, you can cash out the amount your guest paid to order products at your leisure. If you don’t want to store a high chair for 6 months before it’s useful, you can order it later.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'Buy/Ship when you want',
        'desc': 'Unlimited gift exchange / Ship when you want -- When guests buy you something, we proceed to convert the value of the gift to cash. This cash can then be used at your discretion to purchase anything you actually need. You might change your mind and want to get something else even after you send out the registry. When someone buys from your BabyPouch registry, you receive the cash equivalent of the product. You can take that cash out and swap for something else that you actually want. Your guest won’t be notified when you swap behind the scenes. When someone buys from your BabyPouch registry, you can cash out the amount your guest paid to order products at your leisure. If you don’t want to store a high chair for 6 months before it’s useful, you can order it later.',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'left'
    },
    {
        'header': 'FEATURES',
        'desc': 'Group Gifting. Let your love ones pitch in to high ticket items using our group gifting feature. ',
        'image': '',
        'backgroundColor': '#FEF6EA',
        'align': 'right'
    }
]

export function HowItWorks() {
  return (
    <>
        {steps.map((step) => {
            return (<div className={"bg-["+step.backgroundColor+"]"}>
            {/* lg:pt-2 */}
          <Container className="relative max-w-7xl">        
            <div className={step.align === "left" ? "mx-auto px-6 py-20 mx-auto xl:flex lg:items-center lg:gap-x-10 flex-wrap md:flex-nowrap flex-row-reverse": "mx-auto px-6 py-20 mx-auto xl:flex lg:items-center lg:gap-x-10 flex-wrap md:flex-nowrap"}>
                      <div>
                        <h1 className="max-w-4xl font-display md:text-7xl text-5xl font-medium tracking-tight text-[#005394]">
                            {step.header}
                        </h1>
                        <p className="mt-6 max-w-4xl text-2xl text-[#005394] tracking-tight">
                            {step.desc}
                        </p>
      
                        {/* <div className="">
                          <Button href="/" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] mt-10 px-8 py-5 text-[#545154] text-xl">Start Adding Gifts</Button>
                        </div> */}
                      
                      </div>
      
                      <div className="mx-auto max-w-xl">
                          <Image src={""} />
                      </div>
      
            </div>
          </Container>    
          </div>)
        })}
    
    </>    
  )
}
