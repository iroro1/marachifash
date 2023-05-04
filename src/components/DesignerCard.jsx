import { starsFn } from "@/config/utility";
import Link from "next/link";
import React from "react";
import RatingComp from "./RatingComp";

const DesignerCard = ({ data }) => {
  return (
    <Link href={`/designers/${data._id}`}>
      <div className="border max-w-[200px] min-w-[200px] border-slate-200 overflow-hidden rounded hover:border-slate-300 shadow-md">
        <img
          src={data.imgSrc}
          className="w-[200px] h-[150px] rounded object-cover"
          alt=""
        />
        <div className="flex p-2 justify-between items-start mt-2">
          <div>
            <h5>{data.name}</h5>
            <small>{data.country}</small>
          </div>

          <div>
            <RatingComp stars={starsFn(data?.works)} />
            <span className="text-[10px]">
              ({starsFn(data?.works)} Star
              {starsFn(data?.works) !== 1 && "s"})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DesignerCard;
