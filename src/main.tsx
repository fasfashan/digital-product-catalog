import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'
import cashProcessingVideo from './assets/cash-processing-asys-al-series.mp4'
import lcdPriceTagsVideo from './assets/lcd-price-tags-famisuper-tomang.mp4'
import robotGreeterVideo from './assets/robot-greeter-pudu.mp4'

// Register Service Worker for offline PWA functionality
registerSW({ immediate: true })

// Download videos into the 'videos' cache on first online launch so they play offline at the booth
const kioskVideos = [cashProcessingVideo, lcdPriceTagsVideo, robotGreeterVideo]

const warmVideoCache = async () => {
  if (!('caches' in window)) return
  const cache = await caches.open('videos')
  for (const url of kioskVideos) {
    try {
      if (!(await cache.match(url))) await cache.add(url)
    } catch {
      // Offline or storage full: the video still streams normally when online
    }
  }
}
warmVideoCache()

// Kiosk mode: prevent long-press context menu
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
