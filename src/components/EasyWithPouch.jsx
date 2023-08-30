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
    title: 'Interactive Registry Checklist',
    desc: 'Pro tips for what to register for',
    href: '#',
    description: '',
    imageUrl: checkListGraphic,
  },
  {
    id: 2,
    title: 'Registry Inspos',
    desc: 'From must-haves to the most organic, child-safe baby products',
    href: '#',
    description: '',
    imageUrl: RegInspoGraphic,
  },

  // More posts...
]

export function EasyWithPouch() {
  return (
    <div className="bg-[#f9f9f9] py-8">
    <Container className="pt-20 relative max-w-5xl lg:pt-32">
      <h1 className="mx-auto max-w-4xl text-center font-display md:text-7xl text-5xl font-medium tracking-tight text-slate-900">
        We make baby registry building fun & easy
      </h1>
      <p className="mx-auto p-5 max-w-5xl text-2xl text-center text-[#005394] tracking-tight">
        We get it – things can get really overwhelming. That’s why we create tools to help!
      </p>

      <div className="text-center ">
        <Button href="/" className="bg-[#E8C0E8] hover:bg-[#d3a9d3] m-5 px-8 py-5 text-[#545154] text-xl">Get Started Now</Button>
      </div>

      <div className="mx-auto mt-20 grid max-w-lg grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
                  <h3 className="mt-3 text-xl leading-6 text-gray-900 group-hover:text-gray-600">
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
