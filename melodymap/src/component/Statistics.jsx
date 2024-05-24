import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/statistics.css";
import Barchart from "./Barchart";
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

  // 각 항목의 type에 폰트 스타일을 적용한 새로운 mbtiData 배열 생성
  const styledMbtiData1 = mbtiData1.map((item) => ({
    type: item.type, // JSX 요소를 문자열로 변경
    count: item.count,
  }));

  const styledMbtiData2 = mbtiData2.map((item) => ({
    type: item.type, // JSX 요소를 문자열로 변경
    count: item.count,
  }));

  return (
    <div className="containerS">
      <div className="wrapperS">
        <div className="contentS">
          <SideBar />
          {/* 테이블 제목 */}
          <div className="rankS">
            <p style={{ fontFamily: "WavvePADO-Regular", fontSize: "30px" }}>
              이번주 전체 유형 순위
            </p>
            <div className="firstS">
              <Barchart
                style={{ fontFamily: "WavvePADO-Regular" }}
                mbtiData={styledMbtiData1}
                className="barchart"
              />
            </div>
            <div className="secondS">
              <Barchart
                style={{ fontFamily: "WavvePADO-Regular" }}
                mbtiData={styledMbtiData2}
                className="barchart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
