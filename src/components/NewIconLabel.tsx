import React from "react";
import Image from "next/image";
interface Props {
  icon: string;
  iconLabel: string;
  iconCss: string;
}
export default function NewIconLabel({ icon, iconLabel, iconCss }: Props) {
  return (
    <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl h-fit z-20">
      <Image
        src={icon}
        alt={iconLabel}
        width={56}
        height={56}
        className={`${iconCss} lg:w-20`}
      />
    </div>
  );
}
