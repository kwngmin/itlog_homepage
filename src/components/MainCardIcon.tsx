import React from "react";
interface Props {
  cardNum: number;
  cardText: string;
  colStart: string;
  afterNum: string;
  cardSubText: string;
}
export default function MainCardIcon({
  cardNum,
  cardText,
  colStart,
  afterNum,
  cardSubText,
}: Props) {
  // const afterNumer = ()=> {
  //   switch(cardText) {
  //     case '시스템 설치·시공' :
  //       '건'
  //       break
  //       case 'SW·HW 연구개발' :
  //         '년'
  //         break
  //         default :
  //         '개사'
  //       }
  //     }
  //   console.log(()=>afterNumber())
  return (
    <div
      className={`${colStart} overflow-hidden rounded-xl aspect-4/3 bg-red-500 flex-col justify-center items-center`}
    >
      <span className="text-lg md:text-2xl tracking-tighter text-white/70">
        {cardText}
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
        {cardNum}
        <span className="text-red-700">{afterNum}</span>
      </h2>
      <div className="text-lg bg-red-700 rounded-full px-6 h-8 md:h-12 flex justify-center items-center md:text-2xl tracking-tighter text-white ">
        {cardSubText}
      </div>
    </div>
  );
}
