import React from 'react'

interface SolutionItemButtonProps {
  label: string
  onClick?: () => void
}

// Tappable list row used inside solution cards (label + chevron circle)
export const SolutionItemButton: React.FC<SolutionItemButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-[6px] bg-[#f3f7fa] py-2.5 pl-4 pr-3 text-left transition-all duration-200 hover:bg-[#e6f1f8] active:scale-[0.98] active:bg-[#d6e8f4] cursor-pointer"
  >
    <span className="font-['Lato'] text-[16px] leading-[24px] text-[#525252] group-hover:text-black">
      {label}
    </span>
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#0071bb] shadow-xs transition-transform duration-200 group-hover:translate-x-0.5">
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.5 15L12.5 10L7.5 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </button>
)

export default SolutionItemButton
