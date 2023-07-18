import React from "react";
import BodyWrapper from "./BodyWrapper";
import Image from "next/image";
import itlogBw from "../../public/logos/itlog-bw.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="grow bg-slate-800 h-80 text-white/70">
      <BodyWrapper>
        <nav className="flex justify-between">
          <section className="flex flex-col">
            <span>회사</span>
            <Link href={"/greetings"}>인사말</Link>
            <Link href={"/history"}>기업연혁</Link>
            <Link href={"/vision"}>기업이념</Link>
            <Link href={"/location"}>오시는 길</Link>
          </section>
          <section className="flex flex-col">
            <span>제품</span>
            <Link href={"/products/gate"}>출입통제 시스템</Link>
            <Link href={"/products/tower-crane"}>타워크레인 통합안전</Link>
            <Link href={"/products/sensors"}>환경센서</Link>
            <Link href={"/products/cctv"}>안전관리 CCTV</Link>
            <Link href={"/products/broadcast"}>방송시스템</Link>
          </section>
          <section className="flex flex-col">
            <span>솔루션</span>
            <Link href={"/solution"}>통합IoT솔루션</Link>
            <Link href={"/case"}>시공사례</Link>
          </section>
          <section className="flex flex-col">
            <span>정책</span>
            <Link href={"/terms"}>이용약관</Link>
            <Link href={"/policy"}>개인정보취급방침</Link>
          </section>
        </nav>
        <div className="flex gap-4 font-normal items-center">
          <Image
            src={itlogBw}
            width={120}
            height={80}
            alt="itlog-bw"
            className="w-20 opacity-60"
          />
          <div className="h-10 border-l border-white/20 mx-3"></div>
          <div className="">
            <p>(주)아이티로그</p>
            <p>
              08377 서울특별시 구로구 디지털로33길 28 우림이비즈센터1차 308호
            </p>
          </div>
        </div>
        <p>Copyright ⓒ2023 ITLOG CO., LTD. All Rights Reserved.</p>
      </BodyWrapper>
    </section>
  );
}
