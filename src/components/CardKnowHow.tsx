import React from "react";
import MainCardIcon from "./MainCardIcon";
import MainCardPhoto from "./MainCardPhoto";

export default function CardKnowHow() {
  return (
    <div className="flex flex-col gap-4 my-60">
      <h1 className="text-3xl sm:text-4xl w-full tracking-tighter leading-normal sm:leading-normal text-black/60">
        기술은 따라 할 수 있어도 <br />
        <b className="text-black break-keep leading-normal">
          숙련된 기술자의 <strong className="text-red-500">깊은 노하우</strong>
          는 경쟁의 산물입니다
        </b>
      </h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 ">
        <MainCardPhoto dataRoute={"/images/merit1.jpg"} />
        <MainCardIcon
          cardNum={3000}
          cardText={"통합IoT솔루션"}
          cardSubText={"설치 · 시공"}
          afterNum={"건"}
          colStart={"flex"}
        />
        <MainCardIcon
          cardNum={13}
          cardText={"제품 및 기술"}
          cardSubText={"연구 · 개발"}
          afterNum={"년"}
          colStart={"flex sm:hidden"}
        />
        <MainCardPhoto dataRoute={"/images/merit2.jpg"} />
        <MainCardIcon
          cardNum={13}
          cardText={"제품 및 기술"}
          cardSubText={"연구 · 개발"}
          afterNum={"년"}
          colStart={"hidden sm:flex "}
        />
        <MainCardPhoto dataRoute={"/images/merit3.jpg"} />
        <MainCardIcon
          cardNum={62}
          cardText={"동반성장 파트너"}
          cardSubText={"협력 · 공급"}
          afterNum={"개사"}
          colStart={"flex"}
        />
      </div>
    </div>
  );
}
