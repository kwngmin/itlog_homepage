import React from "react";
interface Props {
  cardNum: number;
  cardText: string;
  colStart: string;
}
export default function MainCardIcon({
  cardNum,
  cardText,
  colStart,
}: Props) {
  return (
    <div
      className={`${colStart} overflow-hidden rounded-xl aspect-4/3 bg-red-500 flex-col justify-center items-center drop-shadow-2xl`}
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white my-2">
        {cardNum}
        <span className="font-normal text-white/70"></span>
      </h2>
      <span className="text-2xl tracking-tight text-white/70">{cardText}</span>
    </div>
  );
}
