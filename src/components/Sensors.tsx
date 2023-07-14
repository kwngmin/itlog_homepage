import React from "react";
import IconLabel from "@/components/IconLabel";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";

export default function Sensors() {
  return (
    <div className="relative bg-sky-50 rounded-2xl p-6 sm:p-8 md:p-12 lg:px-16 md:py-28 xl:px-20 my-60 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-24 overflow-hidden">
      <div className="relative flex flex-col sm:w-4/5 md:w-2/3 z-20">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          극한 환경에서도 뛰어난 성능
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          환경센서
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-normal tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          현장 내/외부로 환경 Data가 필요한 어느 곳이든 '환경 센서'를 구축하여
          측정값을 실시간으로 표출합니다.어느 곳에서든 실시간 모니터링을 통해
          현장 내 환경 관리 및 작업자들의 건강과 안전을 보호합니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <div className="flex-none grid grid-cols-4 md:grid-cols-2 gap-4 z-20 py-16 md:py-0 sm:py-24 order-first md:order-last">
        <IconLabel
          icon={"/icons/sound-waves.png"}
          iconLabel={"소음 측정기"}
          iconCss={""}
        />
        <IconLabel
          icon={"/icons/gas-mask.png"}
          iconLabel={"유해가스 측정기"}
          iconCss={""}
        />{" "}
        <IconLabel
          icon={"/icons/mask.png"}
          iconLabel={"미세먼지 측정기"}
          iconCss={""}
        />
        <IconLabel
          icon={"/icons/anemometer.png"}
          iconLabel={"풍향풍속계"}
          iconCss={""}
        />
      </div>
      <Image
        src={"/images/blueWaves.png"}
        alt=""
        width={420}
        height={420}
        className="absolute -translate-y-1/3 top-16 md:top-1/2 md:-translate-y-1/2 md:-right-80 lg:-right-64 w-[800px]"
      />
    </div>
  );
}
