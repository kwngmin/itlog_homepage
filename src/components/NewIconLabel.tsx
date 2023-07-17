import React from "react";
import Image from "next/image";
interface Props {
  icon: string;
  iconLabel: string;
  iconCss: string;
}
export default function NewIconLabel({ icon, iconLabel, iconCss }: Props) {
  return (
    <div className="bg-white/90 backdrop-blur-md p-5 lg:p-8 rounded-3xl h-fit z-20 drop-shadow-2xl">
      <Image
        src={icon}
        alt={iconLabel}
        width={56}
        height={56}
        className={`${iconCss} `}
      />
    </div>
  );
}
