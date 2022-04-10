import React from 'react'

import Rewards from '../assets/images/rewards.svg'
import Owned from '../assets/images/owned.svg'
import Total from '../assets/images/total.svg'
import Trade from '../assets/images/trade.svg'
import Earnings from '../assets/images/earnings.svg'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SwelloCard from '../components/SwelloCard'
import DashboardChart from '../components/DashboardChart'
import LogoIcon from '../assets/images/logo-icon.svg'

export default function Dashboard() {
  return (
    <div className="flex md:flex-row flex-col md:space-x-10 space-x-0">
      <div className="md:pt-24 pt-4 flex flex-col md:pl-20 px-4">
        <p className="uppercase text-white mb-3 text-2xl font-bold font-blender md:order-1 order-1">Your wallet</p>
        <SwelloCard />

        <p className="md:order-3 order-4 uppercase  font-blender font-bold text-xl text-white mb-2.5 md:hidden block mt-10">Next Reward</p>
        <div className="md:order-3 order-4 px-3.5 py-4 md:mt-16 mt-0 flex items-center justify-between space-x-4 bg-[#161724] rounded-xl">
          <p>
            <span className="font-blender text-xl font-bold text-[#8A8A98] mb-1">14:36</span>
            <br />
            <span className="font-axi font-normal text-xs text-[#D0D0DA]">min</span>
          </p>
          <div className="flex-1">
            <div className="swello-progress-bar" style={{width: '45%'}}></div>
          </div>
          <p className="font-blender font-bold text-xl text-white">
            $282 / day
          </p>
        </div>

        <p className="md:order-3 order-4 uppercase  font-blender font-bold text-xl text-white mb-2.5 md:hidden block mt-7">Lifetime Gains</p>
        <div className="md:order-4 order-5 flex items-center justify-between space-x-8 md:mt-10 mt-0">
          <div className="bg-[#161724] rounded-[10px] px-[25px] py-[16px]">
            <div className="w-16 h-16 mb-3 progress-1">
              <CircularProgressbarWithChildren
                value={30}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "butt",
                  trailColor: "#05050F"
                })}
                strokeWidth={9}
              >
                <img src={Rewards} alt="" className="" />
              </CircularProgressbarWithChildren>
            </div>
            <p className="text-xs font-normal font-axi text-[#D0D0DA] text-center">Reward</p>
            <p className="font-blender font-bold text-xl text-white text-center">$3,031</p>
          </div>
          <div className="bg-[#161724] rounded-[10px] px-[25px] py-[16px]">
            <div className="w-16 h-16 mb-3 progress-2">
              <CircularProgressbarWithChildren
                value={30}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "butt",
                  trailColor: "#05050F"
                })}
                strokeWidth={9}
              >
                <img src={Owned} alt="" className="" />
              </CircularProgressbarWithChildren>
            </div>
            <p className="text-xs font-normal font-axi text-[#D0D0DA] text-center">Owned</p>
            <p className="font-blender font-bold text-xl text-white text-center">$13,031</p>
          </div>
          <div className="bg-[#161724] rounded-[10px] px-[25px] py-[16px]">
            <div className="w-16 h-16 mb-3 progress-3">
              <CircularProgressbarWithChildren
                value={30}
                circleRatio={0.75}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "butt",
                  trailColor: "#05050F"
                })}
                strokeWidth={9}
              >
                <img src={Total} alt="" className="" />
              </CircularProgressbarWithChildren>
            </div>
            <p className="text-xs font-normal font-axi text-[#D0D0DA] text-center">Total</p>
            <p className="font-blender font-bold text-xl text-white text-center">$16,578</p>
          </div>
        </div>

        <div className="md:order-5 order-2 flex items-center justify-center space-x-10 md:mt-10 mt-5">
          <div>
            <div className="swello-trade mb-2.5"><img src={Trade} alt="" /></div>
            <p className="font-axi font-normal text-base text-white text-center">Trade</p>
          </div>

          <div>
            <div className="swello-trade mb-2.5"><img src={Earnings} alt="" /></div>
            <p className="font-axi font-normal text-base text-white text-center">Earnings</p>
          </div>
        </div>
      </div>


      <div className="flex-1 mr-10">
        <div className="mt-10">
          <DashboardChart className="mt-10" />
        </div>
        <div className="mt-10 bg-[#0F0F13] pt-12 md:pl-16 pl-4 md:pr-12 pr-4" style={{borderRadius: '20px 20px 0px 0px'}}>
          <hr className=" w-28 mx-auto rounded-full h-1 mb-6 md:hidden block" style={{boder: '4px solid #5B5B65'}} />

          <p className="uppercase text-xl font-bold font-blender text-[#F5F5FF]">Reward Daily History</p>
          <div className="reward-history mt-12 pb-24">
            <div className="reward-history-item flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-[#161724] rounded-[14px] p-4">
                  <img src={LogoIcon} alt="" />
                </div>
                <p>
                  <span className="font-axi font-normal text-base text-[#F5F5FF]">Swello Reward</span>
                  <br/>
                  <span className="font-axi font-normal text-sm text-[#70707C]">20.01.2021</span>
                </p>
              </div>
              <p className="font-blender font-bold text-xxl text-white">
                $248.97
              </p>
            </div>
            <hr style={{border: '1px solid #2C2C35'}} className="my-5" />

            <div className="reward-history-item flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-[#161724] rounded-[14px] p-4">
                  <img src={LogoIcon} alt="" />
                </div>
                <p>
                  <span className="font-axi font-normal text-base text-[#F5F5FF]">Swello Reward</span>
                  <br/>
                  <span className="font-axi font-normal text-sm text-[#70707C]">20.01.2021</span>
                </p>
              </div>
              <p className="font-blender font-bold text-xxl text-white">
                $248.97
              </p>
            </div>
            <hr style={{border: '1px solid #2C2C35'}} className="my-5" />

            <div className="reward-history-item flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-[#161724] rounded-[14px] p-4">
                  <img src={LogoIcon} alt="" />
                </div>
                <p>
                  <span className="font-axi font-normal text-base text-[#F5F5FF]">Swello Reward</span>
                  <br/>
                  <span className="font-axi font-normal text-sm text-[#70707C]">20.01.2021</span>
                </p>
              </div>
              <p className="font-blender font-bold text-xxl text-white">
                $248.97
              </p>
            </div>
            <hr style={{border: '1px solid #2C2C35'}} className="my-5 md:hidden block" />

          </div>
        </div>
      </div>
    </div>
  )
}
