import React from 'react'
import { useNavigate } from 'react-router-dom'
import cdmLeftBenefitsImg from '../assets/cdm-hero-automation.webp'
import cdmUsecase1Img from '../assets/cdm-usecase1-hub.png'
import cdmUsecase2Img from '../assets/cdm-usecase2-payment.png'
import cashPoolingNetworkImg from '../assets/cdm-cash-pooling-network.png'
import benefitsGrowthImg from '../assets/cdm-benefits-growth.png'

const bankBenefits = [
  {
    lead: 'More',
    highlight: 'cash',
    description:
      'Get low-cost source of fund by exclusively capturing daily retailer deposits in real-time.',
  },
  {
    lead: 'More',
    highlight: 'profitability',
    description:
      'More competitive lending rates, improved interest spread, and increased fee-based income.',
  },
  {
    lead: 'More',
    highlight: 'customer',
    description: 'Acquire and retain customers with a differentiated service.',
  },
  {
    lead: 'Lower',
    highlight: 'cost',
    description:
      'Pool and automate cash deposit processes across customers’ locations nationwide.',
  },
  {
    lead: 'Wider',
    highlight: 'reach',
    description:
      'Serve customers and retailers in areas where branch access is limited without opening new branches.',
  },
]

export const MultiDenomCDMPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="relative h-full w-full overflow-y-auto overflow-x-hidden bg-[#eef2f4] text-slate-900 pb-safe">
      <header className="sticky top-0 z-30 w-full border-b border-slate-200/70 bg-[#eef2f4]/90 px-5 py-3 backdrop-blur-md sm:px-10">
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

      <main>
        <section className="w-full bg-[#fbfcfc] px-5 py-14 sm:px-10 sm:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 sm:gap-10">
            <h1 className="w-full max-w-[878px] text-center font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0c72ba] sm:text-4xl">
              Multi-denom Cash Deposit Machine
            </h1>

            <div className="grid w-full grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
              <img
                src={cdmLeftBenefitsImg}
                alt="Enabling secure, efficient, real-time cash deposit automation"
                className="block h-auto w-full select-none object-contain"
              />

              <div className="flex w-full flex-col items-center gap-8 sm:gap-10">
                <img
                  src={cdmUsecase1Img}
                  alt="Multi-denomination CDM deployment at hubs and retailers"
                  className="block h-auto w-full select-none object-contain"
                />
                <img
                  src={cdmUsecase2Img}
                  alt="Self-service cash payment compared with manual processing"
                  className="block h-auto w-full select-none object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#eef2f4] px-5 py-14 sm:px-10 sm:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-8 sm:gap-10">
            <h2 className="max-w-[730px] text-center font-['Lato'] text-2xl font-semibold leading-tight tracking-[-0.5px] text-[#0c72ba] sm:text-3xl sm:leading-10 lg:text-4xl">
              Banks can expand their cash deposit network without opening new branches.
              <br />
              <span className="text-black">Cash pooling points can be deployed at:</span>
            </h2>
            <img
              src={cashPoolingNetworkImg}
              alt="Cash pooling points serving courier services, gas stations, shopping centers, retail, distributors, and chain companies"
              className="block h-auto w-full select-none object-contain"
            />
          </div>
        </section>

        <section className="w-full bg-[#00263e] px-5 py-14 text-white sm:px-10 sm:py-16 lg:py-20">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 sm:gap-10">
            <h2 className="max-w-[730px] text-center font-['Lato'] text-2xl font-semibold leading-8 tracking-[-0.5px] sm:text-3xl sm:leading-10 lg:text-4xl">
              Benefits of Multi-Denom CDM for Banks
            </h2>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
              {bankBenefits.map((benefit, index) => (
                <article
                  key={benefit.highlight}
                  className={`rounded-lg border border-[#d1d5dc] bg-white p-4 text-slate-900 shadow-sm ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
                >
                  <h3 className="font-['Lato'] text-lg font-semibold leading-7 tracking-normal text-black">
                    {benefit.lead}{' '}
                    <span className="text-[#0071bb]">{benefit.highlight}</span>
                  </h3>
                  <p className="mt-2 font-['Lato'] text-base leading-6 text-[#535862] sm:text-lg sm:leading-7">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>

            <img
              src={benefitsGrowthImg}
              alt="Customer retention, acquisition, revenue, and profitability grow together"
              className="block w-full select-none rounded-lg object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default MultiDenomCDMPage
