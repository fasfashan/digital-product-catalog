import React from 'react'
import contentImg from '../assets/robot-greeter-content.webp'
import puduRobotVideo from '../assets/robot-greeter-pudu.mp4'
import { BackHeader } from '../components/BackHeader'
import { KioskVideo } from '../components/KioskVideo'

export const RobotGreeterPage: React.FC = () => (
  <div className="relative w-full h-full min-h-screen bg-white text-slate-900 flex flex-col select-none overflow-y-auto overflow-x-hidden">
    <BackHeader to="/solutions/retail-signage" label="Back to Retail & Digital Signage Solutions" />

    <section className="w-full shrink-0 px-5 py-10 sm:px-10">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-10 animate-fade-in">
        <h1 className="text-center font-['Lato'] text-3xl font-semibold leading-10 tracking-[-0.8px] text-[#0071bb] sm:text-4xl">
          Interactive Robot Greeter &amp; Assistant
        </h1>
        <img
          src={contentImg}
          alt="Interactive service robots welcome, greet, and guide customers, and deliver meals, snacks, refreshments, or documents"
          className="block aspect-[2720/1626] h-auto w-full select-none object-cover pointer-events-none"
        />
      </div>
    </section>

    <section className="w-full shrink-0 px-5 pt-0 pb-16 sm:px-10">
      <div className="mx-auto w-full max-w-[1024px]">
        <KioskVideo src={puduRobotVideo} />
      </div>
    </section>
  </div>
)

export default RobotGreeterPage
