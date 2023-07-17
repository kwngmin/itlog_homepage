import React from "react";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";
import NewIconLabel from "./NewIconLabel";
import crane from "../../public/images/crane.png";

export default function NewTowerSystem() {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-between md:items-center gap-6 sm:gap-10 my-60">
      <div className="relative overflow-hidden rounded-2xl flex items-center justify-center bg-orange-50 w-full sm:w-2/5 aspect-video sm:aspect-3/4 md:aspect-square lg:h-[420px] ">
        <div className="flex sm:flex-col justify-center items-center gap-4 px-4">
          <div className="shrink flex gap-4 ">
            <NewIconLabel
              icon={"/icons/cam.png"}
              iconLabel={"후크 하방 카메라"}
              iconCss={""}
            />
            <NewIconLabel
              icon={"/icons/siren.png"}
              iconLabel={"후크 하방 경보기"}
              iconCss={""}
            />
          </div>
          <div className="shrink flex gap-4">
            <NewIconLabel
              icon={"/icons/mirror.png"}
              iconLabel={"충돌방지 시스템"}
              iconCss={""}
            />
            <NewIconLabel
              icon={"/icons/light.png"}
              iconLabel={"투광등 제어 시스템"}
              iconCss={""}
            />
          </div>
        </div>
        <Image
          src={"/images/crane.png"}
          alt=""
          fill
          className="absolute object-cover object-right-top"
        />
      </div>
      <div className="flex flex-col w-full sm:w-3/5 sm:px-4">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          충돌/협착 위험 예측 및 경고
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          타워크레인 통합안전
        </h1>
        <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          T/C 통합안전 시스템을 통해 충돌, 협착, 전도 사고를 사전에
          예방하며,실시간으로 위험 요소를 화면 및 음성으로 안내하여 지속적인
          안전 작업 환경을 조성합니다.
        </p>
        <SolutionBannerBtn />
      </div>
    </div>
  );
}
