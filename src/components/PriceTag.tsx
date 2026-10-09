import React from 'react'

interface PriceTagProps {
  price: string
  label?: string
  className?: string
}

// Orange "Start from" pricing pill used across the digital signage product pages
export const PriceTag: React.FC<PriceTagProps> = ({ price, label = 'Start from', className = '' }) => (
  <div
    className={`inline-flex flex-col items-start rounded-full bg-linear-to-br from-[#ff5f00] via-[#ff8a00] to-[#ffc93c] px-8 py-2.5 text-white shadow-[0_10px_30px_-8px_rgba(255,106,0,0.65)] [text-shadow:0_1px_2px_rgba(120,40,0,0.35)] ${className}`}
  >
    <span className="font-['Lato'] text-[18px] font-medium italic leading-6">{label}</span>
    <span className="font-['Lato'] text-[28px] font-bold leading-8 tracking-[-0.3px]">{price}</span>
  </div>
)

export default PriceTag
