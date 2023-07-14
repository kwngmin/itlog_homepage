import Image from "next/image";
import React from "react";

export default function MainFull() {
  return (
    <div className="relative flex justify-center items-center h-full">
      <Image
        src="/images/back3.jpg"
        alt="itlog Logo"
        priority
        fill={true}
        className="object-cover"
      />
      <div className="z-10 px-4 md:px-6 xl:px-0 w-[1024px] pb-60 md:pb-40 ml-8 sm:ml-16 md:ml-0">
        <h1 className="hidden md:flex text-4xl md:text-5xl font-bold tracking-tighter mb-2 md:mb-3 lg:mb-4 xl:mb-5 break-keep">
          건설은 안전하게 안전은 스마트하게
        </h1>
        <h1 className="md:hidden leading-tight text-4xl sm:text-5xl sm:leading-tight font-bold tracking-tighter mb-2 sm:mb-3 break-keep">
          건설은 안전하게
          <br />
          안전은 스마트하게
        </h1>
        <p className="lg:leading-normal xl:leading-normal w-4/5 lg:w-3/5 text-xl sm:text-2xl leading-normal sm:leadeing-normal md:leading-normal tracking-tight lg:tracking-tighter text-black/70 break-keep">
          <strong className="text-red-500 fonts-medium">아이티로그</strong>의
          수준 높은 기술력과 전문성으로 건설안전관리 영상보안솔루션을
          제공합니다.
        </p>
      </div>
    </div>
  );
}
