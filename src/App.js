import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import Web3 from 'web3'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
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
  // const web3 = new Web3(
  //   Web3.givenProvider ||
  //     'http://localhost:8545' ||
  //     'https://mainnet.infura.io/v3/53e9da5cab374c38ad516647df016ec7',
  // )

  const [account, setAccount] = useState(getAccount())
  const [balance, setBalance] = useState()

  useEffect(() => {
    if (account) {
      localStorage.setItem('account', account)
    }
  }, [account])

  return (
    <div className="flex md:flex-row flex-col relative">
      <Sidebar />
      <div className="bg-main-content flex-1">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Dashboard
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
  )
}

export default App
