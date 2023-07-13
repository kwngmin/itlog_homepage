import React from "react";
import Image from "next/image";

interface Props {
  bannerText: string;
  bannerTitle: string;
}
export default function CarouselBanner({ bannerText, bannerTitle }: Props) {
  return (
    <div className="bg-sky-200 border border-gray-400 rounded-xl h-56 w-[816px] flex-none">
      <h1 className="">{bannerTitle}</h1>
      <div className="flex">
        <p>{bannerText}</p>
        <Image
          src={"/images/merit1.jpg"}
          alt="itlog Logo"
          width={360}
          height={320}
          className="overflow-hidden rounded-xl aspect-4/3 object-cover drop-shadow-xl"
        />
      </div>
    </div>
  );
}
