import React from "react";
interface Props {
  children: React.ReactNode;
}
export default function BodyWrapper({ children }: Props) {
  return (
    <div className="px-4 md:px-6 xl:px-0 max-w-[1024px] mx-auto">
      {children}
    </div>
  );
}
