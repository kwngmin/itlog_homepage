"use client";
import React from "react";
interface Props {
  btnName: string;
}
export default function CarouselBtn({ btnName }: Props) {
  return (
    <button className="flex-none w-fit bg-red-50 hover:bg-red-100 hover:text-red-500 font-medium px-6 rounded-full h-12">
      {btnName}
    </button>
  );
}
