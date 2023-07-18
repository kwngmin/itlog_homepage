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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white ">
        {cardNum}
        <span className="text-red-800 ml-0.5">{afterNum}</span>
      </h2>
      {/* <p className="sm:text-lg md:text-xl lg:text-2xl tracking-tighter text-white font-medium lg:font-normal mb-2 md:mb-3">
        {cardText}
      </p> */}
      {/* <div className="sm:text-lg bg-red-600 rounded-full px-6 md:px-8 h-10 md:h-12 lg:h-14 md:pb-1 flex justify-center items-center md:text-xl lg:text-2xl tracking-tighter text-white "> */}
      <div className="text-xl md:text-2xl lg:text-3xl tracking-tighter text-white ">
        {cardSubText}
      </div>
    </div>
  );
}
