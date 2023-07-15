// "use client";
import React from "react";
import Image from "next/image";
import CarouselBtn from "@/components/CarouselBtn";

export default function MultiCarousel() {
  return (
    <>      
    <div className="my-4 flex gap-3 bg-red-50 sm:bg-transparent rounded-full overflow-hidden overflow-x-auto">
    <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 rounded-full h-12">
      BigData
    </button>
    <CarouselBtn btnName={"Deep Learning"} />
    <CarouselBtn btnName={"Ai"} />
    <CarouselBtn btnName={"Smart Safety"} />
  </div>
      <div className="lg:hidden relative bg-black rounded-2xl overflow-hidden h-80 md:h-64 flex flex-col justify-center">
        <Image
          alt="itlog Logo"
          src={"/images/sideFace.png"}
          width={640}
          height={640}
          className="absolute -right-40 object-cover z-20 mix-blend-lighten h-full"
        />
        <div className="relative z-10 mx-6 sm:mx-12 ml-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 sm:mb-4 md:mb-6 tracking-tight text-white">
            Deep Learning
          </h3>
          <p className="w-full md:w-4/6 font-normal break-keep leading-relaxed tracking-tight text-white/80">
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
      <div className="hidden lg:flex py-4 md:py-8 my-4  bg-gradient-to-r from-gray-50 to-zinc-100 rounded-2xl gap-2 sm:gap-3 md:gap-4">
        <div className="relative overflow-hidden w-20 rounded-r-2xl bg-gradient-to-b from-slate-800 to-blue-800 drop-shadow-lg" />
        <div className="relative  bg-black rounded-2xl overflow-hidden h-72 flex flex-col justify-center drop-shadow-lg">
          <Image
            alt="itlog Logo"
            src={"/images/sideFace.png"}
            width={640}
            height={640}
            className="absolute -right-40 object-cover z-20 mix-blend-lighten h-full"
          />
          <div className="relative z-10 mx-6 sm:mx-12 md:ml-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 sm:mb-4 md:mb-6 tracking-tight text-red-500">
              Deep Learning
            </h3>
            <p className="w-full md:w-4/6 font-normal break-keep leading-relaxed tracking-tight text-white/80">
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

        <div className="relative overflow-hidden w-20 rounded-l-2xl bg-gradient-to-b from-cyan-800 to-slate-800 drop-shadow-lg" />
      </div>
    </>
  );
}
