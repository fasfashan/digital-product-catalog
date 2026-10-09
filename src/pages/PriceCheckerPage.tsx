import React from 'react'
import overviewImg from '../assets/price-checker-overview.webp'
import revenueImg from '../assets/price-checker-revenue.webp'
import { BackHeader } from '../components/BackHeader'

export const PriceCheckerPage: React.FC = () => (
  <div className="relative w-full h-full pb-safe bg-white text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">
    <BackHeader to="/solutions/retail-signage" label="Back to Retail & Digital Signage Solutions" />

    <section className="w-full shrink-0 px-5 py-10 sm:px-10">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-10 animate-fade-in">
        <h1 className="text-center font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl">
          Self-service Price Checker
        </h1>
        <img
          src={overviewImg}
          alt="Self-service price checkers help shoppers buy confidently and independently, making shopping easier, encouraging more purchases, and earning advertising revenue"
          className="block aspect-[3055/1875] h-auto w-full select-none object-cover pointer-events-none"
        />
      </div>
    </section>

    <section className="w-full shrink-0 px-5 pb-10 pt-0 sm:px-10 sm:py-10">
      <div className="mx-auto w-full max-w-[1024px]">
        <img
          src={revenueImg}
          alt="Your next revenue channel at the point of purchase: turn idle screens into ad revenue, turn price checks into bigger baskets, and fully customize layouts for your brand"
          className="block aspect-[2966/1601] h-auto w-full select-none object-cover pointer-events-none"
        />
      </div>
    </section>
  </div>
)

export default PriceCheckerPage
