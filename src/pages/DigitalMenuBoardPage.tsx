import React from 'react'
import heroImg from '../assets/digital-menu-board-hero.webp'
import useCasesImg from '../assets/digital-menu-board-usecases.webp'
import { BackHeader } from '../components/BackHeader'
import { PriceTag } from '../components/PriceTag'

const benefits = ['Ready-to-use templates', 'Price & promo updates in seconds', '1 outlet or multiple outlets']

export const DigitalMenuBoardPage: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-screen bg-white text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">
      <BackHeader to="/solutions/retail-signage" label="Back to Retail & Digital Signage Solutions" />

      {/* Hero */}
      <section className="w-full shrink-0 px-5 py-10 sm:px-10">
        <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-10 animate-fade-in">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl">
              Digital Menu Board for F&amp;B
            </h1>
            <p className="max-w-[730px] font-['Lato'] text-2xl italic leading-8 text-black">
              <span className="font-bold">New Prices Today.</span> <span className="font-medium">Not Days Later.</span>
            </p>
            <PriceTag price="Rp 5,000/ day" className="mt-2" />
          </div>

          <img
            src={heroImg}
            alt="Quick-serve restaurant digital menu board and synced multi-screen menu content managed from a phone"
            className="block aspect-[2898/1476] h-auto w-full select-none object-cover pointer-events-none"
          />
        </div>
      </section>

      {/* Benefits + use cases */}
      <section className="w-full shrink-0 bg-[#eef2f4] px-5 py-10 sm:px-10">
        <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-5">
          <ul className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#2a8fe0" />
                  <path
                    d="M6 10.2L8.6 12.8L14 7.4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-['Lato'] text-[18px] font-bold leading-7 text-black">{benefit}</span>
              </li>
            ))}
          </ul>

          <img
            src={useCasesImg}
            alt="Digital menu boards for quick serve restaurants, cafés, bakeries, and many more"
            className="block aspect-[3040/1066] h-auto w-full select-none object-cover pointer-events-none"
          />
        </div>
      </section>
    </div>
  )
}

export default DigitalMenuBoardPage
