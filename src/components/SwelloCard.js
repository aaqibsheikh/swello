import React from 'react'
import CardUp from '../assets/images/card-up.svg'
import CardDown from '../assets/images/card-down.svg'
import CardBg from '../assets/images/card-bg.svg'
import WhiteLogo from '../assets/images/white-logo.svg'
export default function SwelloCard() {
  return (
    <div className="relative md:w-76 w-full md:h-54 h-full md:order-2 order-2">
      <div className="z-50 mt-8 absolute px-4 w-full flex flex-col text-white">
        <div>
          <p className='text-base font-normal'>Balance</p>
          <p className='text-4xl font-black'>$14,980</p>
        </div>
        <div className="flex items-center justify-between md:mt-14 mt-24 text-sm font-normal">
          <p>Swello
            <br />
            109,890
          </p>
          <img src={WhiteLogo} />
        </div>
      </div>
      <img src={CardUp} className="absolute mx-auto md:w-auto w-full" />
      <img src={CardDown} className="absolute mx-auto bottom-0 md:-mb-1 -mb-0.5  md:w-auto w-full" />
      <img src={CardBg} className="md:w-auto w-full" />
    </div>
  )
}
