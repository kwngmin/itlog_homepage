import React from "react";

export default function Solution() {
  return (
    <div className="my-20 p-10 sm:px-12 py-16 rounded-3xl bg-gradient-to-br from-slate-100 to-red-50">
      <h1 className="sm:hidden leading-tighter break-keep text-3xl font-bold tracking-tight">
        Integrated
        <br />
        <strong className="text-red-500">
          {" "}
          IoT
          <br />
        </strong>{" "}
        Solution
      </h1>
      <h1 className="hidden sm:block leading-tighter break-keep text-4xl font-bold tracking-tight">
        Integrated
        <strong className="text-red-500"> IoT</strong> Solution
      </h1>
      <p className="break-keep sm:w-10/12 md:w-11/12 tracking-tighter text-lg sm:text-xl md:text-2xl mt-2 leading-relaxed sm:leading-relaxed md:leading-relaxed text-black/70">
        <strong className="font-bold text-red-500">아이티로그</strong>
        {`는 오랜
        오랜 경력으로 쌓아온 노하우로 소프트웨어 및 하드웨어, 웹 서비스 그리고
        높은 수준의 기술력과 전문성으로 `}
        <span className="text-black/90 font-medium">
          통합 <strong className="text-red-500">IoT</strong> 솔루션
        </span>
        을 제공합니다.
      </p>
    </div>
  );
}
