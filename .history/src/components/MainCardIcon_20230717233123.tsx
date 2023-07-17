import React from "react";
interface Props {
  cardNum: number;
  cardText: string;
  colStart: string;
}
export default function MainCardIcon({ cardNum, cardText, colStart }: Props) {
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
      className={`${colStart} overflow-hidden rounded-xl aspect-4/3 bg-red-500 flex-col justify-center items-center pb-2`}
    >
      <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-white h-12 sm:h-16 lg:h-20">
        {cardNum}
        <span className="font-normal text-white/70"></span>
      </h2>
      <span className="text-xl sm:text-2xl md:text-3xl tracking-tighter text-white/80">
        {cardText}
      </span>
    </div>
  );
}
