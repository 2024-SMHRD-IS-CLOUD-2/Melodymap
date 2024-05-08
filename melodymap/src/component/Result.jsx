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
  const [showRecommendation, setShowRecommendation] = useState(false); // 추가: 추천 영역 표시 여부 상태

  useEffect(() => {
    localStorage.setItem("visited", visited);
  }, [visited]);

  const renderTitle = () => {
    if (selections.includes("INTP")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#3f3f3f" }}>
            영리한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("INTJ")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#e63e4f" }}>
            지적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("INFP")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#ec96ef" }}>
            나른한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("INFJ")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#ccb1de" }}>
            따뜻한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ENTP")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#d6c7b9" }}>
            창의적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ENTJ")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#b3eaa6" }}>
            호탕한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ENFP")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#d4f29c" }}>
            친절한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ENFJ")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#f99fae" }}>
            온화한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ISTP")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#48518f" }}>
            피곤한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ISTJ")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#9d9c97" }}>
            분석적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ISFP")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#fff06d" }}>
            예술적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ISFJ")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#81b2ff" }}>
            수호적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ESTP")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#a9ebd6" }}>
            시원한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ESTJ")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#ffbf96" }}>
            지도적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ESFP")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#9fd8f9" }}>
            사교적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ESFJ")) {
      return (
        <h1 className="d1">
          당신은
          <span className="reco" style={{ color: "#faee9d" }}>
            모범적인 여행가
          </span>
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
                <div className="center1">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/Meta.jpg`}
                    alt="Main Image"
                    className="image"
                  />
                  <div className="explain0">
                    <p className="explain1">멋진 풍경을 담은</p>
                    <p className="explain2">담양 메타프로방스</p>
                  </div>
                </div>
              </div>
              {showRecommendation && ( // showRecommendation이 true일 때만 화면에 보임
                <div className="image-wrapper2">
                  <div className="center2">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/JNW.png`}
                      alt="Main Image"
                      className="image"
                    />
                    <div className="explain3">
                      <p className="explain4">자연 경관을 담은</p>
                      <p className="explain5">담양 죽녹원</p>
                    </div>
                  </div>
                </div>
              )}
              <button
                className="reco2"
                onClick={() => setShowRecommendation(!showRecommendation)} // 버튼 클릭 시 showRecommendation 토글
              >
                + 추천
              </button>
              <div className="pbutton">
                <button
                  onClick={() => {
                    navigate("/Login");
                  }}
                  className="login1"
                >
                  로그인
                </button>
                <button
                  onClick={() => {
                    navigate("/Join");
                  }}
                  className="Join1"
                >
                  회원가입
                </button>
              </div>
              <div>
                <a>
                  <img
                    className="kakaotalk"
                    src={`${process.env.PUBLIC_URL}/image/kakaotalk.png`}
                  />
                </a>
                <a>
                  <img
                    className="facebook"
                    src={`${process.env.PUBLIC_URL}/image/facebook.png`}
                  />
                </a>
                <a>
                  <img
                    className="band"
                    src={`${process.env.PUBLIC_URL}/image/band.png`}
                  />
                </a>
                <a>
                  <img
                    className="navertalk"
                    src={`${process.env.PUBLIC_URL}/image/navertalk.png`}
                  />
                </a>
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
