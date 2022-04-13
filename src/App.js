import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Web3 from 'web3'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import WalletPage from './pages/WalletPage'
import DashboardPage from './pages/DashboardPage'
import CalculatorPage from './pages/CalculatorPage'
import MobileMenu from './components/MobileMenu'

const getAccount = () => {
  const account = localStorage.getItem('account')
  if (account) {
    return localStorage.getItem('account')
  } else {
    return false
  }
}

function App() {
  const url = process.env.REACT_APP_ALCHEMY_URL;
  const web3 = new Web3(new Web3.providers.HttpProvider(url));

  const [account, setAccount] = useState(getAccount())
  const [balance, setBalance] = useState()

  // window.ethereum.on('accountsChanged', async function (accounts) {
  //   localStorage.setItem("account", accounts[0]);
    
  //   setAccount(accounts[0]);
  //   if (accounts !== null) {
  //     const balance = await web3.eth.getBalance(accounts[0]);
  //     const ethBalance = web3.utils.fromWei(balance, "ether");
      
  //     setBalance(ethBalance);
  //   }
  // })

    const connectWalletOnLoad = async () => {
    const balance = await web3.eth.getBalance(account);
    const ethBalance = web3.utils.fromWei(balance, "ether");
    setBalance(Number(ethBalance).toFixed(4));
  };

  useEffect(() => {
    if (account) {
      localStorage.setItem('account', account)
      connectWalletOnLoad();
    }
  }, [account])

  return (
    <>
      <ToastContainer />
      <div className="flex lg:flex-row flex-col relative main-content">
        <Sidebar />
        <div className="flex-1">
          <div className="bg-main-content w-full">
            <Header 
              balance={balance}
              account={account}
              setAccount={setAccount}
              setBalance={setBalance}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <WalletPage
                    balance={balance}
                    account={account}
                    setAccount={setAccount}
                    setBalance={setBalance}
                  />
                }
              />
              <Route
                exact
                path="/dashboard"
                element={
                  <DashboardPage
                    balance={balance}
                    account={account}
                    setAccount={setAccount}
                    setBalance={setBalance}
                  />
                }
              />
              <Route
                exact
                path="/calculator"
                element={
                  <CalculatorPage
                    balance={balance}
                    account={account}
                    setAccount={setAccount}
                    setBalance={setBalance}
                  />
                }
              />
            </Routes>
          </div>
          <MobileMenu />
        
        </div>
      </div>
    </>
  )
}

export default App
