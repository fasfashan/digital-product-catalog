import React from 'react'
import { useNavigate } from 'react-router-dom'
import tabletSolutionsImg from '../assets/tablet-solutions-content.png'
import microTouchContentImg from '../assets/tablet-microtouch-content.webp'
import eFormContentImg from '../assets/tablet-eform-content.webp'
import { ShowcaseSection } from '../components/ShowcaseSection'

export const TabletSolutionsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-full pb-safe bg-[#eef2f4] text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-30 w-full bg-[#eef2f4]/85 backdrop-blur-md border-b border-slate-200/70 px-6 sm:px-10 py-3.5 flex items-center justify-between">
        <button
          onClick={() => navigate('/solutions/banking')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white active:scale-95 text-slate-700 font-['Lato'] font-medium text-sm rounded-full border border-slate-300/80 shadow-xs transition-all duration-200 cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-slate-600"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Banking Solutions</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 py-8 sm:py-12 flex flex-col items-center justify-center gap-8 sm:gap-10 animate-fade-in">
        {/* Title */}
        <h1 className="font-['Lato'] font-semibold text-[#0c72ba] text-2xl sm:text-3xl md:text-[36px] tracking-[-0.8px] leading-tight text-center max-w-4xl">
          Tablet Solutions for Service Preparation Area
        </h1>

        {/* Content Graphic */}
        <div className="w-full flex justify-center">
          <img
            src={tabletSolutionsImg}
            alt="Tablet Solutions for Service Preparation Area"
            className="w-full max-w-6xl h-auto block select-none pointer-events-none drop-shadow-sm"
          />
        </div>
      </main>

      <ShowcaseSection
        title="Powered by MicroTouch"
        subtitle="15.6″ Android All-in-One Touch Computer"
        image={microTouchContentImg}
        imageAlt="MicroTouch MACH M1-156IC-AA2: 15.6-inch Android all-in-one touch computer specifications"
        imageAspect={3176 / 1666}
      />

      <ShowcaseSection
        eyebrow="Powered by Our"
        title="e-Form Solutions"
        image={eFormContentImg}
        imageAlt="e-Form solution: fill e-forms at location using a tablet or from a mobile phone, supporting single and multiple services with no paperwork at the counter"
        imageAspect={2928 / 1503}
      />

    </div>
  )
}

export default TabletSolutionsPage
