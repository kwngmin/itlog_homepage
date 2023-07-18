import React, { Dispatch, SetStateAction } from "react";
import MobileMenu from "./MobileMenu";

import greetings from "../../public/icons/cam.png";

interface Props {
  foldStatus: boolean;
  setFoldStatus: Dispatch<SetStateAction<boolean>>;
}
export default function IntroProducts({ foldStatus, setFoldStatus }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold text-black/70 px-5">제품 소개</h3>
      <div className="grid grid-cols-4 gap-4 justify-between w-full my-3">
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"출입통제 시스템"}
          menuLink={"/products/gate"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"안전관리 CCTV"}
          menuLink={"/products/cctv"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"T/C 통합안전"}
          menuLink={"/products/tower-crane"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"환경센서"}
          menuLink={"/products/sensors"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={greetings}
          menuLabel={"방송시스템"}
          menuLink={"/products/broadcast"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
      </div>
    </div>
  );
}
