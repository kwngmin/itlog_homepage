import React from "react";
import IconLabel from "@/components/IconLabel";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";

export default function SafetyCCTV() {
  return (
    <div className="relative bg-yellow-50 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 xl:py-20 my-60 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-24 overflow-hidden">
      <div className="flex-none flex flex-row md:flex-col gap-4 z-20 py-16 md:py-0 sm:py-24 items-center">
        <div className="flex-none w-fit">
          <IconLabel
            icon={"/icons/cctv.png"}
            iconLabel={"고정형 카메라"}
            iconCss={""}
          />
        </div>
        <div className="flex gap-4">
          <IconLabel
            icon={"/icons/dom-cctv.png"}
            iconLabel={"돔 카메라"}
            iconCss={""}
          />
          <IconLabel
            icon={"/icons/web-cam.png"}
            iconLabel={"이동형 CCTV"}
            iconCss={""}
          />
        </div>
      </div>
      <div className="relative flex flex-col sm:w-4/5 md:w-2/3 z-20">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          건설산업 최적화 솔루션
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          안전 관리 CCTV
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-normal tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          안전 관리 CCTV를 설치하여 현장의 넓은 범위, 위험지역, 각종 장비
          등으로부터 잠재적인 위험 요소를 모니터링하여 작업자들의 안전을
          보호합니다.
        </p>
        <SolutionBannerBtn />
      </div>
      <Image
        src={"/images/safety.png"}
        alt=""
        width={420}
        height={420}
        className="absolute -translate-y-1/2 top-28 sm:top-32 md:top-1/2 md:-translate-y-1/2 md:-left-20 lg:-left-40 w-2/3 sm:w-[400px] md:w-[440px] lg:w-[600px]"
      />
    </div>
  );
}
