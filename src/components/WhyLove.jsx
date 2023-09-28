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
import RegInspoGraphic from '@/images/reg-inspo-graphic.png'
import checkListGraphic from '@/images/checklist-graphic.png'

const posts = [
  {
    id: 1,
    title: 'Cash funds',
    desc: 'Customize cash gifts to fund what you actually need',
    href: '#',
    description: '',
    imageUrl: checkListGraphic,
  },
  {
    id: 2,
    title: 'Group gifts',
    desc: 'Expensive stroller? Turn it into crowdfunding gift',
    href: '#',
    description: '',
    imageUrl: checkListGraphic,
  },
  {
    id: 3,
    title: 'Beautiful profiles',
    desc: 'Choose from 20+ themes to match your baby shower or nursery theme',
    href: '#',
    description: '',
    imageUrl: checkListGraphic,
  },
  {
    id: 4,
    title: 'Discreet Gift Exchange',
    desc: 'Swap gifts. No duplicates ever',
    href: '#',
    description: '',
    imageUrl: checkListGraphic,
  },
  {
    id: 5,
    title: 'Control when your gifts arrive',
    desc: 'Don\'t wanna store that high chair for 6 months',
    href: '#',
    description: '',
    imageUrl: checkListGraphic,
  },
  {
    id: 6,
    title: 'Easy checkout',
    desc: 'No need to manually mark things as purchased',
    href: '#',
    description: '',
    imageUrl: checkListGraphic,
  },
  {
    id: 7,
    title: 'Flexible payment options',
    desc: 'No need to manually mark things as purchased',
    href: '#',
    description: 'If you want, we can transfer cash straight to your bank account -- bank payouts used to buy things you actually want',
    imageUrl: checkListGraphic,
  },
  {
    id: 8,
    title: 'Privacy first',
    desc: 'No need to disclose home address',
    href: '#',
    description: '',
    imageUrl: checkListGraphic,
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
        <Button href="/" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] m-5 px-8 py-5 text-[#545154] text-xl">Get Started Now</Button>
      </div>

      <div className="mx-auto mt-20 grid max-w-lg grid-cols-2 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col bg-[#fff] pt-16 px-8 rounded-3xl justify-between">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="w-full rounded-2xl bg-gray-100 object-contain sm:aspect-[2/1] lg:aspect-[3/2] mb-12"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                </div>
                <div className="group relative text-center">
                  <h3 className="mt-3 font-medium text-xl leading-6 text-gray-900 group-hover:text-gray-600">
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
      
     
      <div className="mt-36 lg:mt-44">
      </div>
    </Container>
    </div>
  )
}
