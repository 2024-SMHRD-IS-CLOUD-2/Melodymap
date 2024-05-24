import React, { useEffect, useState } from "react";
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
import Resultsave from "./Resultsave";
const { Kakao } = window;

const saveButtonStyle = {
  backgroundColor: "rgb(212, 241, 253)",
  width: "220px",
  height: "50px",
  fontSize: "24px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "40px",
};

const Result = () => {
  const location = useLocation();
  const { choice } = useTest();
  const { music, place, sleep } = location.state || {};
  const navigate = useNavigate();
  const [visited, setVisited] = useState(
    localStorage.getItem("visited") === "true"
  );

  const handleVisitClick = () => {
    setVisited(true);
    localStorage.setItem("visited", "true");
  };

  const [showRecommendation, setShowRecommendation] = useState(false);

  const distributeMusic = (musicArray, placeArray) => {
    const chunkSize = 5;
    return placeArray.map((place, index) => {
      const start = index * chunkSize;
      return {
        ...place,
        music: musicArray.slice(start, start + chunkSize),
      };
    });
  };

  const placesWithMusic = distributeMusic(music, place);

  const musicDataSend = (selectedPlace) => {
    navigate("/detail", {
      state: { music: selectedPlace.music, place: selectedPlace, sleep },
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    console.log(Kakao.isInitialized());
  }, []);

  const mbtiCharacteristics = {
    INTP: {
      text: "사색적 여행가",
      color: "#3f3f3f",
      tags: "#..생각중 #상상더하기",
      description:
        "철학, 사색, 아이디어에 목마른 여행가! 생각할 수 있게 하는 여행지로 향해 사색에 빠지는걸 좋아하는 타입",
    },
    // ... 나머지 MBTI 특성들
  };

  const renderTitle = () => {
    const key = Object.keys(mbtiCharacteristics).find((key) =>
      choice.includes(key)
    );
    if (key) {
      return (
        <h1 className="d1R">
          당신은
          <br />
          <span
            className="recoR"
            style={{ color: mbtiCharacteristics[key].color }}
          >
            {mbtiCharacteristics[key].text}
          </span>
        </h1>
      );
    }
    return null;
  };

  const TagTitle = () => {
    const key = Object.keys(mbtiCharacteristics).find((key) =>
      choice.includes(key)
    );
    if (key) {
      return (
        <div className="tag-title">
          <p>{mbtiCharacteristics[key].tags}</p>
          <p>{mbtiCharacteristics[key].description}</p>
        </div>
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
              {TagTitle()}
              {placesWithMusic &&
                placesWithMusic
                  .slice(0, showRecommendation ? placesWithMusic.length : 1)
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
                {showRecommendation ? "숨기기" : "+ 더보기"}
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
                <Resultsave>결과 저장하기</Resultsave>
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
              <div className="aaa" onClick={handleVisitClick}>
                <a
                  href="http://smhrd.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/image/smhrd.png`}
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
