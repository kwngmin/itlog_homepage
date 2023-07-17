import React from "react";
import IconLabel from "@/components/IconLabel";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";

export default function NewGateSystem() {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-between md:items-center gap-6 sm:gap-10 my-60">
      <div className="flex flex-col w-full">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          높은 보안성과 효율성
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          출입통제 시스템
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-relaxed tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          출입통제 시스템은 실시간으로 작업자의 출입 기록을 관리하고, 비인가자의
          출입을 차단함으로써 작업자들의 안전을 보호합니다. 현장의 보안 관리와
          작업자들의 안전까지 예방하고 보호할 수 있습니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <div className="relative overflow-hidden rounded-2xl flex justify-center items-center gap-4 z-20 py-8 md:py-0 sm:py-4 bg-green-100 w-full aspect-square lg:h-[420px] order-first sm:order-last">
        {/* <div className="flex gap-4 z-20 py-8 md:py-0 sm:py-4 order-first md:order-last"> */}
        <IconLabel
          icon={"/icons/face-id.png"}
          iconLabel={"안면인식 시스템"}
          iconCss={""}
        />
        <IconLabel
          icon={"/icons/parking.png"}
          iconLabel={"차량통제 시스템"}
          iconCss={""}
        />
        <Image
          src={"/images/focusGreen.png"}
          alt=""
          width={420}
          height={420}
          className="absolute top-1/2 -translate-y-1/2 mt-3 w-11/12 sm:w-5/6"
        />
      </div>
    </div>
  );
}
