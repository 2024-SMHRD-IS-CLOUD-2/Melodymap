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
          <h1 className="question">Q 08.</h1>
          <h1 className="content">
            여행 장소를 고를 때, 가장 중요하게 고려하는 요소는?
            <br />
          </h1>
          <button
            onClick={() => {
              navigate("/test9");
              addSelection("L");
            }}
            className="que1"
          >
            에너지 넘치고 시끌벅적한 여행지
          </button>
          <button
            onClick={() => {
              navigate("/test9");
              addSelection("Q");
            }}
            className="que2"
          >
            조용하고 평화로운 여행지
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
