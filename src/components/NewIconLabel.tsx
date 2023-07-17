import React from "react";
import Image from "next/image";
interface Props {
  icon: string;
  iconLabel: string;
  iconCss: string;
}
export default function NewIconLabel({ icon, iconLabel, iconCss }: Props) {
  return (
    <div className="flex w-full h-full z-20 relative">
      <Image
        src={icon}
        alt={iconLabel}
        width={56}
        height={56}
        className={`${iconCss} bg-white/90 backdrop-blur-md p-6 lg:p-8 rounded-3xl absolute w-28 lg:w-32`}
      />
    </div>
  );
}
