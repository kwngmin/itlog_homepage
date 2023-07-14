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
      <div className="z-10 px-4 md:px-6 xl:px-0 w-[1024px] pb-32">
        <h1 className="hidden md:flex text-4xl md:text-5xl font-bold tracking-tighter mb-2 md:mb-3 lg:mb-4 xl:mb-5 break-keep">
          건설은 안전하게 안전은 스마트하게
        </h1>
        <h1 className="md:hidden leading-tight text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter mb-2 md:mb-3 lg:mb-4 xl:mb-5 break-keep">
          건설은 안전하게
          <br />
          안전은 스마트하게
        </h1>
        <p className="lg:leading-normal xl:leading-normal w-full md:w-3/5 lg:w-3/4 text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-tight lg:tracking-tighter text-black/70 break-keep">
          <strong className="text-red-500 fonts-medium">아이티로그</strong>의
          수준 높은 기술력과 전문성으로 건설안전관리 영상보안솔루션을
          제공합니다.
        </p>
      </div>
    </div>
  );
}
