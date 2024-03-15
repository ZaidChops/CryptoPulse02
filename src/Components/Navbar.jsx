import React from "react";
import logo from "../Assets/logo.png";

import { Link } from "react-router-dom";
import { oneCoinData } from "../service/allCoindata";

const Navbar = () => {
  let coin=""
  const hit=()=>{
    // console.log(coin);
    oneCoinData(coin)
  }

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-cyan-500 to-pink-600 w-full p-1 sm:px-3 md:px-3 py-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="h-[25px] rounded-full w-[25px]" />
        <Link to="/">
          <h3 className="text-white text-lg font-bold md:text-2xl lg:text-4xl">
            Coin-info App
          </h3>
        </Link>
      </div>
      <div className="flex justify-between w-auto h-auto gap-0 items-center md:gap-3">
        <div className="flex items-center rounded-sm h-auto w-auto p-2 justify-between gap-1 md:gap-3">
          <input
            className="bg-transparent p-2 rounded-md text-white bg-blue-200 w-[67px] h-[30px] sm:w-32 lg:h-10"
            type="text"
            placeholder="Search coin"
            onChange={(e)=>coin=e.target.value}
            // value=""
          />
          <button className="text-white rounded-md border-2 w-[70px] h-[30px] lg:h-10" onClick={hit}>
            Search
          </button>
        </div>
        <button className="text-white border-2 rounded-md w-[70px] h-[30px] lg:h-10">
          <Link to="/login">Log in</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
