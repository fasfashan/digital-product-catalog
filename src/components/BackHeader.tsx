import React from 'react'
import { useNavigate } from 'react-router-dom'

interface BackHeaderProps {
  to: string
  label: string
}

// Sticky light header with a pill "back" button, used on product detail pages
export const BackHeader: React.FC<BackHeaderProps> = ({ to, label }) => {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/70 px-5 py-3 sm:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center">
        <button
          onClick={() => navigate(to)}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-4 py-2 font-['Lato'] text-sm font-medium text-slate-700 shadow-xs transition-all duration-200 hover:bg-white active:scale-95"
        >
          <svg className="h-4 w-4 text-slate-600" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{label}</span>
        </button>
      </div>
    </header>
  )
}

export default BackHeader
