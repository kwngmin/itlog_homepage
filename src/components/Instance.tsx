import React from "react";
import InstanceCard from "./InstanceCard";
import Link from "next/link";

export default function Instance() {
  return (
    <div className="my-60">
      {/* <div className="select-none lg:hidden absolute z-20 bg-gradient-to-r from-transparent to-white w-1/2 sm:w-1/3 md:w-1/5 right-0 h-full"></div> */}
      <div className="flex justify-between items-center">
        <h1 className="w-fit leading-tight break-keep text-3xl sm:text-4xl font-bold tracking-tight">
          시공사례
        </h1>
        <Link
          href={"/construction-case"}
          className="flex items-center justify-center px-5 h-10 rounded-full font-medium tracking-tighter select-none text-red-500 bg-red-50 md:hover:bg-red-100"
        >
          더 보기
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto lg:bg-transparent pb-4 lg:pt-0 rounded-2xl">
        {/* <div className="absolute z-20 bg-blue-500 h-full w-full"></div> */}
        <InstanceCard />
        <InstanceCard />
        <InstanceCard />
      </div>
    </div>
  );
}
