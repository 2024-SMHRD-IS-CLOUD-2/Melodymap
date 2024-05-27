import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/statistics.css";
import MBTIBarChart from "./Barchart";
import SideBar from "./SideBar";

const Statistics = () => {
  const mbtiData1 = [
    { type: "사색적", count: 87 },
    { type: "전략적", count: 152 },
    { type: "꿈꾸는", count: 56 },
    { type: "따뜻한", count: 70 },
    { type: "피곤한", count: 95 },
    { type: "철저한", count: 120 },
    { type: "감성적인", count: 57 },
    { type: "따스한", count: 97 },
    // 나머지 MBTI 유형 및 각 유형의 통계 데이터를 배열에 추가
  ];

  const mbtiData2 = [
    { type: "시원한", count: 95 },
    { type: "지도적인", count: 152 },
    { type: "사교적인", count: 142 },
    { type: "친화적인", count: 56 },
    { type: "탐험적", count: 65 },
    { type: "완벽주의", count: 121 },
    { type: "신나는", count: 85 },
    { type: "온화한", count: 60 },
    // 나머지 MBTI 유형 및 각 유형의 통계 데이터를 배열에 추가
  ];

  return (
    <div className="containerS">
      <div className="wrapperS">
        <div className="contentS">
          <SideBar />
          {/* 테이블 제목 */}
          <div className="rankS">
            <p style={{ fontFamily: "WavvePADO-Regular", fontSize: "30px" }}>
              전체 유형 순위
            </p>
            <div className="firstS">
              <MBTIBarChart mbtiData={mbtiData1} className="barchart" />
            </div>
            <div className="secondS">
              <MBTIBarChart mbtiData={mbtiData2} className="barchart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
