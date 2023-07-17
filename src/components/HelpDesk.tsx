import React from "react";

export default function HelpDesk() {
  return (
    <div className="my-60">
      <h1 className="leading-tight break-keep text-3xl sm:text-4xl font-bold tracking-tight">
        고객센터
      </h1>
      <div className="my-4">
        <p className="text-2xl font-medium tracking-tighter">
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
          02-859-2064
        </li>
        <li className="flex items-center">
          <div className="flex justify-center bg-gray-800 text-white font-medium w-8 h-8 rounded-full py-1 mr-2">
            F
          </div>
          02-859-2065
        </li>
        <li className="flex items-center">
          <div className="flex justify-center bg-gray-800 text-white font-medium w-8 h-8 rounded-full py-1 mr-2">
            M
          </div>
          ok@it-log.co.kr
        </li>
      </ul>
      <ul className="flex my-8 gap-4 text-2xl font-medium tracking-tighter">
        <li className="flex h-28 w-full border-2 border-gray-300 rounded-xl items-center px-12">
          <span className="mr-4">아이콘</span>원격지원
        </li>
        <li className="flex h-28 w-full border-2 border-gray-300 rounded-xl items-center px-12">
          <span className="mr-4">아이콘</span>상담문의
        </li>
      </ul>
    </div>
  );
}
