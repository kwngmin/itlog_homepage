import React from "react";
import IconLabel from "@/components/IconLabel";
import Image from "next/image";

export default function SafetyCCTV() {
  return (
    <div className="relative bg-slate-100 sm:bg-sky-100 md:bg-red-100 lg:bg-emerald-200 xl:bg-orange-100 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 my-60 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 overflow-hidden">
      <div className="flex-none grid grid-cols-4 md:grid-cols-2 gap-4 z-20 py-16 md:py-0 sm:py-24 md:px-8">
        <IconLabel
          icon={"/icons/cctv.png"}
          iconLabel={"고정형 카메라"}
          iconCss={""}
        />{" "}
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
        <button className="w-fit bg-white hover:bg-red-500 hover:text-white font-medium text-slate-600 hover:ring-0 h-12 px-8 rounded-full drop-shadow-2xl tracking-tight">
          더 알아보기
        </button>
      </div>
      {/* <Image
        src={"/images/focusGreen.png"}
        alt=""
        width={420}
        height={420}
        className="absolute sm:top-10 md:top-1/2 md:-translate-y-1/2 md:mt-3 md:right-4 lg:right-4 xl:right-8 w-[240px] sm:w-[320px] md:w-[320px] lg:w-[420px]"
      /> */}
    </div>
  );
}
