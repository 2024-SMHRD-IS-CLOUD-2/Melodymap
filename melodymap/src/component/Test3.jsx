import React from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";
import TestProgress from "./TestProgress";
import "../css/Test.css";

const Testpage = () => {
  const navigate = useNavigate();
  const { addSelection } = useTest();

  const currentStep = 3; // 현재 페이지 번호
  const totalSteps = 10; // 총 페이지 수

  return (
    <div className="container">
      <div className="wrapper">
        <TestProgress currentStep={currentStep} totalSteps={totalSteps} />
        <div>
          <h1 className="question">Q 03.</h1>
          <h1 className="content">
            동전이 들어가면 사랑에
            <br></br>
            성공한다는 분수대에 도착
            <br />
            이때 당신의 생각은?
          </h1>
          <button
            onClick={() => {
              navigate("/test4");
              addSelection("T");
            }}
            className="que1"
          >
            저거 동전 다 모으면 얼마지? 관리소에서 회수해 가는건가?...
          </button>
          <button
            onClick={() => {
              navigate("/test4");
              addSelection("F");
            }}
            className="que2"
          >
            우와.. 낭만적이다 꼭 한 번에 성공해야지!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
