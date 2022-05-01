import React from 'react'
// contract methods defined
import { useTotalSupply, useGetCirculatingSupply, useGetTreasury, useGetTreasuryAndSafetyAddress, useGetTreasuryAndSafetyFund } from '../utilities/Web3/contract';
import { useGetSwelloPriceInUSD } from '../utilities/Web3/getExchangeRate';
// Images
import PinkBg from '../assets/images/pink-bg.svg'
import Union from '../assets/images/union.svg'
import Dotted from '../assets/images/dotted.svg'
import HolderIcon from '../assets/images/holders.svg'


export default function DashboardPage() {
  const { totalSupply } = useTotalSupply();
  const { circulatingSupply } = useGetCirculatingSupply();
  const { treasury } = useGetTreasury();
  const { usdtToSwello } = useGetSwelloPriceInUSD();
  const { treasuryAddress, safetyFundAddress } = useGetTreasuryAndSafetyAddress();
  console.log(`treasuryAddress: ${treasuryAddress} safetyFundAddress:${safetyFundAddress}`)
  const {treasuryFundValue, safetyFundValue } = useGetTreasuryAndSafetyFund(treasuryAddress, safetyFundAddress);
  console.log(`treasuryFundValue: ${treasuryFundValue} safetyFundValue:${safetyFundValue}`)

  console.log(`usdtToSwello: ${usdtToSwello} || totalSuppl: ${totalSupply} || CirculatingSupply: ${circulatingSupply} || Treasury: ${treasury}`)
  return (
    <div className="flex xl:flex-row flex-col xl:space-x-10 space-x-0 xl:mb-0 mb-20">
      <div className="xl:pt-24 pt-4 flex flex-col xl:pl-20 px-4 text-white">
        <p className="uppercase mb-7 text-2xl font-bold font-blender">Overview</p>
        <div>
          <span className="font-blender font-bold text-xxl">Swello Price</span>
          <br/>
          <span className="font-blender font-bold text-4xl">${usdtToSwello}</span>
          <span className="font-blender font-bold text-xxl text-[#FA55FF]">↑2.5% </span>
          <span className="font-blender font-bold text-xxl text-[#1B1E22]"> past 24hrs</span>
        </div>
        
        <div className="relative flex mt-15 mb-3">
          <img src={PinkBg} alt="" className="w-full" />
          <img src={Union} alt="" className="absolute bottom-0 right-0" />
          <div className="flex items-center justify-between absolute w-full h-full px-4 py-4">
            <p className="">
              <span className="font-axi font-normal text-sm">Swell Market Cap</span>
              <br />
              <span className="font-bold font-blender text-3xl">${ usdtToSwello * circulatingSupply }</span>
            </p>
            <p className="font-blender font-bold text-xl text-[#FA55FF]">+4.5%</p>
          </div>
        </div>

        <div className="relative flex mb-3 bg-[#161724] h-29 rounded-[10px]">
          <img src={Union} alt="" className="absolute bottom-0 right-0" />
          <div className="flex items-center justify-between absolute w-full h-full px-4 py-4">
            <p className="">
              <span className="font-axi font-normal text-sm">Swell Treasury Assets</span>
              <br />
              <span className="font-bold font-blender text-3xl">${ usdtToSwello * treasuryFundValue }</span>
            </p>
            <p className="font-blender font-bold text-xl text-[#FA55FF]">↑2.5%</p>
          </div>
        </div>

        <div className="relative flex mb-3 bg-[#161724] h-29 rounded-[10px]">
          <img src={Union} alt="" className="absolute bottom-0 right-0" />
          <div className="flex items-center justify-between absolute w-full h-full px-4 py-4">
            <p className="">
              <span className="font-axi font-normal text-sm">Swell Safety Fund</span>
              <br />
              <span className="font-bold font-blender text-3xl">${ usdtToSwello * safetyFundValue }</span>
            </p>
            <p className="font-blender font-bold text-xl text-[#FA55FF]">↑2.5%</p>
          </div>
        </div>
      </div>
      
      <div className="px-8 py-7 bg-[#161724] rounded-[6px] h-48 xl:mt-70 xl:w-1/3 w-full mb-20">
        <div className="flex items-center justify-between">
          <p className="uppercase font-blender font-bold text-3xl text-white">Next Reward</p>
          <img src={Dotted} alt="" />
        </div>
        <p className="font-axi font-normal text-white text-xl mt-2">7:37 min</p>
        <div className="flex-1 bg-black rounded-[100px]">
          <div className="swello-progress-bar rounded-[100px]" style={{width: '45%'}}></div>
        </div>
        <p className="flex items-center justify-center text-center mt-6">
          <img src={HolderIcon} alt="" className="mr-2" />
          <span className="font-axi font-normal text-xl text-white">45,321 Holders</span>
        </p>
      </div>

    </div>
  )
}
