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
          <h1 className="question">Q 02.</h1>
          <h1 className="content">
            기다리고 기다리던 여행날!
            <br />
            벌써 잠들 시간이다. 당신의 선택은?
          </h1>
          <button
            onClick={() => {
              navigate("/test3");
              addSelection("N");
            }}
            className="que1"
          >
            흠.. 일기예보는 괜찮았는데 비가 오지는 않겠지?
          </button>
          <button
            onClick={() => {
              navigate("/test3");
              addSelection("S");
            }}
            className="que2"
          >
            내일 재밌게 놀려면 바로 자야지!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
