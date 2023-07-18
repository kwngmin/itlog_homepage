"use client";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import itlog from "../../public/logos/itlog.svg";
import Link from "next/link";
import IntroCompany from "./IntroCompany";
import IntroProducts from "./IntroProdcts";
import AboutSolutions from "./AboutSolutions";
import DesktopMenu from "./DesktopMenu";
// interface Props {
//   name: string;
//   route: string;
// }
export default function Header() {
  const [foldStatus, setFoldStatus] = useState(false);
  const [popUpMenu, setPopUpMenu] = useState(false);
  const [menuList, setMenuList] = useState<{ name: string; route: string }[]>(
    []
  );
  const menuData = [
    {
      name: "회사 소개",
      lists: [
        { name: "인사말", route: "/greetings" },
        { name: "기업연혁", route: "/history" },
        { name: "기업이념", route: "/vision" },
        { name: "오시는 길", route: "/location" },
      ],
    },
    {
      name: "제품 소개",
      lists: [
        { name: "출입통제 시스템", route: "/products/gate" },
        { name: "안전관리 CCTV", route: "/products/cctv" },
        { name: "타워크레인 통합안전", route: "/products/tower-crane" },
        { name: "환경센서", route: "/products/sensors" },
        { name: "방송시스템", route: "/products/broadcast" },
      ],
    },
    {
      name: "솔루션",
      lists: [
        { name: "통합IoT솔루션", route: "/solution" },
        { name: "시공사례", route: "/case" },
      ],
    },
  ];
  const foldMenu = () => {
    setFoldStatus(!foldStatus);
    console.log(foldStatus);
  };
  const popMenu = (menu: string) => {
    const result = menuData.filter((item) => item.name === menu);
    setMenuList(result[0].lists);
    console.log(menuList);
    setPopUpMenu(true);
  };
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
            <button
              onMouseDown={() => popMenu("회사 소개")}
              className="h-12 px-4 select-none rounded-md md:hover:bg-gray-100"
            >
              회사 소개
            </button>
            <button
              className="h-12 px-4 select-none rounded-md md:hover:bg-gray-100"
              onMouseDown={() => popMenu("제품 소개")}
            >
              제품 소개
            </button>
            <button
              className="h-12 px-4 select-none rounded-md md:hover:bg-gray-100"
              onMouseDown={() => popMenu("솔루션")}
            >
              솔루션
            </button>
          </nav>
          <div className="flex gap-2 font-medium">
            <Link href={"http://helpu.kr/itlog/"} target="_blank">
              <button className="hidden lg:block h-12 px-4 rounded-md text-white bg-slate-700 md:hover:bg-slate-600 select-none">
                원격지원
              </button>
            </Link>
            <Link href={"/estimate"}>
              <button className="bg-red-500 hover:bg-red-600 h-12 px-4 text-white rounded-md select-none">
                상담문의
              </button>
            </Link>
          </div>
        </div>
      </div>
      {foldStatus && (
        <section className="sm:hidden">
          <div className="absolute flex flex-col px-3 py-6 w-full grow top-[72px] bg-gray-100 z-40 gap-4 overflow-y-auto">
            <IntroCompany
              foldStatus={foldStatus}
              setFoldStatus={setFoldStatus}
            />
            <IntroProducts
              foldStatus={foldStatus}
              setFoldStatus={setFoldStatus}
            />
            {/* <AboutSolutions
              foldStatus={foldStatus}
              setFoldStatus={setFoldStatus}
            /> */}
          </div>
          <div
            onMouseDown={() => foldMenu()}
            className="absolute bg-white/70 w-full h-screen z-30"
          />
        </section>
      )}
      {popUpMenu && (
        <section className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col py-4 w-72 grow top-16 bg-white ring-1 ring-slate-200 drop-shadow-2xl z-50 rounded-xl ">
            {menuList.map((item) => (
              <DesktopMenu
                key={item.name}
                name={item.name}
                route={item.route}
                setPopUpMenu={setPopUpMenu}
              />
            ))}
          </div>
          <div
            onMouseDown={() => setPopUpMenu(false)}
            className="absolute w-full h-screen z-30"
          />
        </section>
      )}
    </>
  );
}
