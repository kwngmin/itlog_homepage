// "use client";

import React from "react";
import Image from "next/image";
interface Props {
  dataRoute: string;
}
export default function MainCardPhoto({ dataRoute }: Props) {
  return (
    <Image
      src={dataRoute}
      alt="itlog Logo"
      width={360}
      height={320}
      className="overflow-hidden rounded-xl aspect-4/3 object-cover drop-shadow-xl"
    />
  );
}
