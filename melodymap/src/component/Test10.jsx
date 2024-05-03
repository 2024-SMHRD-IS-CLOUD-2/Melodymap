import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Test.css";

const Testpage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="question">Q 10.</h1>
          <h1 className="content">
            여행을 가기위해 숙소를
            <br></br>
            예약해야 한다.
            <br />
            당신의 선택은?
          </h1>
          <button
            onClick={() => {
              navigate("/coupang");
            }}
            className="que1"
          >
            잠만 자면 됐지.. 가성비로 가자
          </button>
          <button
            onClick={() => {
              navigate("/coupang");
            }}
            className="que2"
          >
            이것도 여행의 일부지 이왕이면 최고로 가자!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
