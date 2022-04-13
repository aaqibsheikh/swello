import React from 'react'
import Icon1 from "../assets/images/icon-1.svg"
import Icon2 from "../assets/images/icon-2.svg"
import Icon3 from "../assets/images/icon-3.svg"
import Icon4 from "../assets/images/icon-4.svg"
import IconMain from "../assets/images/icon-main.svg"

import { Link } from "react-router-dom";

export default function MobileMenu() {
  return (
    <div className="flex items-center justify-evenly fixed h-24 bottom-0 bg-[#0F0F13] rounded-[15px] w-full pb-6 lg:hidden">
      <Link to="/dashboard">
        <img src={Icon1} alt="" />
      </Link>
      <Link to="/calculator" className="mr-10">
        <img src={Icon2} alt="" />
      </Link>
      <Link to="/" className='absolute'>
        <img src={IconMain} alt="" />
      </Link>
      <Link to="/" className="ml-10">
        <img src={Icon3} alt="" />
      </Link>
      <Link to="/">
        <img src={Icon4} alt="" />
      </Link>
    </div>
  )
}
