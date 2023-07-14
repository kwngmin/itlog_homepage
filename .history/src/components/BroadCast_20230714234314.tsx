import React from "react";
import IconLabel from "@/components/IconLabel";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";

export default function BroadCast() {
  return (
    <div className="relative rounded-2xl p-6 sm:p-8 md:p-12 lg:px-16 md:py-16 xl:px-20 my-60 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-24 overflow-hidden">
      <div className="relative flex flex-col sm:w-4/5 md:w-2/3 z-20">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          비상상황시 신속한 대응
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          방송시스템
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-normal tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          방송 시스템을 구축하여 근로자가 있는 어느 곳이든 현장 사무실에서 전체,
          구역별, 지정 구간 등을 설정하여 경고 방송 및 안내 방송을 송출할 수
          있습니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <div className="flex-none flex gap-4 z-20 order-first md:order-last">
        <IconLabel icon={"/icons/mic.png"} iconLabel={"마이크"} iconCss={""} />
        <IconLabel
          icon={"/icons/speaker.png"}
          iconLabel={"스피커"}
          iconCss={""}
        />
      </div>
      <Image
        src={"/images/sounds.png"}
        alt=""
        width={420}
        height={420}
        className="absolute top-4 sm:-top-24 md:top-1/2 md:-translate-y-1/2 md:-right-4 xl:-right-2 w-[240px] sm:w-[440px] md:w-[320px] lg:w-[420px]"
      />
    </div>
  );
}
