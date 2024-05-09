import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Main.css";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="containerM">
      <div className="wrapperM">
        <div className="contentM">
          <div className="mainimgM">
            <img
              src={`${process.env.PUBLIC_URL}/image/Main.jpg`}
              alt="Main Image"
              className="imageM"
            />
          </div>
          <div className="infoM">
            <h1 className="fM">당신의 MBTI로</h1>
            <h1 className="sM">떠나는 특별한</h1>
            <h1 className="dM">
              여행지 <span className="reco1M">추천</span>
            </h1>
          </div>
          <button
            onClick={() => {
              navigate("/Test1");
            }}
            className="start1M"
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
