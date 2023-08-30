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
        {'label': 'About Us', 'link': '/about', 'key': 'about-link'},
        {'label': 'How it works', 'link': '/how-it-works', 'key': 'how-it-works-link'},
        {'label': 'Checklist', 'link': '/checklist', 'key': 'checklist-link'}
        // {'label': 'Reg Inspo', 'link': '/checklist', 'key': 'checklist-link'},        
        // {'label': 'Blog', 'link': '/checklist', 'key': 'checklist-link'},        
        // {'label': 'FAQs', 'link': '/faq', 'key': 'faq-link'}        
        // {'label': 'Terms', 'link': '/terms', 'key': 'terms-link'},        
        // {'label': 'Privacy', 'link': '/privacy', 'key': 'privacy-link'}        
    ]
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
                
        <div className="max-w-[625px] px-4 py-10">                
        <div className=""></div>
                {
                    links['About'].map((link) => {
                        return (<Link key={link.key} href={link.link} className="text-xl text-slate-500 hover:underline">
                          <div>{link.label}</div></Link>)
                    })
                }         
        </div>

        <div className="flex">
        <Button href="/register">
              <div className="bg-[#E9E9E9] hover:bg-[#e2dede] text-xl p-4 rounded-lg">
                Log in
              </div>            
        </Button>

        <Button href="/register">
          <div className="bg-[#1E2330] hover:bg-[#5a6070] text-[#fff] text-xl p-4 rounded-full">
            Sign up free
          </div>
        </Button>
        </div>

        {/* border-t border-slate-400/10 */}
        <div className="flex flex-col items-center py-6 sm:flex-row-reverse sm:justify-between">
        <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Baby Pouch. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
