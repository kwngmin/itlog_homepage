import React from "react";
import Image from "next/image";
interface Props {
  cardIcon: string;
  cardNum: number;
  cardText: string;
  iconCss: string;
  colStart: string;
}
export default function MainCardIcon({
  cardIcon,
  cardNum,
  cardText,
  iconCss,
  colStart,
}: Props) {
  return (
    <div
      className={`${colStart} overflow-hidden rounded-xl aspect-4/3 bg-red-500 flex-col justify-center items-center drop-shadow-2xl`}
    >
      {/* <Image
        src={cardIcon}
        alt="itlog Logo"
        width={100}
        height={100}
        className={`${iconCss} w-2/5 md:w-1/3 drop-shadow-2xl`}
      /> */}
      <h2 className="text-4xl lg:text-5xl font-bold tracking-wide text-white leading-tight">
        {cardNum}
        <span className="font-normal text-white/70">+</span>
      </h2>
      <span className="text-xl tracking-tight text-yellow-200">{cardText}</span>
    </div>
  );
}
