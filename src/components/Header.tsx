import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex-none flex justify-center border-b z-20">
      <div className="flex items-center px-4 md:px-6 xl:px-8 w-[1536px] justify-between h-[72px]">
        <Image
          src="/logos/itlog.svg"
          alt="itlog Logo"
          className="dark:invert"
          width={88}
          height={20}
          priority
        />
        <ul className="flex items-center gap-1 tracking-tight">
          <li>
            <button className="h-[44px] px-3 rounded-md hover:bg-gray-200">
              회사소개
            </button>
          </li>
          <li>
            <button className="h-[44px] px-3 rounded-md hover:bg-gray-200">
              제품소개
            </button>
          </li>
          <li>
            <button className="h-[44px] px-3 rounded-md hover:bg-gray-200">
              통합IoT솔루션
            </button>
          </li>
        </ul>
        <div>
          <div className="flex gap-2">
            <button className="h-[44px] px-4 rounded-md hover:bg-gray-200">
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
