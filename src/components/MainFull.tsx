import Image from "next/image";
import React from "react";

export default function MainFull() {
  return (
    <div className="flex justify-center items-center h-full">
      <Image src="/images/back3.jpg" alt="itlog Logo" priority fill />
      <div className="z-10 px-4 md:px-6 xl:px-0 w-[1024px] pb-40">
        <h1 className="text-5xl font-bold tracking-tight leading-relaxed">
          건설은 안전하게 안전은 스마트하게
        </h1>
        <p className="w-[460px] text-2xl tracking-tight text-black/70 break-keep leading-normal">
          <strong className="text-red-500 font-medium">아이티로그</strong>의
          수준 높은 기술력과 전문성으로 건설안전관리 영상보안솔루션을
          제공합니다.
        </p>
      </div>
    </div>
  );
}
