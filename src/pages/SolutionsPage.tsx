import React from 'react'
import { useNavigate } from 'react-router-dom'
import bankingImg from '../assets/banking-solution.webp'
import cashManagementImg from '../assets/cash-management.webp'
import retailSignageImg from '../assets/retail-signage.webp'

interface SolutionCategory {
  id: string
  title: string
  image: string
  path: string
  solutions: string[]
}

const solutionCategories: SolutionCategory[] = [
  {
    id: 'banking',
    title: 'Banking Solutions',
    image: bankingImg,
    path: '/solutions/banking',
    solutions: [
      'Self-service Digital CS Kiosk',
      'Tablet Solutions for Service Preparation Area',
      'Robotic Monitor Arm (360° Rotation)',
    ],
  },
  {
    id: 'cash-management',
    title: 'Cash Management Solutions',
    image: cashManagementImg,
    path: '/solutions/cash-management',
    solutions: [
      'Multi-denomination CDM (6,000 to 25,000 notes)',
      'Multicurrency Money Counting Machine with Counterfeit Detection',
    ],
  },
  {
    id: 'retail-signage',
    title: 'Retail & Digital Signage Solutions',
    image: retailSignageImg,
    path: '/solutions/retail-signage',
    solutions: [
      'Digital Menu Board',
      'Digital Banner & Poster',
      'LCD Price Tags',
      'Self-service Ordering Kiosk',
      'Self-service Price Checker',
      'Robot Greeter & Assistant',
    ],
  },
]

const delayClasses = ['delay-100', 'delay-200', 'delay-300']

export const SolutionsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div
      className="relative w-full h-full pb-safe flex flex-col select-none overflow-y-auto overflow-x-hidden text-white"
      style={{
        background: 'radial-gradient(130% 90% at 50% 20%, #00385D 0%, #002841 40%, #001725 75%, #00101A 100%)',
      }}
    >
      {/* Ambient glows (clipped so they never add scroll) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[#0071bb]/25 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 h-[360px] w-[520px] rounded-full bg-[#00b0f0]/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 pt-6 flex items-center">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md active:scale-95 text-white font-['Lato'] font-medium text-sm rounded-full border border-white/20 transition-all duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </header>

      <main className="relative z-10 flex-1 w-full max-w-[1200px] mx-auto px-6 sm:px-10 pt-4 flex flex-col gap-6 landscape:gap-6 portrait:gap-5">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-2 animate-fade-in-up">
          <span className="font-['Lato'] text-[13px] font-bold uppercase tracking-[0.2em] text-[#5cc8f5]">
            Explore Our Solutions
          </span>
          <h1 className="font-['Lato'] font-semibold tracking-[-0.8px] leading-tight text-3xl text-balance landscape:text-[40px] portrait:text-[36px] max-w-[900px]">
            Selected Products &amp; Solutions from PT Murni
          </h1>
        </div>

        {/* Category cards: 3 columns with photo backdrop in landscape;
            stacked horizontal cards (photo left, text right) in portrait */}
        <div className="flex-1 grid gap-5 landscape:grid-cols-3 landscape:min-h-[420px] portrait:grid-cols-1 portrait:grid-rows-[1fr_1fr_1.3fr]">
          {solutionCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => navigate(category.path)}
              className={`group relative overflow-hidden rounded-[20px] border border-white/15 bg-[#001725] text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-[#5cc8f5]/60 active:scale-[0.98] cursor-pointer animate-fade-in-up portrait:flex portrait:flex-row ${delayClasses[index]}`}
            >
              {/* Photo with slow zoom so the idle kiosk screen stays alive */}
              <div className="absolute inset-0 overflow-hidden portrait:relative portrait:inset-auto portrait:w-[42%] portrait:shrink-0">
                <img
                  src={category.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
                  style={{ animationDelay: `${index * -6}s` }}
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-[#001725]/70 to-[#001725]/0 portrait:hidden" />

              {/* Content: in landscape its own gradient backdrop grows with the list so text stays readable */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 pt-20 bg-linear-to-t from-[#001725] from-70% to-[#001725]/0 portrait:static portrait:flex-1 portrait:justify-center portrait:bg-none portrait:p-5">
                <h2 className="font-['Lato'] text-[26px] font-semibold leading-[1.15] tracking-[-0.4px]">
                  {category.title}
                </h2>
                <ul className="grid gap-x-6 gap-y-2 portrait:gap-y-1.5">
                  {category.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="flex items-start gap-2 font-['Lato'] text-[16px] leading-[22px] text-white/90"
                    >
                      <svg
                        className="mt-[3px] h-4 w-4 shrink-0 text-[#5cc8f5]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-1 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-[#0071bb] pl-5 pr-2 font-['Lato'] text-[15px] font-bold shadow-[0_8px_20px_-6px_rgba(0,113,187,0.8)] transition-colors duration-200 group-hover:bg-[#0083d6]">
                  Explore
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-0.5">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.16667 10H15.8333M10 15.8333L15.8333 10L10 4.16667"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Tap hint for walk-up visitors */}
        <div className="flex items-center justify-center gap-3 animate-fade-in delay-400">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5cc8f5] opacity-70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#5cc8f5]" />
          </span>
          <span className="font-['Lato'] text-[15px] text-white/70">Tap a solution to explore</span>
        </div>
      </main>
    </div>
  )
}

export default SolutionsPage
