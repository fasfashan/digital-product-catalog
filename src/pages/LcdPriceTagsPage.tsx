import React from 'react'
import supermarketImg from '../assets/lcd-price-tags-supermarket.webp'
import freshMarketImg from '../assets/lcd-price-tags-fresh-market.webp'
import retailImg from '../assets/lcd-price-tags-retail.webp'
import fashionImg from '../assets/lcd-price-tags-fashion.webp'
import pharmacyImg from '../assets/lcd-price-tags-pharmacy.webp'
import famiSuperVideo from '../assets/lcd-price-tags-famisuper-tomang.mp4'
import { BackHeader } from '../components/BackHeader'
import { KioskVideo } from '../components/KioskVideo'

interface LcdSection {
  title: string
  image: string
  aspect: number
  alt: string
  // The first three graphics leave blank space top-left for the heading to sit on (landscape only)
  overlayHeading: boolean
}

const sections: LcdSection[] = [
  {
    title: 'LCD Price Tags for Supermarket',
    image: supermarketImg,
    aspect: 3042 / 1668,
    alt: 'Hanging, pole-mounted, and desk-mounted LCD price tags in a supermarket',
    overlayHeading: true,
  },
  {
    title: 'LCD Price Tags for Fresh Market',
    image: freshMarketImg,
    aspect: 3042 / 1668,
    alt: 'Hanging, pole-mounted, and desk-mounted LCD price tags in a fresh market',
    overlayHeading: true,
  },
  {
    title: 'LCD Price Tags for Retail',
    image: retailImg,
    aspect: 3042 / 1668,
    alt: 'LCD price tags for apparel and department stores, shoe stores, furniture stores, and electronic stores',
    overlayHeading: true,
  },
  {
    title: 'LCD Price Tags for High-end Fashion Store',
    image: fashionImg,
    aspect: 3042 / 1180,
    alt: 'LCD price tags for jewelry stores, beauty and cosmetic stores, and designer bag stores',
    overlayHeading: false,
  },
  {
    title: 'LCD Price Tags for Pharmacy & Clinic',
    image: pharmacyImg,
    aspect: 3040 / 1242,
    alt: 'LCD price tags in a pharmacy and a beauty clinic',
    overlayHeading: false,
  },
]

// `breakBeforeHighlight` mirrors the two-line tagline in the overlay layout
const Tagline: React.FC<{ breakBeforeHighlight?: boolean }> = ({ breakBeforeHighlight }) => (
  <p className="font-['Lato'] text-2xl italic leading-8 text-black">
    Digitalize Your Shelf and Showcase to{' '}
    {breakBeforeHighlight && <br className="hidden landscape:inline" />}
    <span className="text-[#0071bb]">Boost Sales and Profit</span>
  </p>
)

export const LcdPriceTagsPage: React.FC = () => (
  <div className="relative w-full h-full pb-safe bg-white text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">
    <BackHeader to="/solutions/retail-signage" label="Back to Retail & Digital Signage Solutions" />

    {sections.map((section, index) => {
      const HeadingTag = index === 0 ? 'h1' : 'h2'

      return (
        <section key={section.title} className="w-full shrink-0 px-5 py-10 sm:px-10">
          <div
            className={`relative mx-auto flex w-full max-w-[1024px] flex-col items-center gap-10 ${
              index === 0 ? 'animate-fade-in' : ''
            } ${section.overlayHeading ? 'landscape:gap-0' : ''}`}
          >
            <div
              className={`flex flex-col gap-4 ${
                section.overlayHeading
                  ? 'w-full items-start text-left landscape:absolute landscape:left-[13px] landscape:top-0 landscape:z-10 landscape:w-[480px]'
                  : 'max-w-[503px] items-center text-center'
              }`}
            >
              <HeadingTag
                className={`font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl ${
                  section.overlayHeading ? 'landscape:whitespace-nowrap' : ''
                }`}
              >
                {section.title}
              </HeadingTag>
              {section.overlayHeading ? (
                <Tagline breakBeforeHighlight />
              ) : (
                <div className="sm:whitespace-nowrap">
                  <Tagline />
                </div>
              )}
            </div>

            <img
              src={section.image}
              alt={section.alt}
              style={{ aspectRatio: section.aspect }}
              className="block h-auto w-full select-none object-cover pointer-events-none"
            />
          </div>
        </section>
      )
    })}

    {/* Opening day footage */}
    <section className="w-full shrink-0 px-5 pt-10 pb-16 sm:px-10">
      <div className="mx-auto w-full max-w-[1024px]">
        <KioskVideo src={famiSuperVideo} />
      </div>
    </section>
  </div>
)

export default LcdPriceTagsPage
