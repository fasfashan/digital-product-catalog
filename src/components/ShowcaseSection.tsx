import React from 'react'
import showcaseBg from '../assets/robotic-arm-bg.png'

interface ShowcaseSectionProps {
  title: React.ReactNode
  // Small line shown above the title
  eyebrow?: string
  // Small line shown below the title
  subtitle?: string
  image: string
  imageAlt: string
  // Natural width / height of the image, e.g. 2982 / 1312
  imageAspect: number
  // 'image' = light gradient graphic, 'white' = solid white, 'none' = let the page background show
  background?: 'image' | 'white' | 'none'
}

// Section with a centered heading and one full-width content graphic
export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title,
  eyebrow,
  subtitle,
  image,
  imageAlt,
  imageAspect,
  background = 'image',
}) => (
  <section
    className={`relative z-10 w-full shrink-0 px-6 sm:px-10 py-14 sm:py-16 lg:py-[100px] flex flex-col items-center justify-center gap-8 sm:gap-10 overflow-hidden ${
      background === 'white' ? 'bg-white' : ''
    }`}
  >
    {background === 'image' && (
      <img
        src={showcaseBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
    )}
    <div className="relative w-full max-w-[878px] flex flex-col gap-3 text-center">
      {eyebrow && (
        <p className="font-['Lato'] text-black text-lg sm:text-2xl leading-8">{eyebrow}</p>
      )}
      <h2 className="font-['Lato'] font-semibold text-[#0071bb] text-2xl sm:text-3xl md:text-[36px] leading-tight md:leading-10 tracking-[-0.8px]">
        {title}
      </h2>
      {subtitle && (
        <p className="font-['Lato'] text-black text-lg sm:text-2xl leading-8">{subtitle}</p>
      )}
    </div>
    <img
      src={image}
      alt={imageAlt}
      style={{ aspectRatio: imageAspect }}
      className="relative block w-full max-w-6xl h-auto object-cover select-none pointer-events-none"
    />
  </section>
)

export default ShowcaseSection
