import React from "react";
import Image from "next/image";
interface Props {
  icon: string;
  iconLabel: string;
  iconCss: string;
}
export default function IconLabel({ icon, iconLabel, iconCss }: Props) {
  return (
    <div className="bg-white/40 backdrop-blur-md p-2 sm:p-4 lg:py-4 lg:px-0 lg:w-[120px] flex flex-col justify-center items-center drop-shadow-2xl rounded-3xl h-fit ">
      <Image
        src={icon}
        alt={iconLabel}
        width={56}
        height={56}
        className={`${iconCss} drop-shadow-lg mb-0 lg:mb-3 p-2 sm:p-1`}
      />
      <span className="hidden lg:flex text-sm text-slate-600 tracking-tighter">
        {iconLabel}
      </span>
    </div>
  );
}
