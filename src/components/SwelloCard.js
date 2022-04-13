import React from 'react'
import CardUp from '../assets/images/card-up.svg'
import CardDown from '../assets/images/card-down.svg'
import CardBg from '../assets/images/card-bg.svg'
import WhiteLogo from '../assets/images/white-logo.svg'
export default function SwelloCard() {
  return (
    <div className="relative lg:w-76 w-full lg:h-54 h-full lg:order-2 order-2">
      <div className="z-50 lg:pt-4 md:pt-16 pt-8 absolute lg:px-4 md:px-8 px-5 w-full h-full flex flex-col justify-between text-white">
        <div>
          <p className='lg:text-base md:text-2xl text-base font-normal font-axi'>Balance</p>
          <p className='md:text-4xl text-3xl font-bold font-blender'>$14,980</p>
        </div>
        <div className="flex items-center justify-between lg:pb-3 md:pb-16 pb-6 font-normal lg:text-sm md:text-base text-sm font-axi">
          <p>Swello
            <br />
            109,890
          </p>
          <img src={WhiteLogo} />
        </div>
      </div>
      <img src={CardUp} className="absolute mx-auto lg:w-auto w-full" />
      <img src={CardDown} className="absolute mx-auto bottom-0 lg:-mb-1 -mb-0.5  lg:w-auto w-full" />
      <img src={CardBg} className="lg:w-auto w-full" />
    </div>
  )
}
