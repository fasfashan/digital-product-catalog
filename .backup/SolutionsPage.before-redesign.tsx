import React from 'react'
import { useNavigate } from 'react-router-dom'
import bankingImg from '../assets/banking-solution.png'
import cashManagementImg from '../assets/cash-management.png'
import retailSignageImg from '../assets/retail-signage.png'

interface SolutionSection {
  title: string
  items: string[]
}

interface SolutionCardData {
  id: string
  title: string
  image: string
  sections: SolutionSection[]
}

const solutionsData: SolutionCardData[] = [
  {
    id: 'banking',
    title: 'Banking Solutions',
    image: bankingImg,
    sections: [
      {
        title: 'Self-service Banking',
        items: [
          'Self-service Digital CS Kiosk',
          'Tablet Solutions for Service Preparation Area',
        ],
      },
      {
        title: 'Branch Equipment',
        items: [
          'Robotic Monitor Arm (360° Rotation)',
        ],
      },
    ],
  },
  {
    id: 'cash-management',
    title: 'Cash Management Solutions',
    image: cashManagementImg,
    sections: [
      {
        title: 'Cash Deposit Solutions',
        items: [
          'Multi-denomination CDM (6,000 to 25,000 notes)',
        ],
      },
      {
        title: 'Cash Processing Machine',
        items: [
          'Multicurrency Money Counting Machine with Counterfeit Detection',
        ],
      },
    ],
  },
  {
    id: 'retail-signage',
    title: 'Retail & Digital Signage Solutions',
    image: retailSignageImg,
    sections: [
      {
        title: 'Digital Signage Solutions',
        items: [
          'Digital Menu Board',
          'Digital Banner',
          'Digital Poster',
          'LCD Price Tags',
        ],
      },
      {
        title: 'Self-service Solutions',
        items: [
          'Self-service Ordering Kiosk',
          'Self-service Price Checker',
        ],
      },
      {
        title: 'Robot Greeter & Assistant',
        items: [],
      },
    ],
  },
]

export const SolutionsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-full min-h-screen bg-[#eef2f4] text-slate-900 flex flex-col select-none overflow-y-auto py-10">

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col items-center justify-center px-6 pb-10 pt-2 gap-8 max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white active:scale-95 text-slate-700 font-['Lato'] font-medium text-sm rounded-full border border-slate-300/80 shadow-xs transition-all duration-200 cursor-pointer"
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
          <span>Back to Home</span>
        </button>
        {/* Page Title with Entrance Animation */}
        <h1 className="font-['Lato'] font-semibold text-black text-center tracking-[-0.8px] leading-tight text-3xl sm:text-4xl landscape:text-[44px] landscape:lg:text-[48px] portrait:text-[38px] max-w-[760px] animate-fade-in-up">
          Selected Products &amp; Solutions from PT Murni
        </h1>

        {/* Cards Grid: 3 columns on landscape, 2 columns + 1 on portrait */}
        <div className="w-full max-w-[1040px] mt-8 sm:mt-10 landscape:mt-8 portrait:mt-10 grid gap-6 landscape:grid-cols-3 portrait:grid-cols-1 sm:portrait:grid-cols-2">
          {solutionsData.map((card, index) => {
            const delayClass =
              index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'
            const portraitSpanClass =
              index === 2
                ? 'sm:portrait:col-span-2 sm:portrait:max-w-md sm:portrait:mx-auto sm:portrait:w-full'
                : ''

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (card.id === 'banking') {
                    navigate('/solutions/banking')
                  } else if (card.id === 'cash-management') {
                    navigate('/solutions/cash-management')
                  } else if (card.id === 'retail-signage') {
                    navigate('/solutions/retail-signage')
                  }
                }}
                className={`bg-white border border-[#d1d5dc] rounded-[30px] overflow-hidden flex flex-col shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer animate-fade-in-up ${delayClass} ${portraitSpanClass}`}
              >
                {/* Card Top Image */}
                <div className="relative w-full h-[220px] landscape:h-[240px] portrait:h-[240px] overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
                  {/* Category Title with Gradient */}
                  <h2 className="font-['Lato'] font-semibold text-[18px] leading-[28px] bg-clip-text text-transparent bg-gradient-to-r from-[#0c72ba] to-[#00b0f0]">
                    {card.title}
                  </h2>

                  {/* Feature Sections */}
                  <div className="flex flex-col gap-3.5 flex-1">
                    {card.sections.map((section, sIdx) => (
                      <div key={sIdx} className="flex flex-col gap-1.5">
                        <h3 className="font-['Lato'] font-medium text-[15px] leading-[22px] text-black">
                          {section.title}
                        </h3>
                        {section.items.length > 0 && (
                          <ul className="flex flex-col gap-1.5">
                            {section.items.map((item, iIdx) => (
                              <li
                                key={iIdx}
                                className="flex items-start gap-2 text-sm leading-[20px] text-[#525252]"
                              >
                                <svg
                                  className="w-5 h-5 shrink-0 text-[#0071BB] mt-0.5"
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
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default SolutionsPage
