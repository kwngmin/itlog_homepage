import React from "react";
interface Props {
  children: React.ReactNode;
}

export default function MainWrapper({ children }: Props) {
  return <div className="relative overflow-auto h-screen">{children}</div>;
}
