import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/result.css";
import { useTest } from "../context/TestContext";
import {
  shareKakao,
  shareNaver,
  shareFacebook,
  shareTwitter,
  shareTelegram,
} from "../ShareKakao";
import SideBar from "./SideBar";
const { Kakao } = window;

const Result = () => {
  const location = useLocation();
  const { music, place } = location.state || {};
  const navigate = useNavigate();
  const { choice } = useTest();
  const [visited, setVisited] = useState(() => {
    const saved = localStorage.getItem("visited");
    return saved === "true";
  });
  const [showRecommendation, setShowRecommendation] = useState(false);

  const musicDataSend = (selectedPlace) => {
    navigate("/detail", { state: { music, place: selectedPlace } });
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
    const titles = {
      INTP: { text: "영리한 여행가", color: "#3f3f3f" },
      INTJ: { text: "지적인 여행가", color: "#e63e4f" },
      INFP: { text: "나른한 여행가", color: "#ec96ef" },
      INFJ: { text: "따뜻한 여행가", color: "#ccb1de" },
      ENTP: { text: "창의적인 여행가", color: "#d6c7b9" },
      ENTJ: { text: "호탕한 여행가", color: "#b3eaa6" },
      ENFP: { text: "친절한 여행가", color: "#d4f29c" },
      ENFJ: { text: "온화한 여행가", color: "#f99fae" },
      ISTP: { text: "피곤한 여행가", color: "#48518f" },
      ISTJ: { text: "분석적인 여행가", color: "#9d9c97" },
      ISFP: { text: "예술적인 여행가", color: "#fff06d" },
      ISFJ: { text: "수호적인 여행가", color: "#81b2ff" },
      ESTP: { text: "시원한 여행가", color: "#a9ebd6" },
      ESTJ: { text: "지도적인 여행가", color: "#ffbf96" },
      ESFP: { text: "사교적인 여행가", color: "#9fd8f9" },
      ESFJ: { text: "모범적인 여행가", color: "#faee9d" },
    };

    const key = Object.keys(titles).find((key) => choice.includes(key));
    if (key) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span className="recoR" style={{ color: titles[key].color }}>
            {titles[key].text}
          </span>
        </h1>
      );
    }
    return null;
  };

  const renderPoiTags = (tags) => {
    if (typeof tags === "string") {
      // 문자열을 배열로 변환
      try {
        tags = JSON.parse(tags.replace(/'/g, '"'));
      } catch (error) {
        console.error("Error parsing tags:", error);
        tags = [];
      }
    }

    if (!Array.isArray(tags)) return "";

    const displayedTags = tags.slice(0, 5);
    const additionalTags = tags.length > 5 ? "..." : "";

    return displayedTags.join(", ") + additionalTags;
  };

  return (
    <>
      {visited ? (
        <div className="containerR">
          <div className="wrapperR">
            <SideBar />
            <div className="contentR">
              {renderTitle()}
              {place &&
                place
                  .slice(0, showRecommendation ? place.length : 1)
                  .map((place, index) => (
                    <div className="image-wrapperR" key={index}>
                      <div className="center1R">
                        <button
                          onClick={() => musicDataSend(place)}
                          className="musicR"
                        >
                          <img
                            src={place.img_rname}
                            alt="Main Image"
                            className="imageR"
                          />
                        </button>
                        <div className="explain0R">
                          <p className="explain1R">
                            {renderPoiTags(place.poi_tag)}
                          </p>
                          <p className="explain2R">{place.poi_name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              <button
                className="reco2R"
                onClick={() => setShowRecommendation(!showRecommendation)}
              >
                {showRecommendation ? "숨기기" : "+ 추천"}
              </button>
              <div>
                <div>
                  <p className="otherR">다른 여행가 통계</p>
                </div>
                <button
                  onClick={() => {
                    navigate("/statistics");
                  }}
                  className="otherResult"
                >
                  보러가기
                </button>
                <button
                  onClick={() => {
                    navigate("/mypage");
                  }}
                  className="saveR"
                >
                  결과 저장하기
                </button>
                <button
                  id="kakaotalk-sharing-btn"
                  style={{
                    border: "none",
                    backgroundColor: "whitesmoke",
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
                <button
                  style={{
                    border: "none",
                    backgroundColor: "whitesmoke",
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
                <button
                  style={{
                    border: "none",
                    backgroundColor: "whitesmoke",
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
                <button
                  style={{
                    border: "none",
                    backgroundColor: "whitesmoke",
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
                <button
                  style={{
                    border: "none",
                    backgroundColor: "whitesmoke",
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
              <div className="aaa" onClick={() => setVisited(true)}>
                <a
                  href="http://smhrd.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="public/image/Melodymap.webp"
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
