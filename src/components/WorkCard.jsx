import { ShoppingCart } from "iconsax-react";
import React from "react";
import RatingComp from "./RatingComp";
import { FaCartPlus } from "react-icons/fa";

const WorkCard = ({ data }) => {
  return (
    <div className="border max-w-[200px] min-w-[200px] border-slate-200 overflow-hidden rounded hover:border-slate-300 shadow-md">
      <img
        src={data.imgSrc}
        className="w-[200px] h-[150px] rounded object-cover"
        alt=""
      />
      <div className="flex p-2 justify-between items-start mt-2">
        <div>
          <small>SOLD</small>
          <h5>
            {data.copiesSold} {+data.copiesSold === 1 ? "Copy" : "Copies"}
          </h5>
        </div>

        <div className="flex flex-col gap-3 justify-end">
          <RatingComp stars={+data.rating} />
          <FaCartPlus className="hover:animate-pulse cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
