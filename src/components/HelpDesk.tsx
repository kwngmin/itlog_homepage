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
      <ul className="flex gap-6 text-black/70">
        <li>
          <span className="bg-gray-800 text-white font-bold px-3 rounded-full py-1 mr-2">
            T
          </span>
          02-859-2064
        </li>
        <li>
          <span className="bg-gray-800 text-white font-bold px-3 rounded-full py-1 mr-2">
            F
          </span>
          02-859-2065
        </li>
        <li>
          <span className="bg-gray-800 text-white font-bold px-3 rounded-full py-1 mr-2">
            E
          </span>
          ok@it-log.co.kr
        </li>
      </ul>
    </div>
  );
}
