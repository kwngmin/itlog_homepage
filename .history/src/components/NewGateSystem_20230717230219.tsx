import React from "react";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";
import NewIconLabel from "./NewIconLabel";
import focus from "../../public/images/focus.png";

export default function NewGateSystem() {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-between md:items-center gap-6 sm:gap-10 my-60">
      <div className="flex flex-col w-full sm:w-3/5 sm:px-4">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          높은 보안성과 효율성
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          출입통제 시스템
        </h1>
        <p className="text-lg md:text-xl md:leading-relaxed tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          출입통제 시스템은 실시간으로 작업자의 출입 기록을 관리하고, 비인가자의
          출입을 차단함으로써 작업자들의 안전을 보호합니다. 현장의 보안 관리와
          작업자들의 안전까지 예방하고 보호할 수 있습니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <div className="relative overflow-hidden rounded-2xl flex justify-center items-center px-4 gap-4 z-20 py-8 md:py-0 sm:py-4 bg-green-50 w-full sm:w-2/5 aspect-video sm:aspect-3/4 md:aspect-square lg:h-[420px] order-first sm:order-last">
        <NewIconLabel
          icon={"/icons/face-id.png"}
          iconLabel={"안면인식 시스템"}
          iconCss={""}
          // iconCss={"top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/4"}
        />
        <NewIconLabel
          icon={"/icons/parking.png"}
          iconLabel={"차량통제 시스템"}
          iconCss={""}
          // iconCss={"top-1/2 -translate-y-1/2 right-1/2 translate-x-1/4"}
        />
        <Image
          src={focus}
          alt=""
          width={420}
          height={420}
          className="absolute top-1/2 -translate-y-1/2 w-10/12 sm:w-5/6 drop-shadow-xl"
        />
      </div>
    </div>
  );
}
