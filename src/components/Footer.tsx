import React from "react";
import BodyWrapper from "./BodyWrapper";
import Image from "next/image";
import itlogBw from "../../public/logos/itlog-bw.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="grow bg-slate-800 text-white/50 pt-16 pb-24 text-[15px]">
      <BodyWrapper>
        <div className="flex flex-col gap-20">
          <nav className="hidden lg:flex">
            <section className="flex-1 flex flex-col gap-2">
              <span className="text-white/80 font-medium text-base">회사</span>
              <Link className="hover:text-red-500" href={"/greetings"}>
                인사말
              </Link>
              <Link className="hover:text-red-500" href={"/history"}>
                기업연혁
              </Link>
              <Link className="hover:text-red-500" href={"/vision"}>
                기업이념
              </Link>
              <Link className="hover:text-red-500" href={"/location"}>
                오시는 길
              </Link>
            </section>
            <section className="flex-1 flex flex-col gap-2">
              <span className="text-white/80 font-medium text-base">
                솔루션
              </span>
              <Link className="hover:text-red-500" href={"/solution"}>
                통합IoT솔루션
              </Link>
              <Link className="hover:text-red-500" href={"/case"}>
                시공사례
              </Link>
            </section>
            <section className="flex-1 flex flex-col gap-2">
              <span className="text-white/80 font-medium text-base">제품</span>
              <Link className="hover:text-red-500" href={"/products/gate"}>
                출입통제 시스템
              </Link>
              <Link
                className="hover:text-red-500"
                href={"/products/tower-crane"}
              >
                타워크레인 통합안전
              </Link>
              <Link className="hover:text-red-500" href={"/products/sensors"}>
                환경센서
              </Link>
              <Link className="hover:text-red-500" href={"/products/cctv"}>
                안전관리 CCTV
              </Link>
              <Link className="hover:text-red-500" href={"/products/broadcast"}>
                방송시스템
              </Link>
            </section>
            <section className="flex-1 flex flex-col gap-2">
              <span className="text-white/80 font-medium text-base">정책</span>
              <Link className="hover:text-red-500" href={"/terms"}>
                이용약관
              </Link>
              <Link className="hover:text-red-500" href={"/policy"}>
                개인정보취급방침
              </Link>
            </section>
          </nav>
          <div className="flex flex-col lg:flex-row items-start gap-4 font-normal lg:items-center">
            <div className="flex items-center">
              <Image
                src={itlogBw}
                width={120}
                height={80}
                alt="itlog-bw"
                className="w-20 opacity-40"
              />{" "}
              <div className="text-white/40 ml-3 border-l border-gray-600 pl-3 lg:hidden text-sm leading-tight text-gray-500">
                For the intelligent
                <br /> IT world!
              </div>
            </div>
            <div className="hidden lg:block h-10 border-l border-white/20 mx-3"></div>
            <div className="text-white/40 tracking-tight text-sm md:text-base break-keep">
              <p className="text-white/80">(주)아이티로그</p>
              <p>
                서울특별시 구로구 디지털로33길 28 우림이비즈센터1차 308호 08377
              </p>
            </div>
          </div>
          <p className="text-white/40 tracking-tight text-sm md:text-base break-keep">
            Copyright ⓒ2023 ITLOG CO., LTD. All Rights Reserved.
          </p>
        </div>
      </BodyWrapper>
    </section>
  );
}
