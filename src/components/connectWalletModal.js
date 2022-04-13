import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import metaMask from '../assets/images/MetaMaskFox.svg'
import coinBase from '../assets/images/coinbase.svg'
import walletConnects from '../assets/images/walletconnect.png'
import trustWallet from '../assets/images/trustwallet.png'
import closeIcon from '../assets/images/closeicon.svg'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { toast } from 'react-toastify'

const ConnectWalletModal = (props) => {
  // console.log('props',props)
  const url = process.env.REACT_APP_ALCHEMY_URL
  console.log('url', url)
  const web3 = new Web3(new Web3.providers.HttpProvider(url))
  console.log('web3', web3)
  const { setAccount, setBalance } = props.actions

  // const { activate, account, library, chainId } = useWeb3React();
  // const [network, setNetwork] = useState('0x61');

  // useEffect(()=>{
  //   if(window.ethereum?.chainId){
  //     if(window.ethereum.chainId !== "0x3" && window.ethereum.chainId !== "0x61"){
  //       alert('Please choose Ropsten Network in your wallet header')
  //     }
  //   }
  // },[network])

  const connectMetaMaskWalletOnClick = async () => {
    if (window.ethereum !== undefined) {
      let address
      try {
        address = await window.ethereum.enable()

        localStorage.setItem('account', address)
        setAccount(await address[0])
      } catch (error) {
        toast.error('Please sign-in to MetaMask', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
      // console.log({address})
      if (address && address.length > 0) {
        const balance = await web3.eth.getBalance(address[0])
        const ethBalance = web3.utils.fromWei(balance, 'ether')
        setBalance(ethBalance)
        props.onHide()
      }
    } else {
      try {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
      } catch (error) {
        console.log('abbc')
        toast.error('Please install MetaMask', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        console.log(error)
      }
    }
  }

  // const connectToCoinBase = async () => {
  //   const walletlink = new WalletLinkConnector({
  //     url: url,
  //     appName: "passphrase",
  //     supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001],
  //   });
  //   try {
  //     await activate(walletlink);
  //   } catch (ex) {
  //     // console.log(ex);
  //   }
  // };

  // const connectToWalletConnect = async () => {
  //   const walletconnect = new WalletConnectConnector({
  //     rpc: {
  //       1: url,
  //     },
  //     qrcode: true,
  //     pollingInterval: 12000,
  //   });
  //   try {
  //     await activate(walletconnect);
  //   } catch (ex) {
  //     // console.log(ex);
  //   }
  // };

  // const getBalance = async (account) => {
  //   const balance = await web3.eth.getBalance(account);
  //   const ethBalance = web3.utils.fromWei(balance, "ether");
  //   setBalance(ethBalance);
  //   if (balance) {
  //     props.onHide();
  //   }
  // };

  // useEffect(() => {
  //   if (!!account && !!library) {
  //     localStorage.setItem("account", account);
  //     getBalance(account);
  //   }
  // }, [account, library, chainId]);

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="bg-black border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t relative">
              <h3 className="text-2xl font=semibold text-white">
                Connect Your Wallet
              </h3>
              <button
                className="absolute -top-7 right-0 bg-transparent border-0 text-black float-right flex items-center justify-center focus:outline-none"
                onClick={props.onHide}
              >
                <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="flex flex-col">
                <div
                  className="rounded-md border-2 border-orange-400 px-4 py-2 flex items-center justify-between mb-4 cursor-pointer"
                  onClick={() => connectMetaMaskWalletOnClick()}
                >
                  <h2 className="font-bold text-base text-orange-400">
                    Metamask
                  </h2>
                  <img src={metaMask} alt="metamask" />
                </div>
                <div
                  className="rounded-md border-2 border-orange-400 px-4 py-2 flex items-center justify-between mb-4 cursor-pointer"
                  // onClick={() => connectToCoinBase()}
                >
                  <h2 className="font-bold text-base text-orange-400">
                    Coinbase
                  </h2>
                  <img src={coinBase} alt="coinbase" />
                </div>
                <div
                  className="rounded-md border-2 border-orange-400 px-4 py-2 flex items-center justify-between mb-4 cursor-pointer"
                  // onClick={() => connectToWalletConnect()}
                >
                  <h2 className="font-bold text-base text-orange-400">
                    WalletConnect
                  </h2>
                  <img src={walletConnects} alt="walletConnects" />
                </div>
                <div className="rounded-md border-2 border-orange-400 px-4 py-2 flex items-center justify-between mb-4 cursor-pointer">
                  <h2 className="font-bold text-base text-orange-400">
                    Trust Wallet
                  </h2>
                  <img src={trustWallet} alt="trustWallet" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="Connect-Modal"
        onHide={props.onHide}
        {...props}
        size="lg"
        animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <span className="closeButton" onClick={props.onHide}>
          <img src={closeIcon} alt="" />
        </span>

        <div>
          <h4>Connect your wallet</h4>
          <div className="button-section">
            <button
              className="button"
              onClick={() => connectMetaMaskWalletOnClick()}
            >
              Metamask
              <span>
                <img src={metaMask} alt="" />
              </span>
            </button>
            <button className="button" onClick={() => connectToCoinBase()}>
              Coinbase
              <span>
                <img src={coinBase} alt="" />
              </span>
            </button>
            <button className="button" onClick={() => connectToWalletConnect()}>
              WalletConnect
              <span>
                <img src={walletConnects} alt="" />
              </span>
            </button>
            <button className="button">
              Trust Wallet
              <span>
                <img src={trustWallet} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default ConnectWalletModal
