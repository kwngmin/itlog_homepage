import React from "react";
import IconLabel from "@/components/IconLabel";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";

export default function TowerSystem() {
  return (
    <div className="relative bg-red-100 rounded-2xl p-6 sm:p-8 sm:pb-20 md:p-12 md:pb-20 lg:px-16 md:py-28 xl:px-20 my-60 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-24 overflow-hidden">
      <div className="flex-none grid grid-cols-4 md:grid-cols-2 gap-4 z-20 py-12 md:py-0 ">
        <IconLabel
          icon={"/icons/cam.png"}
          iconLabel={"후크 하방 카메라"}
          iconCss={""}
        />
        <IconLabel
          icon={"/icons/siren.png"}
          iconLabel={"후크 하방 경보기"}
          iconCss={""}
        />{" "}
        <IconLabel
          icon={"/icons/mirror.png"}
          iconLabel={"충돌방지 시스템"}
          iconCss={""}
        />
        <IconLabel
          icon={"/icons/light.png"}
          iconLabel={"투광등 제어 시스템"}
          iconCss={""}
        />
      </div>
      <div className="relative flex flex-col sm:w-4/5 md:w-2/3 z-20">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          충돌/협착 위험 예측 및 경고
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          타워크레인 통합안전
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-normal tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          T/C 통합안전 시스템을 통해 충돌, 협착, 전도 사고를 사전에
          예방하며,실시간으로 위험 요소를 화면 및 음성으로 안내하여 지속적인
          안전 작업 환경을 조성합니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <Image
        src={"/images/crane.png"}
        alt=""
        width={420}
        height={420}
        className="hidden md:flex absolute md:-left-12 lg:-left-20 md:top-20 lg:-top-12 xl: w-[640px] md:w-[380px] lg:w-[520px]"
      />
      <Image
        src={"/images/crane-small.png"}
        alt=""
        width={420}
        height={420}
        className="md:hidden absolute -top-4 sm:-top-8 -left-16 sm:-left-8 w-[1080px]"
      />
    </div>
  );
}
