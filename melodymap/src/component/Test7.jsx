import React from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";
import TestProgress from "./TestProgress";
import "../css/Test.css";
import SideBar from "./SideBar";
const Test7 = () => {
  const navigate = useNavigate();
  const { addSelection } = useTest();
  const currentStep = 7;
  const totalSteps = 10;

  const handleButtonClick = (selection) => {
    addSelection(selection);
    navigate(`/test${currentStep + 1}`);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <SideBar />
        <TestProgress currentStep={currentStep} totalSteps={totalSteps} />
        <h1 className="question">Q 07.</h1>
        <div className="content">
          약속장소가 차, 도보 둘 다 애매한 위치에 있다. 당신의 선택은?
        </div>
        <div className="info">
          <button onClick={() => handleButtonClick("A")} className="que1">
            아.. 걷는 건 힘들어 버스나 택시타야지
          </button>
          <button onClick={() => handleButtonClick("W")} className="que2">
            음.. 뭐 이정도 거리면 걸어가도 되겠다
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test7;
