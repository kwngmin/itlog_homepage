import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  route: string;
  setPopUpMenu: Dispatch<SetStateAction<boolean>>;
}
export default function DesktopMenu({ name, route, setPopUpMenu }: Props) {
  const router = useRouter();
  const clickEvent = () => {
    router.push(route);
    setPopUpMenu(false);
  };
  return (
    <button
      onMouseDown={() => clickEvent()}
      className="hover:bg-slate-100 text-black/70 hover:text-black font-medium h-16 flex items-center px-6 tracking-tight select-none"
    >
      {name}
    </button>
  );
}
