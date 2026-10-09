import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroMachineImg from '../assets/smartcs-hero-machine.png'
import modelsCardsImg from '../assets/smartcs-models-cards.png'
import adFeaturesImg from '../assets/smartcs-ad-features.png'
import adKioskImg from '../assets/smartcs-ad-kiosk.png'
import successStoryImg from '../assets/smartcs-success-story.webp'
import { ShowcaseSection } from '../components/ShowcaseSection'

export const SmartCSPage: React.FC = () => {
  const navigate = useNavigate()

  const checklistItems = [
    'Account Opening',
    'Card Issuance & Replacement',
    'Passbook & Account Statement Printing',
    'Mobile Banking Registration',
    'And many more....',
  ]

  return (
    <div className="relative w-full h-full min-h-screen bg-[#eef2f4] text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">

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

      {/* SECTION 1: HERO */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 sm:pt-8 pb-0 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-6 animate-fade-in">
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6 sm:gap-7 pb-8 lg:pb-12 pt-2">
          {/* Logo & Headline */}
          <div className="flex flex-col gap-2">
            <h1 className="font-['Lato'] font-semibold text-4xl sm:text-[40px] tracking-[-0.8px] leading-tight">
              <span className="text-[#0c72ba]">SMART</span>
              <span className="text-[#f8981c]">CS</span>
            </h1>
            <p className="font-['Lato'] font-medium text-[#0c72ba] text-2xl sm:text-[30px] leading-[36px] tracking-[-0.4px]">
              Self-service Digital CS Kiosk for 24/7
            </p>
          </div>

          {/* Value Proposition (Italic) */}
          <div className="font-['Lato'] text-[#0c72ba] text-2xl  leading-[34px] sm:leading-[38px] tracking-[-0.4px]">
            <p className="font-bold italic">
              Move Customer Service Beyond the Counter <br>

              </br>
              <span className="font-medium italic mt-1">
                to Reduce Workload &amp; Number of CS Staff
              </span>
            </p>

          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-2.5">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-[#0071BB]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-['Lato'] font-medium text-lg text-[#525252]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Machine Graphic - wider and grounded flush to the bottom */}
        <div className="w-full lg:w-[55%] flex items-end justify-center lg:justify-end self-end">
          <img
            src={heroMachineImg}
            alt="SMARTCS Kiosk Machine"
            className="w-full max-w-[720px] lg:max-w-none h-auto object-contain object-bottom select-none pointer-events-none block"
          />
        </div>
      </section>

      {/* SECTION 2: FIT EVERY BRANCH MODEL */}
      <section className="relative w-full py-12 sm:py-16 px-6 sm:px-10 flex flex-col items-center justify-center bg-white border-y border-slate-200/60">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-5">
          <h2 className="font-['Lato'] font-semibold text-2xl sm:text-3xl md:text-[36px] tracking-[-0.8px] leading-tight">
            <span className="text-[#0c72ba]">SMART</span>
            <span className="text-[#f8981c]">CS </span>
            <span className="text-[#0071bb]">is Designed to Fit Every Branch Model</span>
          </h2>
          <p className="font-['Lato'] font-normal text-slate-700 text-base sm:text-xl md:text-[22px] max-w-3xl leading-relaxed">
            Our solution adapts to your branch size, traffic, and customer service needs.
          </p>

          {/* 4 Cards Graphic - clean full width, no overflow-hidden, no clipping */}
          <div className="w-full mt-6 sm:mt-10 flex justify-center">
            <img
              src={modelsCardsImg}
              alt="SMARTCS Branch Models: 4-Card, 5-Card, 6-Card, 8-Card"
              className="w-full max-w-6xl h-auto block select-none"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: MORE THAN A KIOSK */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 pt-12 sm:pt-16 pb-0 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-[48%] flex flex-col gap-6 sm:gap-7 pb-12 sm:pb-16">
          <h2 className="font-['Lato'] font-semibold text-2xl sm:text-3xl md:text-[36px] tracking-[-0.8px] leading-tight">
            <span className="text-[#0c72ba]">SMART</span>
            <span className="text-[#f8981c]">CS </span>
            <span className="text-black">is More than A Kiosk</span>
          </h2>
          <p className="font-['Lato'] font-medium italic text-xl sm:text-2xl md:text-[28px] lg:text-[30px] text-[#0c72ba] leading-snug tracking-[-0.4px]">
            Generate More Revenue &amp; Boost Profit with the 24/7 Self-service Kiosk
          </p>

          {/* Ad Features Graphic */}
          <div className="w-full max-w-[540px] pt-2">
            <img
              src={adFeaturesImg}
              alt="Monetizable Screen & Revenue-generating Ad Space"
              className="w-full h-auto object-contain select-none rounded-2xl shadow-sm block"
            />
          </div>
        </div>

        {/* Right Kiosk Ad Diagram Graphic - grounded flush to the bottom */}
        <div className="w-full lg:w-[52%] flex items-end justify-center lg:justify-end self-end">
          <img
            src={adKioskImg}
            alt="SMARTCS Kiosk Ad Screen with callouts"
            className="w-full max-w-[620px] lg:max-w-none h-auto object-contain object-bottom select-none block"
          />
        </div>
      </section>

      {/* SECTION 4: LATEST SUCCESS STORY */}
      <ShowcaseSection
        title={
          <span className="text-[#0c72ba]">
            Our Latest Success Story for SMART<span className="text-[#f8981c]">CS</span>
          </span>
        }
        image={successStoryImg}
        imageAlt="Over 110 units of CS Digital implemented at BTN, with on-going prospect projects at BNI, Mandiri, BSI, BCA, Bank Sinarmas, AGI, Bank Jakarta, and Bank Nagari"
        imageAspect={2982 / 1312}
      />

    </div>
  )
}

export default SmartCSPage
