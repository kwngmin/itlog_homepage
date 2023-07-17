import React from "react";
import Image from "next/image";
import photo from "../../public/images/merit1.jpg";
import lh from "../../public/logos/lh.svg";

export default function InstanceCard() {
  return (
    <div className="flex-none lg:flex-auto">
      <div className="flex flex-col items-start gap-3 shrink py-6 w-80 lg:w-full">
        <Image
          src={lh}
          width={10}
          height={10}
          priority
          alt=""
          className="h-12 w-auto"
        />
        <Image
          src={photo}
          alt="itlog Logo"
          width={480}
          height={360}
          className="aspect-video object-cover rounded-2xl overflow-hidden"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium tracking-tighter">
            통합 모니터링 시스템
          </h3>
          <p className="text-black/70 flex gap-2 items-center">
            <span className="font-medium">LH주택공사</span>
            <span className="h-3 border-l-2 border-gray-300"></span>
            <span>대전충남지역본부 현장</span>
          </p>
        </div>
      </div>
    </div>
  );
}
