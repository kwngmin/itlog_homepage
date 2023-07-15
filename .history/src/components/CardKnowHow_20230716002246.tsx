import React from "react";
import MainCardIcon from "./MainCardIcon";
import MainCardPhoto from "./MainCardPhoto";

export default function CardKnowHow() {
  return (
    <div className="flex flex-col gap-4 my-60">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-tighter leading-normal text-black/70">
        기술은 따라 할 수 있어도 <br />
        <b className="text-black break-keep leading-normal">
          숙련된 기술자의 <strong className="text-red-500">깊은 노하우</strong>
          는 경쟁의 산물입니다
        </b>
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 ">
        <MainCardPhoto dataRoute={"/images/merit1.jpg"} />
        <MainCardIcon
          cardNum={3000}
          cardText={"설치시공 횟수"}
          colStart={"flex"}
        />
        <MainCardIcon
          cardNum={13}
          cardText={"연구개발 경력"}
          colStart={"flex md:hidden"}
        />
        <MainCardPhoto dataRoute={"/images/merit2.jpg"} />
        <MainCardIcon
          cardNum={13}
          cardText={"연구개발 경력"}
          colStart={"hidden md:flex "}
        />
        <MainCardPhoto dataRoute={"/images/merit3.jpg"} />
        <MainCardIcon
          cardNum={62}
          cardText={"공급고객사"}
          colStart={"flex"}
        />
      </div>
    </div>
  );
}
