import React from 'react'
import banksImg from '../assets/digital-banner-banks.webp'
import convenienceImg from '../assets/digital-banner-convenience.webp'
import supermarketImg from '../assets/digital-banner-supermarket.webp'
import { BackHeader } from '../components/BackHeader'
import { PriceTag } from '../components/PriceTag'

const sections = [
  {
    title: 'Digital Poster & Banner for Banks',
    tagline: 'Capture Attention. Influence Decisions. Simplify Operations.',
    image: banksImg,
    aspect: 1948 / 919,
    alt: 'Digital banner and digital poster deployed in a bank branch, with ready-to-use templates and content updates in seconds',
  },
  {
    title: 'Digital Poster for Convenience Store',
    tagline: 'New Prices Today. Not Days Later.',
    image: convenienceImg,
    aspect: 3000 / 1248,
    alt: 'Digital posters at a convenience store counter and aisle, with price and promo updates in seconds',
  },
  {
    title: 'Digital Poster for Supermarket',
    tagline: 'New Prices Today. Not Days Later.',
    image: supermarketImg,
    aspect: 2992 / 1237,
    alt: 'Digital posters above supermarket shelves and on an aisle end display',
  },
]

export const DigitalBannerPage: React.FC = () => (
  <div className="relative w-full h-full pb-safe bg-white text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">
    <BackHeader to="/solutions/retail-signage" label="Back to Retail & Digital Signage Solutions" />

    {sections.map((section, index) => (
      <section key={section.title} className="w-full shrink-0 px-5 py-10 sm:px-10">
        <div
          className={`mx-auto flex w-full max-w-[1024px] flex-col items-center gap-10 ${index === 0 ? 'animate-fade-in' : ''}`}
        >
          <div className="flex flex-col items-center gap-4 text-center">
            {index === 0 ? (
              <h1 className="font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl">
                {section.title}
              </h1>
            ) : (
              <h2 className="font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl">
                {section.title}
              </h2>
            )}
            <p className="max-w-[730px] font-['Lato'] text-2xl italic leading-8 text-black">{section.tagline}</p>
            {index === 0 && <PriceTag price="Rp 5,000/ day" className="mt-2" />}
          </div>

          <img
            src={section.image}
            alt={section.alt}
            style={{ aspectRatio: section.aspect }}
            className="block h-auto w-full select-none object-cover pointer-events-none"
          />
        </div>
      </section>
    ))}
  </div>
)

export default DigitalBannerPage
