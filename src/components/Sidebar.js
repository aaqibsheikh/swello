import React from 'react'
import Logo from '../assets/images/logo.svg'
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-72 bg-swello-dark lg:relative absolute top-0 left-0 hidden lg:block">
      <div className="overflow-y-auto mt-16 ml-12 font-blender font-bold uppercase text-2xl text-[#8A8B91]">
        <Link to="/" className="flex items-center pl-2.5 mb-5">
          <img
            src={Logo}
            className="h-6 mr-3 sm:h-7"
            alt="Flowbite Logo"
          />
        </Link>
        <ul className="space-y-12 mt-20">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 rounded-lg hover:text-white"
            >
              <span className="ml-3">Wallet</span>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 rounded-lg hover:text-white"
            >
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="/calculator"
              className="flex items-center p-2 rounded-lg hover:text-white"
            >
              <span className="ml-3">Calculator</span>
            </Link>
          </li>

          <li>
            <Link
              to="/buysell"
              className="flex items-center p-2 rounded-lg hover:text-white"
            >
              <span className="ml-3">Buy / Sell </span>
            </Link>
          </li>

          <li>
            <Link
              to="/docs"
              className="flex items-center p-2 rounded-lg hover:text-white"
            >
              <span className="ml-3">Docs</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
