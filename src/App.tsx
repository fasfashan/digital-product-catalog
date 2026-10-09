import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SolutionsPage } from './pages/SolutionsPage'
import { BankingSolutionsPage } from './pages/BankingSolutionsPage'
import { SmartCSPage } from './pages/SmartCSPage'
import { TabletSolutionsPage } from './pages/TabletSolutionsPage'
import { RoboticMonitorArmPage } from './pages/RoboticMonitorArmPage'
import { CashManagementSolutionsPage } from './pages/CashManagementSolutionsPage'
import { MultiDenomCDMPage } from './pages/MultiDenomCDMPage'
import { CashProcessingMachinePage } from './pages/CashProcessingMachinePage'
import { RetailSignageSolutionsPage } from './pages/RetailSignageSolutionsPage'
import { DigitalMenuBoardPage } from './pages/DigitalMenuBoardPage'
import { DigitalBannerPage } from './pages/DigitalBannerPage'
import { LcdPriceTagsPage } from './pages/LcdPriceTagsPage'
import { PriceCheckerPage } from './pages/PriceCheckerPage'
import { OrderingKioskPage } from './pages/OrderingKioskPage'
import { RobotGreeterPage } from './pages/RobotGreeterPage'

export function App() {
  return (
    <HashRouter>
      <div className="w-full h-full min-h-screen bg-slate-50 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/banking" element={<BankingSolutionsPage />} />
          <Route path="/solutions/banking/smartcs" element={<SmartCSPage />} />
          <Route path="/solutions/banking/tablet-solutions" element={<TabletSolutionsPage />} />
          <Route path="/solutions/banking/robotic-arm" element={<RoboticMonitorArmPage />} />
          <Route path="/solutions/cash-management" element={<CashManagementSolutionsPage />} />
          <Route path="/solutions/cash-management/multi-denom-cdm" element={<MultiDenomCDMPage />} />
          <Route path="/solutions/cash-management/cash-processing-machine" element={<CashProcessingMachinePage />} />
          <Route path="/solutions/retail-signage" element={<RetailSignageSolutionsPage />} />
          <Route path="/solutions/retail-signage/digital-menu-board" element={<DigitalMenuBoardPage />} />
          <Route path="/solutions/retail-signage/digital-banner" element={<DigitalBannerPage />} />
          <Route path="/solutions/retail-signage/lcd-price-tags" element={<LcdPriceTagsPage />} />
          <Route path="/solutions/retail-signage/price-checker" element={<PriceCheckerPage />} />
          <Route path="/solutions/retail-signage/ordering-kiosk" element={<OrderingKioskPage />} />
          <Route path="/solutions/retail-signage/robot-greeter" element={<RobotGreeterPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
