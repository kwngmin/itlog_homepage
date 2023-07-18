import React, { Dispatch, SetStateAction } from "react";
import MobileMenu from "./MobileMenu";
import cone from "../../public/icons/traffic-cone.png";
import solution from "../../public/icons/solution.png";

interface Props {
  foldStatus: boolean;
  setFoldStatus: Dispatch<SetStateAction<boolean>>;
}
export default function AboutSolutions({ foldStatus, setFoldStatus }: Props) {
  return (
    <div>
      <h3 className="text-lg font-bold text-black/70 px-2">솔루션</h3>
      <div className="grid grid-cols-4 gap-3 items-start justify-between w-full my-3">
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
      </div>
    </div>
  );
}
