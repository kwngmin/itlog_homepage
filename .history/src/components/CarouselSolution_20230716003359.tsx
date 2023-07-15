import React from "react";
import MultiCarousel from "./MultiCarousel";

export default function CarouselSolution() {
  return (
    <div className="my-20">
      <h1 className="leading-tight break-keep text-3xl sm:text-4xl font-bold tracking-tight">
        Integrated
        <strong className="text-red-500"> IoT</strong> Solution
      </h1>
      <p className="break-keep sm:w-5/6 lg:w-4/6 tracking-tight text-xl sm:text-xl mt-2 sm:leading-normal text-black/60 font-medium">
        <strong className="font-bold text-red-500">아이티로그</strong>는 오랜
        경력으로 쌓아온 노하우로 S/W 서비스, H/W 서비스, Web 서비스 그리고 높은
        수준의 기술력과 전문성으로&nbsp;
        <b className="text-black/80">
          통합 <strong className="text-red-500">IoT</strong> 솔루션
        </b>
        을 제공합니다.
      </p>
      <MultiCarousel />

      {/* <CarouselBanner
          bannerTitle={"BigData"}
          bannerText={
            "기술은 집약된 기록물을 오랜 기간 축척하여 빅데이터화하고 기계학습을 통해 99.99%의 결과물에 도달하기 위한 정성과 노력의 가치입니다."
          }
        />
        <CarouselBanner
          bannerTitle={"Deep Learning"}
          bannerText={
            "회귀분석을 통하여 예측할 수 없는 안전사고까지도 추적할 수 있을 때까지 Deep Mining과 Deep Learning의 가치를 높여 나갑니다. 가상현실(VR)이나 증강현실(AR) 기술과 결합하여 안전 교육 및 학습을 지원할 수 있습니다."
          }
        />
        <CarouselBanner
          bannerTitle={"Ai - Artificial Intelligence"}
          bannerText={
            "건설산업에서 인공지능은 안전성과 기술 혁신을 결합해 현장의 효율성과 안전성을 향상시키는 중요한 도구로 사용될 수 있으며, 데이터 분석과 예측 모델을 통해 프로젝트 일정과 비용을 최적화할 수 있습니다"
          }
        />
        <CarouselBanner
          bannerTitle={"Smart Safety"}
          bannerText={
            "우리의 안전하고 편리함을 만들어주는 모든 서비스와 기술에 대해 아이티로그는 기업의 비즈니스 혁신과 성장을 위해 오늘도 진심으로 고민합니다."
          }
        /> */}
    </div>
  );
}
