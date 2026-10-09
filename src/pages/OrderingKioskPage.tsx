import React from 'react'
import overviewImg from '../assets/ordering-kiosk-overview.webp'
import optionsImg from '../assets/ordering-kiosk-options.webp'
import fnbTransformationImg from '../assets/ordering-kiosk-fnb-transformation.webp'
import { BackHeader } from '../components/BackHeader'

export const OrderingKioskPage: React.FC = () => (
  <div className="relative w-full h-full pb-safe bg-white text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">
    <BackHeader to="/solutions/retail-signage" label="Back to Retail & Digital Signage Solutions" />

    <section className="w-full shrink-0 px-5 py-10 sm:px-10">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-10 animate-fade-in">
        <h1 className="text-center font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl">
          Self-service Ordering Kiosk
        </h1>
        <img
          src={overviewImg}
          alt="Self-service ordering kiosk lets customers browse, customize, order, and pay independently: capture more orders, serve more customers in less time, and drive bigger purchases"
          className="block aspect-[3055/1875] h-auto w-full select-none object-cover pointer-events-none"
        />
      </div>
    </section>

    <section className="w-full shrink-0 px-5 py-10 sm:px-10">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-10">
        <h2 className="text-center font-['Lato'] text-2xl italic leading-8 text-black">
          Flexible Options to Support Different Outlet Needs &amp; Sizes
        </h2>
        <img
          src={optionsImg}
          alt="Floor standing kiosk, desk-mounted kiosk, and wall-mounted kiosk"
          className="block aspect-[2737/1098] h-auto w-full select-none object-cover pointer-events-none"
        />
      </div>
    </section>

    <section className="w-full shrink-0 px-5 py-10 sm:px-10">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-10">
        <h2 className="text-center font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl">
          Our Solutions for Digital F&amp;B Transformation
        </h2>
        <img
          src={fnbTransformationImg}
          alt="Restaurant layout showing the self-service ordering kiosk, kitchen information display, table ordering system, and real-time order status display"
          className="block aspect-[2931/1645] h-auto w-full select-none object-cover pointer-events-none"
        />
      </div>
    </section>
  </div>
)

export default OrderingKioskPage
