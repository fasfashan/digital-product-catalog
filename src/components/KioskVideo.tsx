import React from 'react'

interface KioskVideoProps {
  src: string
  className?: string
}

// Silent autoplay loop with no controls; visitors can't tap, scrub or pop it out.
// Offline playback relies on the 'videos' cache warmed in main.tsx, so add new videos there too.
export const KioskVideo: React.FC<KioskVideoProps> = ({ src, className = '' }) => (
  <video
    src={src}
    autoPlay
    muted
    loop
    playsInline
    disablePictureInPicture
    controlsList="nodownload nofullscreen noremoteplayback"
    className={`block h-auto w-full rounded-[12px] bg-black shadow-xl pointer-events-none select-none ${className}`}
  />
)

export default KioskVideo
