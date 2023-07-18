import Link from "next/link";
import React from "react";
import help from "../../public/icons/chat.png";
import connect from "../../public/icons/desktop.png";
import Image from "next/image";

export default function HelpDesk() {
  return (
    <div className="my-60">
      <h1 className="leading-tight break-keep text-3xl sm:text-4xl font-bold tracking-tight">
        고객센터
      </h1>
      <div className="my-4">
        <p className="text-2xl font-medium tracking-tighter mb-1">
          운영시간 09:00 - 18:00
        </p>
        <p className="text-lg tracking-tighter text-black/60 font-medium">
          점심시간 12:00 - 13:00 (토/일/공휴일 휴무)
        </p>
      </div>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-black/70">
        <li className="flex items-center">
          <div className="flex justify-center bg-gray-800 text-white font-medium w-8 h-8 rounded-full py-1 mr-2">
            T
          </div>
          <span className="font-medium mr-2 text-gray-400">전화</span>
          <a href={`tel:02-859-2064"}`}>02-859-2064</a>
        </li>
        <li className="flex items-center">
          <div className="flex justify-center bg-gray-800 text-white font-medium w-8 h-8 rounded-full py-1 mr-2">
            F
          </div>
          <span className="font-medium mr-2 text-gray-400">팩스</span>
          <Link href={"tel:02-859-2065"}>02-859-2065</Link>
        </li>
        <li className="flex items-center">
          <a className="flex justify-center bg-gray-800 text-white font-medium w-8 h-8 rounded-full py-1 mr-2">
            M
          </a>
          <span className="font-medium mr-2 text-gray-400">메일</span>
          <a href={"mailto:ok@it-log.co.kr"}>ok@it-log.co.kr</a>
        </li>
      </ul>
      <ul className="flex flex-col sm:flex-row my-8 gap-4 text-2xl font-medium tracking-tighter">
        <Link
          href={"http://helpu.kr/itlog/"}
          className="flex h-20 sm:h-24 w-full bg-gray-100 md:hover:bg-red-500 ring ring-gray-200 md:hover:ring-0 rounded-xl items-center px-6 md:px-10 select-none md:hover:text-white"
          target="_blank"
        >
          <Image
            src={connect}
            alt="원격지원 아이콘"
            width={44}
            height={44}
            className="mr-6 w-10 md:w-12 h-auto"
          />
          원격지원
        </Link>
        <Link
          href={"/estimate"}
          className="flex h-20 sm:h-24 w-full bg-gray-100 md:hover:bg-red-500 ring ring-gray-200 md:hover:ring-0 rounded-xl items-center px-6 md:px-10 select-none md:hover:text-white"
        >
          <Image
            src={help}
            alt="원격지원 아이콘"
            width={48}
            height={48}
            className="mr-5 w-10 md:w-12 h-auto"
          />
          상담문의
        </Link>
      </ul>
    </div>
  );
}
