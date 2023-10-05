import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition, } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
// import pouchLogo from '@/images/pouchlogo-red-withtext.svg'
import pouchDesktopLogo from '@/images/pouchlogo-red-withtext-2.svg'
import pouchMobileLogo from '@/images/pouchlogo-red.svg'


function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="bg-[#FAEAE7]">
      <Container className="">      
        <nav className="">
          <div className="bg-[#fff] z-20 h-14 sm:h-20 fixed rounded-full flex justify-between items-center right-6 left-6 top-6">
          
          <Link href="/">
          <div className="flex md:gap-x-6 align-baseline">
            {/* hidden md: */}
            <div className="flex mx-5 items-center">
              <div className="hidden sm:inline-block text-2xl font-semibold text-[#FC1938]">LittleRegistry</div>
              <div><Image className="p-3" src={pouchMobileLogo} width={65} alt="mobile-logo"/></div>
            </div>
                        
          </div>
          </Link>

          <div className="flex py-6 ">
            <Link href="/login">
                  <div className="w-max m-1 font-medium bg-[#E9E9E9] hover:bg-[#e2dede] text-medium sm:text-lg p-2 sm:p-4 rounded-lg">
                    Log in
                  </div>            
            </Link>
            
            {/* Button */}
            <Link href="/signup">
              <div className="w-max my-1 mx-2 mr-3 font-semibold bg-[#1E2330] hover:bg-[#5a6070] text-[#fff] text-medium sm:text-lg p-2 sm:p-4 rounded-full">
                Sign up free
              </div>
            </Link>

          </div>

          {/* <div className="flex items-end">          */}
            {/* <div className="-mr-1 md:hidden"> */}
              {/* <MobileNavigation /> */}
            {/* </div> */}
          {/* </div> */}
          </div>
        </nav>
      </Container>
    </header>
  )
}
