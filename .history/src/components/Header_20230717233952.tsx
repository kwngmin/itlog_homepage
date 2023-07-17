import React from "react";
import Image from "next/image";
import itlog from '../../public/itlog.svg'
export default function Header() {
  return (
    <div className="flex-none flex justify-center border-b z-20">
      <div className="flex items-center px-6 md:px-10 xl:px-8 w-[1536px] justify-between h-[72px] fixed">
<Image src={itlog} width={10} height={10} priority alt='' className='h-12 w-auto'/>
        <ul className="hidden sm:flex items-center gap-1 tracking-tight font-medium">
          <li>
            <button className="h-[44px] px-3 rounded-md md:hover:bg-gray-200">
              회사소개
            </button>
          </li>
          <li>
            <button className="h-[44px] px-3 rounded-md md:hover:bg-gray-200">
              제품소개
            </button>
          </li>
          <li>
            <button className="h-[44px] px-3 rounded-md md:hover:bg-gray-200">
              통합IoT솔루션
            </button>
          </li>
        </ul>
        <div>
          <div className="flex gap-2 font-medium">
            <button className="hidden lg:block h-[44px] px-4 rounded-md text-white bg-slate-700 md:hover:bg-slate-600">
              원격지원
            </button>
            <button className="bg-red-500 hover:bg-red-600 h-[44px] px-4 text-white rounded-md">
              상담문의
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
