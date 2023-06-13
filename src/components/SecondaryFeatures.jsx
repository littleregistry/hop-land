import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import screenshotShare from '@/images/screenshots/share.png'
import screenshotRegistry from '@/images/main.gif'
import screenshotPreferences from '@/images/preferences.gif'
import screenshotPicked from '@/images/pickedforyou.png'
import screenshotPrice from '@/images/price.png'
import breastfeedingCard from '@/images/features-cards/breastfeeding.png'
import toysCard from '@/images/features-cards/toys.png'
import diaperCard from '@/images/features-cards/diaper.png'
import strollerCard from '@/images/features-cards/stroller.png'
import amazonPriceCard from '@/images/features-cards/amazon-price.png'
import cratePriceCard from '@/images/features-cards/crate-price.png'
import mobyPriceCard from '@/images/features-cards/moby-price.png'

const features = [
  {
    name: 'Reporting',
    summary: 'Help us get to know you',
    description: `
    Tell us about your lifestyle, budget & preferences. 
    `,
    image: screenshotPreferences, //survey 
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Inventory',
    summary:
    `Get products picked just for you`,
    description: `See expertly curated products that match your parenting style & price points.`,
    image: screenshotPicked, //Our reasons for picking + you may like 
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
      </h3>
      <p className="mt-2 font-display text-2xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-lg text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl mb-12" isActive />
          <div className="relative mt-10 pb-10">
            <div className="relative mx-auto w-5/6 lg:w-[30rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="25rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[20rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="20rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

const buyingOptions = [
  {
    name: 'Babylist',
    price: 799,
    logo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]


export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 sm:pb-20 lg:pb-32"
    >
      <Container>
        {/* <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Simplify parenthood.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Rest easy knowing that you&#39;re making the best possible choices for your growing family.
          </p>
        </div> */}
        <FeaturesMobile />
      <div
        className="mx-auto relative max-w-2xl mb-12 mt-12"
      >
        <p className="mt-2 font-display text-2xl text-slate-900">
          Shop at the best price
        </p>
        <p className="mt-4 text-lg text-slate-600">
          Always get the best price. Never overpay.
        </p>
        <div className="flex flex-col items-center mt-8">
          <div className="lg:block">
            <Image src={mobyPriceCard} className="" alt="" />
          </div>
          <div className="lg:block">
            <Image src={amazonPriceCard} className="" alt="" />
          </div>
          <div className="lg:block">
            <Image src={cratePriceCard} className="" alt="" />
          </div>
        </div>
      </div>

      <div
        className="mx-auto relative max-w-2xl mb-12 mt-12"
      >
        <p className="mt-2 font-display text-2xl text-slate-900">
          Shop with peace of mind
        </p>
        <p className="mt-4 text-lg text-slate-600">
          Get personalized advice on items best for every stage of your baby's development.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-8">
          <div className="lg:block md:col-span-2">
            <Image src={strollerCard} className="m-0 p-0" alt="" />
          </div>
          <div className="lg:block col-span-1 md:col-span-1">
            <Image src={breastfeedingCard} className="" alt="" />
          </div>
          <div className="hidden md:block md:col-span-1">
          <div className="col-span-1 lg:block ml-auto">
            <Image src={toysCard} className="" alt="" />
          </div>

          <div className="col-span-1">
            <Image src={diaperCard} className="" alt="" />
          </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  )
}
