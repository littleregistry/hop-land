import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import babypouchLogo from '@/images/logos/babypouch.jpg'

export function Footer() {

  const links = {    
    "About": [
        // {'label': 'Our Story', 'link': '/about', 'key': 'about-link'},
        // {'label': 'How it works', 'link': '/how-it-works', 'key': 'how-it-works-link'},
        {'label': 'Registry Checklist', 'link': '/baby-registry-checklist', 'key': 'checklist-link'},
        {'label': 'View Demo', 'link': '/demo', 'key': 'demo-link'},
        {'label': 'Contact Us', 'link': '/contact', 'key': 'contact-link'},
    ],
    // "Compare": [
    //   {'label': 'MyRegistry', 'link': '/vs-myregistry', 'key': 'about-link'},
    //   {'label': 'Babylist', 'link': '/vs-babylist', 'key': 'about-link'}
    // ],
    // "Resources": [
      // {'label': 'Checklist', 'link': '/registry-checklist', 'key': 'checklist-link'},       
       // {'label': 'Registry Inspo', 'link': '/checklist', 'key': 'checklist-link'},        
        // {'label': 'Blog', 'link': '/checklist', 'key': 'checklist-link'},        
        // {'label': 'FAQs', 'link': '/faq', 'key': 'faq-link'}        
        // {'label': 'Terms', 'link': '/terms', 'key': 'terms-link'},        
        // {'label': 'Privacy', 'link': '/privacy', 'key': 'privacy-link'}        
    // ]
  }

  return (
    <footer className="bg-slate-50">
      <Container>        
          {/* <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav> */}
                
        <div className="max-w-[625px] px-4 py-10 flex">    

          <div >
            <div className="text-2xl py-2 font-semibold">Resources</div>
                  {
                      links['About'].map((link) => {
                          return (<Link key={link.key} href={link.link} className="text-xl text-[#7f7b7b] hover:underline">
                            <div>{link.label}</div></Link>)
                      })
                  } 
          </div>

          {/* <div className="pl-20">
            <div className="text-2xl py-2 font-semibold">Compare</div>
              {
                  links['Compare'].map((link) => {
                      return (<Link key={link.key} href={link.link} className="text-xl text-[#7f7b7b] hover:underline">
                        <div>{link.label}</div></Link>)
                  })
              }
          </div>  */}

          {/* <div className="pl-20">
            <div className="text-2xl py-2 font-semibold">Resources</div>
              {
                  links['Resources'].map((link) => {
                      return (<Link key={link.key} href={link.link} className="text-xl text-[#7f7b7b] hover:underline">
                        <div>{link.label}</div></Link>)
                  })
              }
          </div>  */}

        </div>

        <div className="flex py-6 ">
            <Link href="/register">
                  <div className="w-max m-3 font-medium bg-[#E9E9E9] hover:bg-[#e2dede] text-lg p-3 rounded-lg">
                    Log in
                  </div>            
            </Link>
            
            {/* Button */}
            <Link href="/register">
              <div className="w-max my-3 mx-2 mr-3 font-semibold bg-[#1E2330] hover:bg-[#5a6070] text-[#fff] text-lg p-3 rounded-full">
                Sign up free
              </div>
            </Link> 
        </div>
        
        <div className="flex flex-col items-center py-6 sm:flex-row-reverse sm:justify-between border-t border-[#d1d1d1]">

        <p className="mt-6 text-sm text-[#b5b3b3] sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} LittleRegistry. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
