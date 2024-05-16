import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/mypage.css";

const Mypage = () => {
  const navigate = useNavigate();
  return (
    <div className="container8">
      <div className="wrapper8">
        <div className="content8">
          <div className="mypageM">
            <p>나의 여행지</p>
          </div>
          <div>
            <p>당신은 분석적인 여행가 입니다</p>
            <p>추천 여행지 : 보성 골망태다원</p>
            <p>추천 음악</p>
            <p>좋은 날 - 아이유</p>
            <p>비행기 - 거북이</p>
            <p>밤양갱 - 비비</p>
          </div>
          <button
            onClick={() => {
              navigate("/travelboard");
            }}
            className="writeM"
          >
            여행후기 쓰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
