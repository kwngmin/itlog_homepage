import React, { Dispatch, SetStateAction } from "react";
import MobileMenu from "./MobileMenu";

import greetings from "../../public/icons/hi.png";
import company from "../../public/icons/office-building.png";
import brain from "../../public/icons/brain.png";
import location from "../../public/icons/location-pin.png";

interface Props {
  foldStatus: boolean;
  setFoldStatus: Dispatch<SetStateAction<boolean>>;
}
export default function IntroCompany({ foldStatus, setFoldStatus }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold text-black/70 px-2">아이티로그 회사 소개</h3>
      <div className="grid grid-cols-4 gap-4 items-start justify-between w-full my-3">
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"인사말"}
          menuLink={"/greetings"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={company}
          menuLabel={"기업연혁"}
          menuLink={"/history"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={brain}
          menuLabel={"기업이념"}
          menuLink={"/vision"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={location}
          menuLabel={"오시는 길"}
          menuLink={"/location"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
      </div>
    </div>
  );
}
