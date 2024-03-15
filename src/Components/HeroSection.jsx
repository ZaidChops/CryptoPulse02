import React from "react";
import Cryptoitem from "./Cryptoitem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allCoindata } from "../service/allCoindata";
import { addCoin, nameRoute } from "../redux/cryptoSlice";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const dispatch = useDispatch();
  const allCoin = useSelector((state) => state.cryptoSlice.allCoin);
  const route = useSelector((state) => state.cryptoSlice.route);

  const getdata = async () => {
    const data = await allCoindata();
    // console.log(data);
    dispatch(addCoin(data));
  };

  const setRoute = (obj) => {
    dispatch(nameRoute(obj.id));
  };

  useEffect(() => {
    if (allCoin === null) getdata();
    // if (allCoin.length === 0) {
    // }
  }, []);
  return (
    <div id="hero" className="text-white bg-slate-800 px-5 py-16">
      <h1 className="text-5xl text-center text-gray-50 font-semibold">
        Top tranding CRYPTO coin <br />
        market price ,caps and many more about crypto
      </h1>
      <ul className="flex items-center flex-col gap-2 py-10">
        <li className="w-full flex items-center px-[10%]">
          <div className="flex w-[50%]">
            <h3 className="font-bold items-end">#Rank</h3>
          </div>

          <div className="flex w-[20%]">
            <h3 className="font-bold items-end">#Name</h3>
          </div>
          <div className="flex w-[30%] items-center">
            <h3 className="font-bold items-end">₹Price</h3>
          </div>
        </li>
        {allCoin ? (
          allCoin.map((obj) => (
            <Link
              to={`/detailes/id:_${route}`}
              key={obj.id}
              className="w-full"
              onMouseOver={() => setRoute(obj)}
            >
              <Cryptoitem obj={obj} />
            </Link>
          ))
        ) : (
          <h1>error</h1>
        )}
      </ul>
      {/* <Linebar /> */}
    </div>
  );
};

export default HeroSection;
