import React from 'react'
import salesHotlineImg from '../assets/cta/sales-hotline.png'
import type { CtaContent } from '../data/ctaContent'

// Closing call-to-action shared by every product detail page: scan the QR or call sales.
// Per-product copy and QR live in src/data/ctaContent.ts.
export const CtaSection: React.FC<CtaContent> = ({
  qrImage,
  qrAlt,
  scanTitle = 'SCAN HERE',
  scanCaption = 'For More Information',
  contactLead = 'For Inquiry,',
  contactPrompt = 'Please Contact Us at:',
}) => (
  <section className="relative z-10 w-full shrink-0 px-5 py-14 sm:px-10">
    <div className="mx-auto grid w-full max-w-[1024px] overflow-hidden rounded-[20px] bg-white shadow-xl sm:grid-cols-2">
      {/* Scan side */}
      <div className="flex flex-col items-center justify-center gap-6 bg-linear-to-br from-[#002060] via-[#1D4ED8] to-[#00CCFF] px-8 py-10 text-center">
        <div className="flex flex-col gap-1">
          <p className="font-['Lato'] text-[32px] font-black leading-10 tracking-[0.5px] text-[#00FFFF]">{scanTitle}</p>
          <p className="font-['Lato'] text-2xl italic leading-8 text-white">{scanCaption}</p>
        </div>
        <div className="rounded-[16px] bg-white p-3 shadow-lg">
          <img src={qrImage} alt={qrAlt} className="block h-[220px] w-[220px] select-none pointer-events-none" />
        </div>
      </div>

      {/* Contact side */}
      <div className="flex flex-col items-center justify-center gap-6 bg-[#f3f7fa] px-8 py-10 text-center">
        <div className="flex flex-col gap-1 text-[#002060]">
          <p className="font-['Lato'] text-[28px] font-bold leading-9">{contactLead}</p>
          <p className="font-['Lato'] text-2xl italic leading-8">{contactPrompt}</p>
        </div>
        <img
          src={salesHotlineImg}
          alt="Sales hotline 1500 913"
          className="block h-auto w-full max-w-[300px] select-none pointer-events-none"
        />
      </div>
    </div>
  </section>
)

export default CtaSection
