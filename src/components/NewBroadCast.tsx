import React from "react";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";
import NewIconLabel from "./NewIconLabel";
import sounds from "../../public/images/sounds.png";

export default function NewBroadCast() {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-between md:items-center gap-6 sm:gap-10 my-60">
      <div className="flex flex-col w-full sm:w-3/5 sm:px-8">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          비상상황시 신속한 대응
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          방송시스템
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-relaxed tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          방송 시스템을 구축하여 근로자가 있는 어느 곳이든 현장 사무실에서 전체,
          구역별, 지정 구간 등을 설정하여 경고 방송 및 안내 방송을 송출할 수
          있습니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <div className="relative overflow-hidden rounded-2xl flex justify-center items-center px-4 gap-4 z-20 py-8 md:py-0 sm:py-4 bg-violet-50 w-full sm:w-2/5 aspect-video sm:aspect-square lg:h-[420px] order-first sm:order-last">
        <NewIconLabel
          icon={"/icons/mic.png"}
          iconLabel={"마이크"}
          iconCss={""}
          // iconCss={"top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/4"}
        />
        <NewIconLabel
          icon={"/icons/speaker.png"}
          iconLabel={"스피커"}
          iconCss={""}
          // iconCss={"top-1/2 -translate-y-1/2 right-1/2 translate-x-1/4"}
        />
        <Image
          src={sounds}
          alt=""
          width={420}
          height={420}
          className="absolute w-9/12 sm:w-5/6 drop-shadow-xl"
        />
      </div>
    </div>
  );
}
