import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/result.css";
import { useTest } from "../context/TestContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Result = () => {
  // useLocation을 사용하여 navigate로 전달된 state에 접근
  const location = useLocation();
  const { musicDetails, placeDetails } = location.state || {};

  // useLocation 훅을 사용하여 라우터의 위치 객체 접근
  // 네비게이션 시 전달된 state를 구조분해 할당하여 사용

  console.log(placeDetails);
  const navigate = useNavigate();
  const { selections } = useTest();
  const [visited, setVisited] = useState(() => {
    const saved = localStorage.getItem("visited");
    return saved === "true";
  });
  const [showRecommendation, setShowRecommendation] = useState(false); // 추가: 추천 영역 표시 여부 상태
  const musicDataSend = () => {
    navigate("/detail", { state: { musicDetails, placeDetails } });
  };

  useEffect(() => {
    localStorage.setItem("visited", visited);
  }, [visited]);

  const renderTitle = () => {
    if (selections.includes("INTP")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#3f3f3f" }}>
            영리한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("INTJ")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#e63e4f" }}>
            지적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("INFP")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#ec96ef" }}>
            나른한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("INFJ")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#ccb1de" }}>
            따뜻한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ENTP")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#d6c7b9" }}>
            창의적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ENTJ")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#b3eaa6" }}>
            호탕한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ENFP")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#d4f29c" }}>
            친절한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ENFJ")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#f99fae" }}>
            온화한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ISTP")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#48518f" }}>
            피곤한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ISTJ")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#9d9c97" }}>
            분석적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ISFP")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#fff06d" }}>
            예술적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ISFJ")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#81b2ff" }}>
            수호적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ESTP")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#a9ebd6" }}>
            시원한 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ESTJ")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#ffbf96" }}>
            지도적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ESFP")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#9fd8f9" }}>
            사교적인 여행가
          </span>
        </h1>
      );
    } else if (selections.includes("ESFJ")) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: "#faee9d" }}>
            모범적인 여행가
          </span>
        </h1>
      );
    }
  };

  return (
    <>
      {visited ? (
        <div className="containerR">
          <div className="wrapperR">
            <div className="contentR">
              {renderTitle()}

              {placeDetails
                .slice(0, showRecommendation ? placeDetails.length : 1)
                .map((place, index) => (
                  <div key={index} className="image-wrapperR">
                    <div className="center1R">
                      <button
                        onClick={() => musicDataSend()}
                        className="musicR"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/image/Meta.jpg`}
                          alt="Main Image"
                          className="imageR"
                        />
                      </button>
                      <div className="explain0R">
                        <p className="explain1R">{place.poiInfo}</p>
                        <p className="explain2R">{place.poiName}</p>
                      </div>
                    </div>
                  </div>
                ))}
              {showRecommendation && (
                <div className="image-wrapper2R">
                  <div className="center2R">{/* 내용 추가 */}</div>
                </div>
              )}
              <button
                className="reco2R"
                onClick={() => setShowRecommendation(!showRecommendation)}
              >
                {showRecommendation ? "숨기기" : "+ 추천"}
              </button>

              {/*  <div className="pbuttonR">
                <button
                  onClick={() => {
                    navigate("/Login");
                  }}
                  className="login1R"
                >
                  로그인
                </button>
                <button
                  onClick={() => {
                    navigate("/Join");
                  }}
                  className="Join1R"
                >
                  회원가입
                </button>
              </div> */}
              <div>
                <p className="otherR">다른 유형의 여행지</p>
              </div>
              <button
                onClick={() => {
                  navigate("/statistics");
                }}
                className="otherResult"
              >
                보러가기
              </button>
              <div>
                <a>
                  <img
                    className="kakaotalkR"
                    src={`${process.env.PUBLIC_URL}/image/kakaotalk.png`}
                  />
                </a>
                <a>
                  <img
                    className="facebookR"
                    src={`${process.env.PUBLIC_URL}/image/facebook.png`}
                  />
                </a>
                <a>
                  <img
                    className="bandR"
                    src={`${process.env.PUBLIC_URL}/image/band.png`}
                  />
                </a>
                <a>
                  <img
                    className="navertalkR"
                    src={`${process.env.PUBLIC_URL}/image/navertalk.png`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="containerR">
          <div className="wrapperR">
            <div className="contentR">
              <div onClick={() => setVisited(true)}>
                <a
                  href="http://smhrd.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./image/smhrd.png"
                    style={{ width: "300px", height: "250px" }}
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
