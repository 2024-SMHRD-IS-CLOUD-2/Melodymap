import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Main.css";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="wrapper">
        <div className="content">
          <div className="mainimg">
            <img
              src={`${process.env.PUBLIC_URL}/image/Main.jpg`}
              alt="Main Image"
              className="image"
            />
          </div>
          <div className="info">
            <h1 className="f">당신의 MBTI로</h1>
            <h1 className="s">떠나는 특별한</h1>
            <h1 className="d">
              여행지 <span className="reco1">추천</span>
            </h1>
          </div>
          <button
            onClick={() => {
              navigate("/Test1");
            }}
            className="start1"
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
