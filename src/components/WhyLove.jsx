import Image from 'next/image'
import Link from 'next/link'
import babypouchLogo from '@/images/logos/babypouch.jpg'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import checkListGraphic from '@/images/checklist-graphic.png'

import cashGiftIcon from '@/images/icons/cash-gift-icon.png'
import profilesIcon from '@/images/icons/profiles-icon.png'
import controlWhenIcon from '@/images/icons/control-when-icon.png'
import privacyIcon from '@/images/icons/privacy-icon.png'
import groupGiftIcon from '@/images/icons/group-gift-icon.png'
import exchangeIcon from '@/images/icons/exchange-icon.png'



const posts = [
  {
    id: 1,
    title: 'Cash funds',
    desc: 'Customize cash gifts to fund what you actually need',    
    description: '',
    href: '#',    
    imageUrl: cashGiftIcon,
    // Cash emoji 
  },
  {
    id: 2,
    title: 'Group gifts',
    desc: 'Turn expensive gifts into a crowdfunding gift',
    href: '#',
    description: '',
    imageUrl: groupGiftIcon,
    // Contribute button 
  },
  {
    id: 3,
    title: 'Beautiful profiles',
    desc: 'Choose from 20+ themes to personalize your registry',
    href: '#',
    description: '',
    imageUrl: profilesIcon,
    // Personalize profile sidebar 
  },
  {
    id: 4,
    title: 'Discreet Gift Exchange',
    desc: 'Swap a gift you received to cash payout and use it to buy something else if you want',
    href: '#',
    description: '',
    imageUrl: exchangeIcon,
  },
  {
    id: 5,
    title: 'Control when gifts arrive',
    desc: 'Don\'t wanna store that high chair for 6 months. Order it at your leisure',
    href: '#',
    description: '',
    imageUrl: controlWhenIcon,
  },
  {
    id: 6,
    title: 'Privacy first',
    desc: 'No strangers can access your page to see your due date/ address.',
    href: '#',
    description: '',
    imageUrl: privacyIcon,
  },
  
  
  // More posts...
]

export function WhyLove() {
  return (
    <div className="bg-[#f9f9f9] py-8">
    <Container className="pt-20 relative max-w-5xl lg:pt-32">
      <h1 className="mx-auto max-w-4xl text-center font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight text-slate-900">
        Why expecting parents love Little Registry
      </h1>
      {/* <p className="mx-auto p-5 max-w-5xl text-xl sm:text-2xl text-center text-[#005394] tracking-tight">
        We get it – things can get really overwhelming. That’s why we create tools to help!
      </p> */}

      <div className="text-center ">
        <Button href="/signup" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] m-5 px-8 py-5 text-[#545154] text-xl">Get Started Now</Button>
      </div>

      <div className="mx-auto mt-20 grid grid-cols-2 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col bg-[#fff] pt-8 px-8 rounded-3xl justify-between">
              <div className="relative h-[199px] flex">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="w-full rounded-2xl bg-gray-100 object-contain sm:aspect-[2/1] lg:aspect-[3/2] mb-6"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-2 flex items-center gap-x-4 text-xs">
                </div>
                <div className="group relative text-center">
                  <h3 className="mt-2 font-medium text-xl leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-md leading-6 text-gray-600">{post.desc}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                </div>
              </div>
            </article>
          ))}
        </div>
      <p className="mx-auto mt-6 max-w-lg text-lg tracking-tight text-slate-700">
      </p>
      
     
      <div className="my-28 p-20 rounded-3xl bg-[#461F69] text-[#ffffff]">
      <h1 className="mx-auto max-w-4xl text-center font-display md:text-6xl sm:text-5xl text-3xl font-medium tracking-tight ">
        Free registry consultation
      </h1>
      <p className="mt-6 max-w-5xl text-xl sm:text-2xl text-center tracking-tight">
      We understand how overwhelming the whole research process is. <br/>We're happy to chat if you need any help!
      </p>

      <div className="text-center ">
      <Button href="/" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] m-5 px-8 py-5 text-[#545154] text-xl">Start Chat</Button>
      </div>

      </div>
    </Container>
    </div>
  )
}
