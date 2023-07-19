import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  icon: StaticImageData;
  title: string;
  text: string;
  iconCss: string;
}
export default function Reasons({ icon, title, text, iconCss }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <Image
        alt="itlog Logo"
        src={icon}
        width={640}
        height={640}
        className={`${iconCss} w-48 p-10 rounded-[3rem]`}
      />
      <div className="">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 sm:mb-4 md:mb-6 tracking-tight">
          {title}
        </h3>
        <p className="text-lg w-full md:w-5/6 font-normal break-keep leading-relaxed tracking-tighter text-black/70">
          {text}
        </p>
      </div>
    </div>
  );
}
