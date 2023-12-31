"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
interface Props {
  menuIcon: StaticImageData;
  menuLabel: string;
  menuLink: string;
  foldStatus: boolean;
  setFoldStatus: Dispatch<SetStateAction<boolean>>;
}
export default function MobileMenu({
  menuIcon,
  menuLabel,
  menuLink,
  foldStatus,
  setFoldStatus,
}: Props) {
  const router = useRouter();
  const clickEvent = () => {
    setFoldStatus(!foldStatus);
    router.push(menuLink);
  };
  return (
    <button className="flex-none" onMouseDown={() => clickEvent()}>
      <Image
        src={menuIcon}
        width={64}
        height={64}
        alt=""
        className="w-20 p-5 rounded-3xl mb-2 mx-auto bg-white drop-shadow-xl"
      />
      <p className="font-medium tracking-tighter leading-slug text-sm text-black/70 break-keep">
        {menuLabel}
      </p>
    </button>
  );
}
