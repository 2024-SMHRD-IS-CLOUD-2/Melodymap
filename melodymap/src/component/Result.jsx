import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/result.css";

const Result = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="wrapper">
        <div className="content">
          <h1 className="d1">
            당신은<span className="reco">고독한 여행가</span>
          </h1>
          <div className="image-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/image/Main.jpg`}
              alt="Main Image"
              className="image"
            />
          </div>
          <div className="d2">
            <h4>추천 여행지</h4>
            <div className="button-container">
              <h3 className="explain">설명 : 아주 멋진 여행지</h3>
              <button
                onClick={() => {
                  navigate("/Login");
                }}
                className="findroad"
              >
                길찾기
              </button>
            </div>
          </div>
          <div className="d3">
            <h4>추천 음악</h4>
            <div className="button-container">
              <h3 className="singer">가수 : 제목</h3>
              <button
                onClick={() => {
                  navigate("/Join");
                }}
                className="gomusic"
              >
                플레이리스트
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
