"use client";
import React, { useState } from "react";
import Image from "next/image";
import itlog from "../../public/logos/itlog.svg";
import Link from "next/link";
import IntroCompany from "./IntroCompany";
import IntroProducts from "./IntroProdcts";
import AboutSolutions from "./AboutSolutions";

export default function Header() {
  const foldMenu = () => {
    setFoldStatus(!foldStatus);
    console.log(foldStatus);
  };
  const [foldStatus, setFoldStatus] = useState(false);
  return (
    <>
      <div className="flex w-full justify-center border-b z-50 fixed bg-white/80 backdrop-blur-md">
        <div className="flex items-center pl-2 pr-4 sm:px-6 md:px-10 xl:px-8 w-[1536px] justify-between h-[72px] relative">
          <div className="flex items-center">
            <button
              onMouseDown={() => foldMenu()}
              className={`${
                foldStatus === true && "bg-red-100 text-red-500 font-bold"
              } sm:hidden w-12 h-12 mr-3 flex items-center justify-center rounded-lg select-none`}
            >
              <span className="material-symbols-rounded">
                {foldStatus === false ? "menu" : "close"}
              </span>
            </button>
            {foldStatus === false ? (
              <Link href={"/"}>
                <Image
                  src={itlog}
                  width={10}
                  height={10}
                  priority
                  alt=""
                  className="h-12 w-auto select-none"
                />
              </Link>
            ) : (
              <div className="font-medium text-black/80 text-lg">메뉴 닫기</div>
            )}

            <div className="ml-3 border-l border-gray-300 pl-3 hidden lg:flex text-sm leading-tight text-gray-500">
              For the intelligent
              <br /> IT world!
            </div>
          </div>
          <nav className="absolute right-1/2 translate-x-1/2 hidden sm:flex items-center gap-1 tracking-tight font-medium">
            <button className="h-[44px] px-3 rounded-md md:hover:bg-gray-200">
              회사소개
            </button>
            <button className="h-[44px] px-3 rounded-md md:hover:bg-gray-200">
              제품소개
            </button>
            <Link href={"/solution"}>
              <button className="h-[44px] px-3 rounded-md md:hover:bg-gray-200">
                통합IoT솔루션
              </button>
            </Link>
          </nav>
          <div className="flex gap-2 font-medium">
            <Link href={"http://helpu.kr/itlog/"} target="_blank">
              <button className="hidden lg:block h-[44px] px-4 rounded-md text-white bg-slate-700 md:hover:bg-slate-600 select-none">
                원격지원
              </button>
            </Link>
            <Link href={"/estimate"}>
              <button className="bg-red-500 hover:bg-red-600 h-[44px] px-4 text-white rounded-md select-none">
                상담문의
              </button>
            </Link>
          </div>
        </div>
      </div>
      {foldStatus && (
        <>
          <div className="absolute flex flex-col px-3 py-6 w-full grow top-[72px] bg-white z-40 gap-4 overflow-y-auto">
            <IntroCompany
              foldStatus={foldStatus}
              setFoldStatus={setFoldStatus}
            />
            <IntroProducts
              foldStatus={foldStatus}
              setFoldStatus={setFoldStatus}
            />
            <AboutSolutions
              foldStatus={foldStatus}
              setFoldStatus={setFoldStatus}
            />
          </div>
          <div
            onMouseDown={() => foldMenu()}
            className="absolute w-full h-screen z-30"
          />
        </>
      )}
    </>
  );
}
