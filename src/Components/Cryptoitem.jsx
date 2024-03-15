import React from "react";
// import { nameRoute } from "../redux/cryptoSlice";
// import { useDispatch } from "react-redux";
// import { setRoute } from "../redux/cryptoSlice";

const Item = ({ obj }) => {
  // const dispatch = useDispatch();
  return (
    <li className="w-full flex items-center px-[10%] border-b-2">
      <div className="flex w-[10%]">
        <h3 className="font-bold items-end">{obj.market_cap_rank}</h3>
      </div>
      <div className="flex w-[25%]">
        <img className="w-12 p-1 " src={obj.image} alt="logo" />
      </div>
      <div className="flex w-[25%]">
        <h3 className="font-bold items-end">{obj.name}</h3>
      </div>
      <div className="flex w-[25%] items-center">
        <h3 className="font-bold items-end">₹{obj.current_price}</h3>
      </div>
    </li>
  );
};

export default Item;
