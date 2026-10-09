import React from 'react'
import { useNavigate } from 'react-router-dom'
import roboticArmBg from '../assets/robotic-arm-bg.png'
import roboticArmContentImg from '../assets/robotic-arm-content.png'
import successStoryImg from '../assets/robotic-arm-success-story.webp'
import ergonomicSolutionsImg from '../assets/robotic-arm-ergonomic-solutions.webp'
import { ShowcaseSection } from '../components/ShowcaseSection'

export const RoboticMonitorArmPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-full pb-safe bg-[#eef2f4] text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">
      {/* Background decoration texture */}
      <img
        src={roboticArmBg}
        alt=""
        className="fixed inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
      />

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
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 py-8 sm:py-12 flex flex-col items-center justify-center gap-8 sm:gap-10 animate-fade-in">
        {/* Title */}
        <h1 className="font-['Lato'] font-semibold text-[#0c72ba] text-2xl sm:text-3xl md:text-[36px] tracking-[-0.8px] leading-tight text-center max-w-4xl">
          Robotic Monitor Arm with 360° Rotation
        </h1>

        {/* Content Graphic */}
        <div className="w-full flex justify-center">
          <img
            src={roboticArmContentImg}
            alt="Robotic Monitor Arm with 360° Rotation"
            className="w-full max-w-6xl h-auto block select-none pointer-events-none drop-shadow-sm"
          />
        </div>
      </main>

      <ShowcaseSection
        title="Selected Success Story of Robotic Monitor Arm"
        image={successStoryImg}
        imageAlt="2,000+ robotic monitor arms implemented for in-branch customer service, and wall-mounted tablet arms supporting digital service experience"
        imageAspect={2867 / 1068}
        background="none"
      />

      <ShowcaseSection
        title="Other Ergonomic Solutions from Us"
        image={ergonomicSolutionsImg}
        imageAlt="Adjustable monitor mount, laptop cart, computer cart, standing desk converter, mobile learning and teaching station, mobile multimedia center, flexible workstation, and laptop/tablet charging and management system"
        imageAspect={3064 / 1358}
        background="white"
      />
    </div>
  )
}

export default RoboticMonitorArmPage
