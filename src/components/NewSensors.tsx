import React from "react";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";
import NewIconLabel from "./NewIconLabel";
// import crane from "../../public/images/crane.png";

export default function NewSensors() {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-between md:items-center gap-6 sm:gap-10 my-60">
      <div className="flex flex-col w-full">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          극한 환경에서도 뛰어난 성능
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          환경센서
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-relaxed tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          현장 내/외부로 환경 Data가 필요한 어느 곳이든 '환경 센서'를 구축하여
          측정값을 실시간으로 표출합니다.어느 곳에서든 실시간 모니터링을 통해
          현장 내 환경 관리 및 작업자들의 건강과 안전을 보호합니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <div className="relative overflow-hidden rounded-2xl flex sm:flex-col justify-center items-center gap-4 bg-sky-50 w-full aspect-video sm:aspect-square lg:h-[420px] order-first sm:order-last">
        <div className="flex gap-4 ">
          <NewIconLabel
            icon={"/icons/sound-waves.png"}
            iconLabel={"소음 측정기"}
            iconCss={""}
          />
          <NewIconLabel
            icon={"/icons/gas-mask.png"}
            iconLabel={"유해가스 측정기"}
            iconCss={""}
          />
        </div>
        <div className="flex gap-4">
          <NewIconLabel
            icon={"/icons/mask.png"}
            iconLabel={"미세먼지 측정기"}
            iconCss={""}
          />
          <NewIconLabel
            icon={"/icons/anemometer.png"}
            iconLabel={"풍향풍속계"}
            iconCss={""}
          />
        </div>
        <Image
          src={"/images/blueWaves.png"}
          alt=""
          width={480}
          height={480}
          //   fill
          className="absolute"
        />
      </div>
    </div>
  );
}
