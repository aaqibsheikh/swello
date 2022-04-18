import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import WalletConnectProvider from '@walletconnect/web3-provider'
import { useEthers, ChainId } from '@usedapp/core'
import { BSC_NODE } from './common/environmentVariables'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import WalletPage from './pages/WalletPage'
import DashboardPage from './pages/DashboardPage'
import CalculatorPage from './pages/CalculatorPage'
import MobileMenu from './components/MobileMenu'

function App() {

  const { activateBrowserWallet, account, activate, deactivate, chainId } = useEthers()

  useEffect(() => {
    if(ChainId.BSC !== chainId) {
      toast.error("Connect to Binance Smart Chain and refresh page", {
        position: 'bottom-right',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    const checkWalletConnectSession = async () => {
      if (window.localStorage.walletconnect) {
        const provider = new WalletConnectProvider({
          qrcode: true,
          bridge: 'https://bridge.walletconnect.org',
          rpc: {
            [ChainId.BSC]:
              'https://bsc-dataseed.binance.org/',
            // PUBLIC / PRIVATE RPC NODE URL
            // [ChainId.BSC]: `${BSC_NODE}`,
          },
          
        })
        await provider.enable()
        activate(provider)
        activateBrowserWallet()
      }
    }

    checkWalletConnectSession()
  }, [chainId])

  return (
    <>
      <ToastContainer />
      <div className="flex lg:flex-row flex-col relative main-content">
        <Sidebar />
        <div className="flex-1">
          <div className="bg-main-content w-full">
            <Header />
            <Routes>
              <Route exact path="/" element={<WalletPage />} />
              <Route exact path="/dashboard" element={<DashboardPage />} />
              <Route exact path="/calculator" element={<CalculatorPage />} />
            </Routes>
          </div>
          <MobileMenu />
        </div>
      </div>
    </>
  )
}

export default App
