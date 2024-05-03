import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Test.css";

const Testpage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="question">Q 09.</h1>
          <h1 className="content">
            친구들과 여행을 가기로 하고 계획을 세우려고 한다.
            <br />
            선호하는 일정은?
          </h1>
          <button
            onClick={() => {
              navigate("/test10");
            }}
            className="que1"
          >
            난 집 아닌 곳에서 못자.. 당일치기로 가자
          </button>
          <button
            onClick={() => {
              navigate("/test10");
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