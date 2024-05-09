import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";
import TestProgress from "./TestProgress";
import "../css/Test.css";

const Test1 = () => {
  const navigate = useNavigate();
  const { selections, addSelection } = useTest();

  useEffect(() => {
    localStorage.removeItem("visited");
  }, []);

  const currentStep = 1; // 현재 페이지 번호
  const totalSteps = 10; // 총 페이지 수

  const handleButtonClick = (selection) => {
    addSelection(selection);
    navigate(`/test${currentStep + 1}`);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <TestProgress currentStep={currentStep} totalSteps={totalSteps} />
        <h1 className="question">Q 01.</h1>
        <div className="content">
          산뜻한 주말 봄날 벚꽃이
          <br />
          활짝 폈다. 당신의 선택은?
        </div>
        <div className="info">
          <button onClick={() => handleButtonClick("E")} className="que1">
            이런 날씨에는 무조건 밖에 나가서 친구들이랑 놀아야지
          </button>
          <button onClick={() => handleButtonClick("I")} className="que2">
            날씨도 좋으니까 집에서 드라마나 보면서 쉬어야지~
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test1;
