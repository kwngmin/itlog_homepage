"use client";
import React from "react";
interface Props {
  btnName: string;
}
export default function CarouselBtn({ btnName }: Props) {
  return (
    <button className="hover:bg-red-200 text-black/70 hover:text-red-500 font-medium px-6 rounded-full h-12">
      {btnName}
    </button>
  );
}
