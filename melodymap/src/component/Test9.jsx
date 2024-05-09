import React from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";
import TestProgress from "./TestProgress";
import "../css/Test.css";

const Testpage = () => {
  const navigate = useNavigate();
  const { addSelection } = useTest();

  const currentStep = 9; // 현재 페이지 번호
  const totalSteps = 10; // 총 페이지 수

  return (
    <div className="container">
      <div className="wrapper">
        <TestProgress currentStep={currentStep} totalSteps={totalSteps} />
        <div>
          <h1 className="question">Q 09.</h1>
          <h1 className="content">
            친구들과 여행
            <br></br>
            계획을 세우려고 한다.
            <br />
            선호하는 일정은?
          </h1>
          <button
            onClick={() => {
              navigate("/test10");
              addSelection("A");
            }}
            className="que1"
          >
            난 집 아닌 곳에서 못자.. 당일치기로 가자
          </button>
          <button
            onClick={() => {
              navigate("/test10");
              addSelection("F");
            }}
            className="que2"
          >
            모든 에너지를 쏟아서 놀고 와야지 1박2일 고고!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
