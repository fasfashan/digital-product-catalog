import React from 'react'
import { useNavigate } from 'react-router-dom'
import cashProcessingContentImg from '../assets/cash-processing-content.webp'
import cashProcessingVideo from '../assets/cash-processing-asys-al-series.mp4'
import { KioskVideo } from '../components/KioskVideo'

export const CashProcessingMachinePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-white text-slate-900">
      <header className="sticky top-0 z-30 w-full border-b border-slate-200/70 bg-white/90 px-5 py-3 backdrop-blur-md sm:px-10">
        <div className="mx-auto flex max-w-[1440px] items-center">
          <button
            onClick={() => navigate('/solutions/cash-management')}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-4 py-2 font-['Lato'] text-sm font-medium text-slate-700 shadow-xs transition-all duration-200 hover:bg-white active:scale-95"
          >
            <svg
              className="h-4 w-4 text-slate-600"
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
            <span>Back to Cash Management Solutions</span>
          </button>
        </div>
      </header>

      <main className="flex w-full flex-col items-center px-5 py-14 sm:px-10 sm:py-16 lg:py-[100px]">
        <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-10 animate-fade-in">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="w-full max-w-[730px] font-['Lato'] text-2xl font-medium leading-8 text-black">
              Asys AL-Series
            </p>
            <h1 className="font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl">
              Multicurrency Money Counting Machine
            </h1>
          </div>

          <img
            src={cashProcessingContentImg}
            alt="Asys AL-Series: counting, sorting, support up to 50 currencies, auto recognition, counterfeit detection, and serial number reading"
            className="block aspect-[2840/1414] h-auto w-full select-none object-cover pointer-events-none"
          />

          <KioskVideo src={cashProcessingVideo} />
        </div>
      </main>
    </div>
  )
}

export default CashProcessingMachinePage
