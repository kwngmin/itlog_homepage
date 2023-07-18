import React from "react";
import InstanceCard from "./InstanceCard";
import Link from "next/link";
import instancePhoto1 from "../../public/images/instance1.jpg";
import instanceLogo1 from "../../public/logos/lh.svg";
import instancePhoto2 from "../../public/images/instance2.jpg";
import instanceLogo2 from "../../public/logos/dl.svg";
import instancePhoto3 from "../../public/images/instance3.jpg";
import instanceLogo3 from "../../public/logos/kn.svg";

export default function Instance() {
  return (
    <div className="my-60">
      {/* <div className="select-none lg:hidden absolute z-20 bg-gradient-to-r from-transparent to-white w-1/2 sm:w-1/3 md:w-1/5 right-0 h-full"></div> */}
      <div className="flex justify-between items-center">
        <h1 className="w-fit leading-tight break-keep text-3xl sm:text-4xl font-bold tracking-tight">
          시공사례
        </h1>
        <Link
          href={"/case"}
          className="flex items-center justify-center px-5 h-10 rounded-full font-medium tracking-tighter select-none text-red-500 bg-red-50 md:hover:bg-red-100"
        >
          더 보기
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto lg:bg-transparent pb-4 lg:pt-0 rounded-2xl">
        {/* <div className="absolute z-20 bg-blue-500 h-full w-full"></div> */}
        <InstanceCard
          photo={instancePhoto1}
          logo={instanceLogo1}
          client={"LH주택공사"}
          place={"대전충남지역본부 현장"}
          subject={"통합 모니터링 시스템"}
          logoCss={"w-28"}
        />
        <InstanceCard
          photo={instancePhoto2}
          logo={instanceLogo2}
          client={"DL건설"}
          place={"성남복정 현장"}
          subject={"태양광 에너지 기반 돔 CCTV 설치"}
          logoCss={"w-28"}
        />
        <InstanceCard
          photo={instancePhoto3}
          logo={instanceLogo3}
          client={"경남도청"}
          place={"서부청사"}
          subject={"상부 출구 슬라이딩게이트"}
          logoCss={"w-28"}
        />
      </div>
    </div>
  );
}
