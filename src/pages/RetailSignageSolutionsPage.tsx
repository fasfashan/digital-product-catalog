import React from 'react'
import { useNavigate } from 'react-router-dom'
import retailBg from '../assets/banking-bg.png'
import digitalSignageImg from '../assets/retail-digital-signage.webp'
import selfServiceImg from '../assets/retail-self-service-cover.webp'
import robotGreeterImg from '../assets/retail-robot-greeter.webp'
import { SolutionItemButton } from '../components/SolutionItemButton'

interface RetailItem {
  label: string
  path?: string
}

interface RetailCategory {
  title: string
  image: string
  items: RetailItem[]
}

const retailCategories: RetailCategory[] = [
  {
    title: 'Digital Signage Solutions',
    image: digitalSignageImg,
    items: [
      { label: 'Digital Menu Board', path: '/solutions/retail-signage/digital-menu-board' },
      { label: 'Digital Banner & Poster', path: '/solutions/retail-signage/digital-banner' },
      { label: 'LCD Price Tags', path: '/solutions/retail-signage/lcd-price-tags' },
    ],
  },
  {
    title: 'Self Service Solutions',
    image: selfServiceImg,
    items: [
      { label: 'Self-service Ordering Kiosk', path: '/solutions/retail-signage/ordering-kiosk' },
      { label: 'Self-service Price Checker', path: '/solutions/retail-signage/price-checker' },
    ],
  },
  {
    title: 'Robot Greeter & Assistant',
    image: robotGreeterImg,
    items: [{ label: 'Interactive Service Robot', path: '/solutions/retail-signage/robot-greeter' }],
  },
]

export const RetailSignageSolutionsPage: React.FC = () => {
  const navigate = useNavigate()

  const go = (path?: string) => {
    if (path) navigate(path)
  }

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col select-none overflow-y-auto overflow-x-hidden">
      {/* Background with tech network graphic */}
      <img
        src={retailBg}
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
          Retail &amp; Digital Signage Solutions
        </h1>

        {/* Cards: 3 columns in landscape; 2 columns + 1 wide card in portrait */}
        <div className="grid w-full max-w-[1024px] gap-6 items-stretch landscape:grid-cols-3 portrait:grid-cols-1 sm:portrait:grid-cols-2">
          {retailCategories.map((category, index) => {
            const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'
            const wideInPortrait = index === 2

            return (
              <article
                key={category.title}
                className={`bg-white rounded-[8px] p-[24px] flex flex-col gap-[16px] shadow-xl animate-fade-in-up ${delayClass} ${
                  wideInPortrait ? 'sm:portrait:col-span-2 sm:portrait:flex-row sm:portrait:gap-[24px]' : ''
                }`}
              >
                <div
                  className={`relative aspect-[1856/1186] w-full shrink-0 overflow-hidden rounded-[8px] ${
                    wideInPortrait ? 'sm:portrait:w-1/2' : ''
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div
                  className={`flex flex-col gap-[12px] ${
                    wideInPortrait ? 'sm:portrait:flex-1 sm:portrait:justify-center' : ''
                  }`}
                >
                  <h2 className="font-['Lato'] font-medium text-[20px] leading-[30px] text-black">
                    {category.title}
                  </h2>

                  <div className="w-full h-px bg-[#ACACAC] shrink-0" />

                  <ul className="flex flex-col gap-[8px]">
                    {category.items.map((item) => (
                      <li key={item.label}>
                        <SolutionItemButton label={item.label} onClick={() => go(item.path)} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default RetailSignageSolutionsPage
