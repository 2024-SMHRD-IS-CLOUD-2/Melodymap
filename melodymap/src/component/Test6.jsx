import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Test.css";

const Testpage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="question">Q 06.</h1>
          <h1 className="content">
            당신의 여행 목적은?
            <br />
          </h1>
          <button
            onClick={() => {
              navigate("/test7");
            }}
            className="que1"
          >
            답답한 도시를 떠나 자연 경치를 보면서 힐링!
          </button>
          <button
            onClick={() => {
              navigate("/test7");
            }}
            className="que2"
          >
            여행은 맛집을 찾아 다니면서 먹스타그램 하는거지!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
