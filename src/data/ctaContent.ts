// Per-product copy and QR for the closing CTA (source: "CTA_IKF 2026_Product Catalog on Tablet" PPT).
// Edit copy here; any text left out falls back to the defaults in CtaSection.
import qrSmartcs from '../assets/cta/qr-smartcs.png'
import qrRoboticArm from '../assets/cta/qr-robotic-arm.png'
import qrMultiDenomCdm from '../assets/cta/qr-multi-denom-cdm.png'
import qrCashProcessing from '../assets/cta/qr-cash-processing.png'
import qrDigitalMenuBoard from '../assets/cta/qr-digital-menu-board.png'
import qrDigitalBanner from '../assets/cta/qr-digital-banner.png'
import qrLcdPriceTags from '../assets/cta/qr-lcd-price-tags.png'
import qrRobotGreeter from '../assets/cta/qr-robot-greeter.png'
// TODO: PPT uses the same placeholder QR for Price Checker and Ordering Kiosk; swap in the final codes
import qrPriceCheckerPending from '../assets/cta/qr-price-checker-ordering-kiosk-PENDING.png'

export interface CtaContent {
  qrImage: string
  qrAlt: string
  scanTitle?: string
  scanCaption?: string
  contactLead?: string
  contactPrompt?: string
}

export const ctaContent = {
  smartcs: {
    qrImage: qrSmartcs,
    qrAlt: 'QR code to the SMARTCS page on murni.co.id',
  },
  // PPT slide 2 reuses the SMARTCS QR
  tabletSolutions: {
    qrImage: qrSmartcs,
    qrAlt: 'QR code to the Tablet Solutions page on murni.co.id',
  },
  roboticArm: {
    qrImage: qrRoboticArm,
    qrAlt: 'QR code to the Robotic Monitor Arm page on murni.co.id',
    scanCaption: 'Secure the Best Price',
    contactLead: 'For More Information,',
  },
  multiDenomCdm: {
    qrImage: qrMultiDenomCdm,
    qrAlt: 'QR code to the Multi-denom CDM page on murni.co.id',
    scanCaption: 'Secure the Best Price',
    contactLead: 'For More Information,',
  },
  cashProcessing: {
    qrImage: qrCashProcessing,
    qrAlt: 'QR code to the Multicurrency Money Counting Machine page on murni.co.id',
  },
  digitalMenuBoard: {
    qrImage: qrDigitalMenuBoard,
    qrAlt: 'QR code to the Digital Menu Board page on murni.co.id',
  },
  digitalBanner: {
    qrImage: qrDigitalBanner,
    qrAlt: 'QR code to the Digital Poster & Banner page on murni.co.id',
  },
  lcdPriceTags: {
    qrImage: qrLcdPriceTags,
    qrAlt: 'QR code to the LCD Price Tags page on murni.co.id',
  },
  priceChecker: {
    qrImage: qrPriceCheckerPending,
    qrAlt: 'QR code to the Self-service Price Checker page on murni.co.id',
  },
  orderingKiosk: {
    qrImage: qrPriceCheckerPending,
    qrAlt: 'QR code to the Self-service Ordering Kiosk page on murni.co.id',
  },
  robotGreeter: {
    qrImage: qrRobotGreeter,
    qrAlt: 'QR code to the Interactive Robot Greeter & Assistant page on murni.co.id',
  },
} satisfies Record<string, CtaContent>
