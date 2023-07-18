import React, { Dispatch, SetStateAction } from "react";
import MobileMenu from "./MobileMenu";

import greetings from "../../public/icons/cam.png";

interface Props {
  foldStatus: boolean;
  setFoldStatus: Dispatch<SetStateAction<boolean>>;
}
export default function IntroCompany({ foldStatus, setFoldStatus }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold text-black/70 px-2">회사 소개</h3>
      <div className="grid grid-cols-4 gap-3 items-start justify-between w-full my-3">
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"인사말"}
          menuLink={"/greetings"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"기업연혁"}
          menuLink={"/history"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"기업이념"}
          menuLink={"/vision"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"오시는 길"}
          menuLink={"/location"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
      </div>
    </div>
  );
}
