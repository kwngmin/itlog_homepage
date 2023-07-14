import React from "react";
import IconLabel from "@/components/IconLabel";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";

export default function GateSystem() {
  return (
    <div className="relative bg-emerald-50 rounded-2xl p-6 sm:py-20 md:px-12 lg:px-16 md:py-16 lg:py-20 xl:px-20 my-60 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-24 overflow-hidden">
      <div className="relative flex flex-col sm:w-4/5 md:w-2/3 z-20">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          높은 보안성과 효율성
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          출입통제 시스템
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-normal tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          출입통제 시스템은 실시간으로 작업자의 출입 기록을 관리하고, 비인가자의
          출입을 차단함으로써 작업자들의 안전을 보호합니다. 현장의 보안 관리와
          작업자들의 안전까지 예방하고 보호할 수 있습니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <div className="flex-none hidden lg:flex gap-4 z-20 py-12 md:py-0 sm:py-4 order-first md:order-last">
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
      </div>
      <Image
        src={"/images/focusGreen.png"}
        alt=""
        width={420}
        height={420}
        className="absolute sm:-top-60 md:top-1/2 md:-translate-y-1/2 md:mt-3 md:-right-40 lg:-right-44 xl:-right-40 w-[240px] sm:w-[470px] lg:w-[580px]"
      />
    </div>
  );
}