import React from 'react'
import { useNavigate } from 'react-router-dom'
import cashManagementBg from '../assets/cash-management-bg.png'
import cashDepositImg from '../assets/cash-deposit-cover.webp'
import cashProcessingImg from '../assets/cash-processing-machine.png'
import { SolutionItemButton } from '../components/SolutionItemButton'

const cashManagementCategories = [
  {
    title: 'Cash Deposit Solutions',
    image: cashDepositImg,
    items: [
      {
        label: 'Multi-denomination CDM (6,000 to 25,000 notes)',
        path: '/solutions/cash-management/multi-denom-cdm',
      },
    ],
  },
  {
    title: 'Cash Processing Machine',
    image: cashProcessingImg,
    items: [
      {
        label: 'Multicurrency Money Counting Machine with Counterfeit Detection',
        path: '/solutions/cash-management/cash-processing-machine',
      },
    ],
  },
]

export const CashManagementSolutionsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col select-none overflow-y-auto overflow-x-hidden">
      {/* Background with tech network graphic */}
      <img
        src={cashManagementBg}
        alt=""
        className="fixed inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

      {/* Top Header & Navigation */}
      <header className="relative z-10 w-full px-6 sm:px-10 pt-6 pb-2 flex items-center justify-between max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/solutions')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md active:scale-95 text-white font-['Lato'] font-medium text-sm rounded-full border border-white/30 shadow-xs transition-all duration-200 cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-white"
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
          <span>Back to Solutions</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 w-full flex flex-col items-center justify-center px-6 py-6 sm:py-10 max-w-7xl mx-auto gap-8 sm:gap-10">
        {/* Page Title */}
        <h1 className="font-['Lato'] font-medium text-white text-center text-3xl sm:text-4xl md:text-[48px] leading-tight tracking-[-0.8px] animate-fade-in-up">
          Cash Management Solutions
        </h1>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-[80px] items-stretch justify-center w-full max-w-5xl mx-auto animate-fade-in-up delay-100">
          {cashManagementCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-[8px] p-[24px] w-full max-w-[409px] mx-auto md:mx-0 flex flex-col gap-[12px] shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Card Image */}
              <div className="aspect-[1856/1186] relative w-full overflow-hidden rounded-[8px] shrink-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h2 className="font-['Lato'] font-medium text-[20px] leading-[30px] text-black">
                {category.title}
              </h2>

              {/* Divider */}
              <div className="w-full h-px bg-[#ACACAC] shrink-0" />

              {/* Sub-solutions list */}
              <ul className="flex flex-col gap-[8px] w-full">
                {category.items.map((item) => (
                  <li key={item.label}>
                    <SolutionItemButton label={item.label} onClick={() => navigate(item.path)} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default CashManagementSolutionsPage
