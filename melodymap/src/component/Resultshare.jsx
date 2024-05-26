import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "./SideBar";

const Resultshare = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const choice = searchParams.get("choice");
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const mbtiCharacteristics = {
    INTP: {
      text: "사색적 여행가",
      color: "#3f3f3f",
      tags: "#..생각중 #상상더하기",
      description:
        "철학, 사색, 아이디어에 목마른 여행가! 생각할 수 있게 하는 여행지로 향해 사색에 빠지는걸 좋아하는 타입",
    },
    // ... (다른 MBTI 특성 정의)
  };

  const sendDataToServer = async (choice) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jo07xi8kmg.execute-api.ap-northeast-2.amazonaws.com",
        {
          choice: choice,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "spring.cloud.function.definition": "getChoice",
          },
        }
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (choice) {
      sendDataToServer(choice);
    }
  }, [choice]);

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

  const placesWithMusic =
    data?.music && data?.places ? distributeMusic(data.music, data.places) : [];

  const TagTitle = () => {
    const key = Object.keys(mbtiCharacteristics).find((key) =>
      choice.includes(key)
    );
    if (key) {
      return (
        <div className="tag-title">
          <p>{mbtiCharacteristics[key].tags}</p>
          <p>{mbtiCharacteristics[key].description}</p>
          <b>※사진을 클릭하면 세부정보와</b>
          <br />
          <b>&nbsp;&nbsp;&nbsp;음악추천을 받을 수 있어요!</b>
          <br />
          <br />
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
    <div className="containerR">
      <div className="wrapperR">
        <SideBar />
        <div className="contentR">
          {renderTitle()}
          {TagTitle()}
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {placesWithMusic &&
            placesWithMusic
              .slice(0, showRecommendation ? placesWithMusic.length : 1)
              .map((place, index) => (
                <div className="image-wrapperR" key={index}>
                  <div className="center1R">
                    <button className="musicR">
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
          <button className="reco2R" onClick={() => navigate("/")}>
            나도추천받기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resultshare;
