import React from "react";
import InstanceCard from "./InstanceCard";

export default function Instance() {
  return (
    <div className="my-60">
      <h1 className="leading-tight break-keep text-3xl sm:text-4xl font-bold tracking-tight">
        시공사례
      </h1>
      <div className="flex gap-4 overflow-x-auto bg-gray-50 lg:bg-transparent mt-6 lg:pt-0 rounded-2xl px-12 lg:px-0">
        <InstanceCard />
        <InstanceCard />
        <InstanceCard />
      </div>
    </div>
  );
}
