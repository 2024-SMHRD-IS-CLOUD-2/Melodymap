import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/result.css";
import { useTest } from "../context/TestContext";
import axios from "axios";

const Result = () => {
  const navigate = useNavigate();
  const { selections } = useTest();
  const [visited, setVisited] = useState(() => {
    const saved = localStorage.getItem("visited");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("visited", visited);
  }, [visited]);

  const renderTitle = () => {
    if (selections.includes("INTP")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">영리한 여행가</span>
        </h1>
      );
    } else if (selections.includes("INTJ")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">지적인 여행가</span>
        </h1>
      );
    } else if (selections.includes("INFP")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">나른한 여행가</span>
        </h1>
      );
    } else if (selections.includes("INFJ")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">따뜻한 여행가</span>
        </h1>
      );
    } else if (selections.includes("ENTP")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">창의적인 여행가</span>
        </h1>
      );
    } else if (selections.includes("ENTJ")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">호탕한 여행가</span>
        </h1>
      );
    } else if (selections.includes("ENFP")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">친절한 여행가</span>
        </h1>
      );
    } else if (selections.includes("ENFJ")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">온화한 여행가</span>
        </h1>
      );
    } else if (selections.includes("ISTP")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">피곤한 여행가</span>
        </h1>
      );
    } else if (selections.includes("ISTJ")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">분석적인 여행가</span>
        </h1>
      );
    } else if (selections.includes("ISFP")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">예술적인 여행가</span>
        </h1>
      );
    } else if (selections.includes("ISFJ")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">수호적인 여행가</span>
        </h1>
      );
    } else if (selections.includes("ESTP")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">시원한 여행가</span>
        </h1>
      );
    } else if (selections.includes("ESTJ")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">지도적인 여행가</span>
        </h1>
      );
    } else if (selections.includes("ESFP")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">사교적인 여행가</span>
        </h1>
      );
    } else if (selections.includes("ESFJ")) {
      return (
        <h1 className="d1">
          당신은<span className="reco">모범적인 여행가</span>
        </h1>
      );
    }
  };

  return (
    <>
      {visited ? (
        <div className="container">
          <div className="wrapper">
            <div className="content">
              {renderTitle()}
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
      ) : (
        <div className="container">
          <div className="wrapper">
            <div className="content">
              <div onClick={() => setVisited(true)}>
                <a
                  href="http://smhrd.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./image/smhrd.png"
                    style={{ width: "400px", height: "300px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
