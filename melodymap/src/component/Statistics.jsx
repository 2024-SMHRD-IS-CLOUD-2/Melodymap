import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/statistics.css";
import Barchart from "./Barchart";
import SideBar from "./SideBar";

const Statistics = () => {
  const mbtiData1 = [
    { type: "지적인 ", count: 87 },
    { type: "나른한", count: 152 },
    { type: "따듯한", count: 56 },
    { type: "피곤한", count: 70 },
    { type: "분석적인", count: 95 },
    { type: "예술적인", count: 120 },
    { type: "수호적인", count: 57 },
    { type: "영리한", count: 97 },
    // 나머지 MBTI 유형 및 각 유형의 통계 데이터를 배열에 추가
  ];

  const mbtiData2 = [
    { type: "창의적인", count: 95 },
    { type: "호탕한", count: 152 },
    { type: "친철한", count: 142 },
    { type: "온화한", count: 56 },
    { type: "시원한", count: 65 },
    { type: "지도적인", count: 121 },
    { type: "사교적인", count: 85 },
    { type: "모범적인", count: 60 },
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
              실시간 전체 유형 순위
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
