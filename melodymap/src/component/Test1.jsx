import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";
import "../css/Test.css";

const Test1 = () => {
  const navigate = useNavigate();
  const { selections, addSelection } = useTest();
  useEffect(() => {
    localStorage.removeItem("visited");
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="question">Q 01.</h1>
          <h1 className="content">
            산뜻한 주말의 봄날 벚꽃이
            <br />
            활짝 폈다. 당신의 선택은?
          </h1>
          <div className="info">
            <button
              onClick={() => {
                navigate("/test2");
                addSelection("E");
                console.log(selections);
              }}
              className="que1"
            >
              이런 날씨에는 무조건 밖에 나가서 친구들이랑 놀아야지
            </button>
            <button
              onClick={() => {
                navigate("/test2");
                addSelection("I");
              }}
              className="que2"
            >
              날씨도 좋으니까 집에서 드라마나 보면서 쉬어야지~
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test1;
