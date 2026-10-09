import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Globe } from '../components/Globe'
import checkIcon from '../assets/home/check.svg'
import chevronRightIcon from '../assets/home/chevron-right.svg'
import iconYears from '../assets/home/icon-years.svg'
import iconStaff from '../assets/home/icon-staff.svg'
import iconEngineers from '../assets/home/icon-engineers.svg'
import iconServicePoints from '../assets/home/icon-service-points.svg'
import indonesiaMap from '../assets/home/indonesia-map.webp'

const differentiators = [
  {
    title: 'Trusted Partner of Central Bank of Indonesia',
    points: [
      'National Payment Clearing System (SKNBI)',
      'Automated Clearing House (ACH/ SPWD)',
      'National Risk Management System',
      'National Blacklisted System',
    ],
  },
  {
    title: 'ISO 9001:2015 Certified Company',
    points: [
      'ISO 27001 - Information Security',
      'ISO 27701 - Privacy Information Management',
      'ISO 22301 - Business Continuity Plan',
    ],
  },
  {
    title: 'End-to-end Solution Provider Company',
    points: ['Hardware', 'Software', 'Professional Services', 'Turnkey & Full-package Solutions'],
  },
  {
    title: 'Dedicated, In-house Team',
    points: [
      'Software Development',
      'System Integration',
      'Product Design & Assembly',
      'Technical & Support',
      'Service & Repair (Workshop)',
    ],
  },
]

const stats = [
  { icon: iconYears, label: '33+ Years of Organic Growth', iconClass: 'h-[32px] w-[25.2px]' },
  { icon: iconStaff, label: '700+ Staff', iconClass: 'h-[32px] w-[33.79px]' },
  { icon: iconEngineers, label: '300+ Engineers', iconClass: 'h-[32px] w-[23.81px]' },
  { icon: iconServicePoints, label: '100+ Service Points Nationwide', iconClass: 'h-[32px] w-[32.03px]' },
]

export const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-full pb-safe overflow-y-auto overflow-x-hidden bg-[#eef2f4] select-none">
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden h-[621px] landscape:h-[640px] px-10 sm:px-[80px] pt-[60px]"
        style={{
          background:
            'radial-gradient(50% 96.6% at 50% 96.6%, #00385D 0%, #002841 50%, #001725 100%)',
        }}
      >
        {/* Globe sits low so only its upper half shows, as in the design */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[363px] w-[526px] landscape:top-[340px] landscape:w-[640px]">
          <Globe size={640} />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center gap-10 text-center animate-fade-in-up">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-['Lato'] font-semibold text-white text-[48px] leading-[48px] tracking-[-0.8px] landscape:text-[56px] landscape:leading-[60px]">
              Your Trusted &amp; Reliable Solution Provider
            </h1>
            <p className="max-w-[601px] font-['Lato'] text-[16px] leading-[24px] text-[#cdd5df] landscape:max-w-[680px] landscape:text-[18px] landscape:leading-[28px]">
              For over 34 years, PT Murni has been a trusted ICT and digital solutions provider for
              thousands of businesses across Indonesia, Australia, and the Asia Pacific—helping them
              grow and stay ahead of the competition.
            </p>
          </div>
          <button
            onClick={() => navigate('/solutions')}
            className="group inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#0071bb] px-4 py-2.5 font-['Lato'] text-[16px] font-medium leading-[24px] text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-all duration-200 hover:bg-[#005e9e] active:scale-95 cursor-pointer"
          >
            <span>Our Solutions</span>
            <img
              src={chevronRightIcon}
              alt=""
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="w-full px-4 pt-[60px] pb-[60px] landscape:px-10">
        <div className="mx-auto flex w-full max-w-[768px] flex-col items-center gap-[60px] landscape:max-w-[1200px]">
          <div className="flex max-w-[550px] flex-col items-center gap-[14px] text-center landscape:max-w-[640px]">
            <h2 className="font-['Lato'] font-medium text-black text-[48px] leading-[48px] tracking-[-2.16px]">
              What Makes Us Different
            </h2>
            <p className="font-['Lato'] text-[18px] leading-[28px] text-[#4b5565]">
              We are a group of problem-solver and forward-thinker with proven track record as a
              reliable &amp; reputable solution provider.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4">
            {/* Differentiator cards: 2x2 in portrait, 4 across in landscape */}
            <div className="grid w-full grid-cols-2 gap-4 landscape:grid-cols-4">
              {differentiators.map((item) => (
                <div key={item.title} className="flex rounded-[12px] bg-white p-2">
                  <div className="flex w-full flex-col gap-4 rounded-[6px] bg-[#f8fafc] p-4">
                    <h3 className="font-['Lato'] font-medium text-[16px] leading-[24px] text-black">
                      {item.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <img src={checkIcon} alt="" className="h-[18px] w-[18px] shrink-0" />
                          <span className="font-['Lato'] text-[14px] leading-[20px] text-[#4b5565]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Company stats */}
            <div className="flex rounded-[12px] bg-white p-2">
              <div className="grid w-full grid-cols-2 gap-6 rounded-[6px] bg-[#f8fafc] p-4 landscape:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <img src={stat.icon} alt="" className={`shrink-0 ${stat.iconClass}`} />
                    <span className="font-['Lato'] font-medium text-[16px] leading-[24px] text-black">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service network map */}
          <img
            src={indonesiaMap}
            alt="PT Murni service points across Indonesia"
            className="block aspect-[768/326] h-auto w-full max-w-[768px] landscape:max-w-[960px]"
          />
        </div>
      </section>
    </div>
  )
}
