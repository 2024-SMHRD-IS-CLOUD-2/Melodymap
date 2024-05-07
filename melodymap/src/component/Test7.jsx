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
          <h1 className="question">Q 07.</h1>
          <h1 className="content">
            친구와의 약속장소가 차,도보
            <br></br>
            둘 다 애매한 위치에 있다.
            <br />
            당신의 선택은?
          </h1>
          <button
            onClick={() => {
              navigate("/test8");
              addSelection("T");
            }}
            className="que1"
          >
            아.. 걷는 건 힘들어 버스나 택시타야지
          </button>
          <button
            onClick={() => {
              navigate("/test8");
              addSelection("W");
            }}
            className="que2"
          >
            음.. 뭐 이정도 거리면 걸어가도 되겠다
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
