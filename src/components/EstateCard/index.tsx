import React from "react";
import Image from "next/image";
import HeartButton from "../HeartIconButton";
import { Props } from "./EstateCard.types";

function EstateCard({ address, cost, period, name, imgUrl }: Props) {
  return (
    <div
      className="
    border-1 border-[#EAECF4]
    rounded-[8px]
    w-fit
    "
    >
      <Image
        src={imgUrl}
        width={344}
        height={200}
        alt="Picture of the author"
      />
      <div className="p-[24px] pt-[32px]">
        <div
          className="
          flex
        "
        >
          <div className="w-full flex flex-col justify-between align-bottom">
            <p className="text-[#6851FF] font-extrabold text-2xl">
              {cost}
              <span className="text-[#000929] text-xl font-normal">
                /{period}
              </span>
            </p>
            <h3 className="text-[#000929] text-2xl font-bold">{name}</h3>
          </div>
          <HeartButton />
        </div>
        <p className="text-[#000929] text-m font-medium mt-5">{address}</p>
      </div>
    </div>
  );
}

export default EstateCard;
