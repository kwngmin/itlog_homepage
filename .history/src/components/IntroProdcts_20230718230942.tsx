import React, { Dispatch, SetStateAction } from "react";
import MobileMenu from "./MobileMenu";

import barrier from "../../public/icons/barrier.png";
import promote from "../../public/icons/promote.png";
import sensor from "../../public/icons/anemometer.png";
import crane from "../../public/icons/crane.png";
import cctv from "../../public/icons/cctv.png";
import cone from "../../public/icons/traffic-cone.png";
import solution from "../../public/icons/solution.png";

interface Props {
  foldStatus: boolean;
  setFoldStatus: Dispatch<SetStateAction<boolean>>;
}
export default function IntroProducts({ foldStatus, setFoldStatus }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold text-black/70 px-2">솔루션 및 제품 소개</h3>
      <div className="grid grid-cols-4 gap-x-3 gap-y-6 items-start justify-between w-full my-3">
                <MobileMenu
          menuIcon={solution}
          menuLabel={"통합IoT솔루션"}
          menuLink={"/solution"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={cone}
          menuLabel={"시공사례"}
          menuLink={"/case"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={barrier}
          menuLabel={"출입통제 시스템"}
          menuLink={"/products/gate"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={cctv}
          menuLabel={"안전관리 CCTV"}
          menuLink={"/products/cctv"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={crane}
          menuLabel={"타워크레인 통합안전"}
          menuLink={"/products/tower-crane"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={sensor}
          menuLabel={"환경센서"}
          menuLink={"/products/sensors"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
        <MobileMenu
          menuIcon={promote}
          menuLabel={"방송시스템"}
          menuLink={"/products/broadcast"}
          foldStatus={foldStatus}
          setFoldStatus={setFoldStatus}
        />
      </div>
    </div>
  );
}
