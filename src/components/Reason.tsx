import React from "react";
import Reasons from "./Reasons";
import bigdata from "../../public/icons/big-data.png";
import deeplearning from "../../public/icons/diagram.png";
import ai from "../../public/icons/analytics.png";
import safety from "../../public/icons/brain.png";

export default function Reason() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-24">
      <Reasons
        icon={bigdata}
        iconCss={"bg-sky-100"}
        title={"BigData"}
        text={
          "기술은 집약된 기록물을 오랜 기간 축척하여 빅데이터화하고 기계학습을 통해 99.99%의 결과물에 도달하기 위한 정성과 노력의 가치입니다."
        }
      />
      <Reasons
        icon={deeplearning}
        iconCss={"bg-green-100"}
        title={"Deep Learning"}
        text={
          "회귀분석을 통하여 예측할 수 없는 안전사고까지도 추적할 수 있을 때까지 Deep Mining과 Deep Learning의 가치를 높여 나갑니다. 가상현실(VR)이나 증강현실(AR) 기술과 결합하여 안전 교육 및 학습을 지원할 수 있습니다."
        }
      />
      <Reasons
        icon={ai}
        iconCss={"bg-red-100"}
        title={"Ai"}
        text={
          "건설산업에서 인공지능은 안전성과 기술 혁신을 결합해 현장의 효율성과 안전성을 향상시키는 중요한 도구로 사용될 수 있으며 데이터 분석과 예측 모델을 통해 프로젝트 일정과 비용을 최적화할 수 있습니다"
        }
      />
      <Reasons
        icon={safety}
        iconCss={"bg-violet-100"}
        title={"Smart Safety"}
        text={
          "우리의 안전하고 편리함을 만들어주는 모든 서비스와 기술에 대해 아이티로그는 기업의 비즈니스 혁신과 성장을 위해 오늘도 진심으로 고민합니다."
        }
      />
    </div>
  );
}
