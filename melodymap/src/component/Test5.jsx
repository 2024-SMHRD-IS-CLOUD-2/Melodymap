import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Test.css";

const Testpage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="question">Q 05.</h1>
          <h1 className="content">
            햇빛이 뜨거운 여름 날씨,
            <br />
            흥미가 생기는 여행 코스는?
          </h1>
          <button
            onClick={() => {
              navigate("/test6");
            }}
            className="que1"
          >
            이런 더운날에는 스포츠 레저가 최고지! 바다로 가자!
          </button>
          <button
            onClick={() => {
              navigate("/test6");
            }}
            className="que2"
          >
            더운날에는 등산 한 번 하고 내려오는 길에 막걸리 한 잔 하는게 최고지!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
