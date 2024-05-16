import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/result.css";
import { useTest } from "../context/TestContext";
import { useLocation } from "react-router-dom";
import {
  shareKakao,
  shareNaver,
  shareFacebook,
  shareTwitter,
  shareTelegram,
} from "../ShareKakao";
const { Kakao } = window;

const Result = () => {
  // useLocation을 사용하여 navigate로 전달된 state에 접근
  const location = useLocation();
  const { music, place } = location.state || {};

  // useLocation 훅을 사용하여 라우터의 위치 객체 접근
  // 네비게이션 시 전달된 state를 구조분해 할당하여 사용

  console.log(place);
  const navigate = useNavigate();
  const { selections } = useTest();
  const [visited, setVisited] = useState(() => {
    const saved = localStorage.getItem("visited");
    return saved === "true";
  });
  const [showRecommendation, setShowRecommendation] = useState(false); // 추가: 추천 영역 표시 여부 상태
  const musicDataSend = () => {
    navigate("/detail", { state: { music } });
  };

  useEffect(() => {
    localStorage.setItem("visited", visited);
  }, [visited]);

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    console.log(Kakao.isInitialized());
  }, []);

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
              {place.map((place) => (
                <div className="image-wrapperR">
                  <div className="center1R">
                    <button
                      onClick={() => {
                        musicDataSend();
                      }}
                      className="musicR"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/image/Meta.jpg`}
                        alt="Main Image"
                        className="imageR"
                      />
                    </button>

                    <div className="explain0R">
                      <p className="explain1R">{place.poi_info}</p>
                      <p className="explain2R">{place.poi_name}</p>
                    </div>
                  </div>
                </div>
              ))}
              {showRecommendation && ( // showRecommendation이 true일 때만 화면에 보임
                <div className="image-wrapper2R">
                  <div className="center2R">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/JNW.png`}
                      alt="Main Image"
                      className="imageR"
                    />
                    <div className="explain3R">
                      <p className="explain4R">자연 경관을 담은</p>
                      <p className="explain5R">담양 죽녹원</p>
                    </div>
                  </div>
                </div>
              )}
              <button
                className="reco2R"
                onClick={() => setShowRecommendation(!showRecommendation)} // 버튼 클릭 시 showRecommendation 토글
              >
                + 추천
              </button>
              <div className="pbuttonR">
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
              </div>
              <div>
                {/* 카카오톡 공유하기 */}
                <p>공유하기</p>
                <button
                  id="kakaotalk-sharing-btn"
                  style={{
                    border: "none",
                  }}
                  onClick={() => {
                    shareKakao();
                  }}
                >
                  <img
                    src="https://developers.kakao.com/tool/resource/static/img/button/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                    alt="카카오톡"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                  />
                </button>
                {/* 페이스북 */}
                <button
                  style={{
                    border: "none",
                  }}
                  onClick={() => shareFacebook()}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    alt="페이스북"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                  />
                </button>
                {/* 네이버 */}
                <button
                  style={{
                    border: "none",
                  }}
                  onClick={() => shareNaver()}
                >
                  <img
                    src="https://i.namu.wiki/i/p_1IEyQ8rYenO9YgAFp_LHIAW46kn6DXT0VKmZ_jKNijvYth9DieYZuJX_E_H_4GkCER_sVKhMqSyQYoW94JKA.svg"
                    alt="네이버"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                  />
                </button>
                {/* 트위터 */}
                <button
                  style={{
                    border: "none",
                  }}
                  onClick={() => shareTwitter()}
                >
                  <img
                    src="https://s.widget-club.com/web/no2/7e6c8b4f8f0044949a80e97475955286.png"
                    alt="트위터"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                  />
                </button>
                {/* 텔레그램 */}
                <button
                  style={{
                    border: "none",
                  }}
                  onClick={() => shareTelegram()}
                >
                  <img
                    src="https://i.namu.wiki/i/71T_FtmH0B35AKStPtm3TvRJQyRrsm59YyGWH-Imyu5C3kfbUHD_bvFceM6LaNhkcrwDS84luPWef7jYVNWFNQ.svg"
                    alt="텔레그램"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                  />
                </button>
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
