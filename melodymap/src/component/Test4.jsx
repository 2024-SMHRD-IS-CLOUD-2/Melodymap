import React from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";
import "../css/Test.css";

const Testpage = () => {
  const navigate = useNavigate();
  const { addSelection } = useTest();
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="question">Q 04.</h1>
          <h1 className="content">
            여행 중 점심시간이 되어 차를 타고 맛집에 갈 예정이다
            <br />
            이때 당신의 생각은?
          </h1>
          <button
            onClick={() => {
              navigate("/test5");
              addSelection("J");
            }}
            className="que1"
          >
            주차할 장소가 있는지 주변을 확인해봐야겠어.
          </button>
          <button
            onClick={() => {
              navigate("/test5");
              addSelection("P");
            }}
            className="que2"
          >
            일단 가서 자리 있는지 확인하지 뭐
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
