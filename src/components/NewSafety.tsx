import React from "react";
import Image from "next/image";
import SolutionBannerBtn from "./SolutionBannerBtn";
import NewIconLabel from "./NewIconLabel";

export default function NewSafety() {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-between md:items-center gap-6 sm:gap-10 my-60">
      <div className="relative overflow-hidden rounded-2xl flex sm:flex-col justify-center items-center gap-4 bg-yellow-50 w-full sm:w-2/5 aspect-video sm:aspect-3/4 md:aspect-square lg:h-[420px] ">
        <div className="flex flex-row sm:flex-col gap-4 px-4 z-20 items-center">
          <div className="shrink w-fit">
            <NewIconLabel
              icon={"/icons/cctv.png"}
              iconLabel={"고정형 카메라"}
              iconCss={""}
            />
          </div>
          <div className="shrink flex gap-4 ">
            <NewIconLabel
              icon={"/icons/dom-cctv.png"}
              iconLabel={"돔 카메라"}
              iconCss={""}
            />
            <NewIconLabel
              icon={"/icons/web-cam.png"}
              iconLabel={"이동형 CCTV"}
              iconCss={""}
            />
          </div>
        </div>
        <Image
          src={"/images/safety.png"}
          alt=""
          width={480}
          height={480}
          //   fill
          className="absolute -left-1/4"
        />
      </div>
      <div className="flex flex-col w-full sm:w-3/5 sm:px-4">
        <h3 className="font-bold text-xl lg:text-2xl tracking-tight text-red-500 mb-8 md:mt-0 md:mb-12 lg:mb-16">
          건설산업 최적화 솔루션
        </h3>
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
          안전 관리 CCTV
        </h1>
        <p className="sm:text-lg sm:leading-normal md:text-xl md:leading-relaxed tracking-tighter break-keep text-black/70 mb-8 sm:mb-12 lg:mb-16">
          안전 관리 CCTV를 설치하여 현장의 넓은 범위, 위험지역, 각종 장비
          등으로부터 잠재적인 위험 요소를 모니터링하여 작업자들의 안전을
          보호합니다.
        </p>
        <SolutionBannerBtn />
      </div>
    </div>
  );
}
