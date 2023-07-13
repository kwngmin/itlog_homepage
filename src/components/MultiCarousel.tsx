// "use client";
import React from "react";
import Image from "next/image";
import CarouselBtn from "@/buttons/CarouselBtn";

export default function MultiCarousel() {
  return (
    <>
      <div className="py-8 my-4  bg-slate-100 border border-slate-300 rounded-2xl flex gap-6">
        <div className="w-20 rounded-r-xl bg-slate-700"></div>
        <div className="relative  bg-black rounded-2xl overflow-hidden h-72 flex flex-col justify-center">
          <Image
            alt="itlog Logo"
            src={"/images/sideFace.png"}
            width={560}
            height={560}
            className="absolute -right-24 object-cover z-20 mix-blend-lighten h-full"
          />
          <div className="relative z-10 ml-20 mb-6">
            <h3 className="text-3xl font-bold mb-3 tracking-tight text-white">
              Deep Learning
            </h3>
            <p className="w-3/5 break-keep text-md leading-relaxed tracking-tight text-white/70">
              회귀분석을 통하여 예측할 수 없는 안전사고까지도 추적할 수 있을
              때까지 Deep Mining과 Deep Learning의 가치를 높여 나갑니다.
              가상현실(VR)이나 증강현실(AR) 기술과 결합하여 안전 교육 및 학습을
              지원할 수 있습니다.
            </p>
          </div>
          <Image
            alt="itlog Logo"
            src={"/images/newron.jpg"}
            fill
            className="object-cover object-right-top"
          />
        </div>
        <div className="w-20 rounded-l-xl bg-slate-700"></div>
      </div>
      <div className="flex gap-2">
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 rounded-full h-12">
          BigData
        </button>
        <CarouselBtn btnName={"Deep Learning"} />
        <CarouselBtn btnName={"Ai"} />
        <CarouselBtn btnName={"Smart Safety"} />
      </div>
    </>
  );
}
