import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import ConnectWalletModal from '../components/connectWalletModal'

export default function Header(props) {
  const { balance, setAccount, setBalance, account } = props
  const [showModal, setShowModal] = useState(false)
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false) 

  function disconnectWallet() {
    setBalance(undefined)
    setAccount(false)
    localStorage.removeItem('account')
  }

  function displayAccount() {
    if (localStorage.getItem('account') && balance !== undefined) {
      return (
        <div>
          <span className="pointer">{account}</span>

          <span> | {balance} ETH </span>

          {/* <span className="pointer" onClick={() => {
            setBalance(undefined);
            localStorage.removeItem('account');
          }
          }>
            SIGN OUT
          </span> */}
        </div>
      )
    } else {
      // return !localStorage.getItem('account')? <div
      //   className="navbar-login cursor-pointer"
      //   onClick={() => setShowConnectWallet(true)}
      // >
      //   Connect Wallet
      // </div>: null
    }
  }

  return (
    <div className="lg:flex lg:justify-end hidden">
      {!localStorage.getItem('account') ? (
          <button onClick={() => setShowModal(true)} className="btn-wallet-connect mt-10 mr-10 font-axi font-bold text-white text-base bg-[#FA55FF] rounded-[27px]">Connect Wallet</button>
        ) : (
          <button onClick={() => disconnectWallet()} className="btn-wallet-connect mt-10 mr-10 font-axi font-bold text-white text-base bg-[#FA55FF] rounded-[27px]">Disconnect Wallet</button>
        )}

      {showModal && (
        <ConnectWalletModal
          actions={{
            setAccount,
            setBalance,
          }}
          // //  setAccount={setAccount}
          // // setBalance={setBalance}
          // show={ConnectWalletModal}
          onHide={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
