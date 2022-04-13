import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function CalculatorPage() {
  return (
    <div className="flex flex-col lg:ml-36 ml-0 lg:mr-60 mr-0 mb-20">
      <p className="uppercase font-bold font-blender text-3xl text-white mb-12 lg:mt-20 mt-11 lg:ml-0 ml-6 hidden lg:block">
        calculator
      </p>
      <p className="uppercase font-bold font-blender text-3xl text-white mb-12 lg:mt-20 mt-11 lg:ml-0 ml-6 lg:hidden block ">
        Potential Return
      </p>
      <div className="swello-calculator lg:mx-0 mx-3 lg:mb-0 mb-32">
        <div className="lg:px-16 px-5 lg:pt-14 pt-10">
          <div className="lg:mb-7 mb-0 flex lg:flex-row flex-col lg:space-x-10 space-x-0">
            <div className="flex flex-col swello-input flex-1 px-4 pt-1 pb-5">
              <label className="relative text-white font-axi font-normal -top-4 left-5 text-sm">Amount of USD ($)</label>
              <input type="text" className="bg-[#161724] text-white px-3 text-base font-axi outline-none border-0" />
            </div>
            <div className="flex flex-col swello-input flex-1 px-4 pt-1 pb-5 lg:mt-0 mt-7">
              <label className="relative text-white font-axi font-normal -top-4 left-5 text-sm">APY (%)</label>
              <input type="text" className="bg-[#161724] text-white px-3 text-base font-axi outline-none border-0" />
            </div>
          </div>

          <div className="lg:mt-0 mt-7 flex lg:flex-row flex-col lg:space-x-10 space-x-0">
            <div className="flex flex-col swello-input flex-1 px-4 pt-1 pb-5">
              <label className="relative text-white font-axi font-normal -top-4 left-5 text-sm">Swello purchase price</label>
              <input type="text" className="bg-[#161724] text-white px-3 text-base font-axi outline-none border-0" />
            </div>
            <div className="flex flex-col swello-input flex-1 px-4 pt-1 pb-5 lg:mt-0 mt-7">
              <label className="relative text-white font-axi font-normal -top-4 left-5 text-sm">Swello sell price</label>
              <input type="text" className="bg-[#161724] text-white px-3 text-base font-axi outline-none border-0" />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:mt-16 mt-10 lg:px-16 px-5 swello-slider">
          <p className="lg:w-2/12 w-full font-axi font-normal text-sm text-white">Number of days: 30</p>
          <div className="lg:w-10/12 w-full lg:mt-0 mt-4">
            <Slider railStyle={{background: '#373743'}} trackStyle={{background: '#FA55FF'}} />
          </div>
        </div>

        <div className="flex flex-col lg:mt-16 mt-11 lg:px-16 px-5">
            <div className="flex items-center justify-between text-[#8A8B91] mb-7">
              <p className="font-axi font-normal text-sm">Initial investment</p>
              <p className="font-axi font-normal text-sm">$0.00</p>
            </div>
            <div className="flex items-center justify-between text-[#8A8B91] mb-9">
              <p className="font-axi font-normal text-sm">Estimated rewards</p>
              <p className="font-axi font-normal text-sm">$0.00</p>
            </div>
            <div className="flex items-center justify-between text-white mb-14">
              <p className="font-blender font-bold text-2xl">Potential return</p>
              <p className="font-blender font-bold text-2xl">$0.00 USD</p>
            </div>
        </div>
      </div>
    </div>
  )
}
