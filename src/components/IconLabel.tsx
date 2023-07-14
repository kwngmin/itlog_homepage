import React from "react";
import Image from "next/image";
interface Props {
  icon: string;
  iconLabel: string;
  iconCss: string;
}
export default function IconLabel({ icon, iconLabel, iconCss }: Props) {
  return (
    <div className="bg-white p-2 sm:p-4 lg:py-4 lg:px-0 lg:w-[120px] flex flex-col justify-center items-center lg:drop-shadow-2xl rounded-3xl h-fit ">
      <Image
        src={icon}
        alt={iconLabel}
        width={56}
        height={56}
        className={`${iconCss} drop-shadow-2xl mb-0 lg:mb-3 p-2 sm:p-1`}
      />
      <span className="hidden lg:flex text-sm text-black/60 font-medium tracking-tighter">
        {iconLabel}
      </span>
    </div>
  );
}
