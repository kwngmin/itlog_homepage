import React from "react";
import Image from "next/image";
interface Props {
  icon: string;
  iconLabel: string;
  iconCss: string;
}
export default function IconLabel({ icon, iconLabel, iconCss }: Props) {
  return (
    <div className="bg-white p-4 md:p-6 lg:p-4 flex flex-col justify-center items-center drop-shadow-2xl rounded-3xl h-fit">
      <Image
        src={icon}
        alt={iconLabel}
        width={56}
        height={56}
        className={`${iconCss} drop-shadow-2xl mb-0 lg:mb-3`}
      />
      <span className="hidden lg:flex text-sm text-black/40 font-medium">
        {iconLabel}
      </span>
    </div>
  );
}
