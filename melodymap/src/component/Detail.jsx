import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/detail.css";
import SideBar from "./SideBar";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { music, place } = location.state || {};

  // place.poi_tag 값을 배열로 변환
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

    const displayedTags = tags.slice(0, 10);
    const additionalTags = tags.length > 10 ? "..." : "";

    return displayedTags.join(", ") + additionalTags;
  };

  return (
    <div className="containerD">
      <div className="wrapperD">
        <div className="allD">
          <SideBar />

          <div>
            <p className="travelD">{place.poi_name}</p>
            <p className="explainD">{renderPoiTags(place.poi_tag)}</p>
            <img src={place.img_rname} alt="Main Image" className="imageD" />
            <p className="explain2D">상세설명</p>
            <div className="lineD"></div>

            <p className="explain3D">{place.poi_desc}</p>
          </div>

          <p className="recoD">추천음악</p>
          <div className="lineD"></div>

          <div className="musicTableContainer">
            <table className="musicTD">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>곡정보</th>
                  <th>가수</th>
                  <th>장르</th>
                </tr>
              </thead>
              <tbody>
                {music.map((music, index) => (
                  <tr key={index} className="musicRow">
                    <td>{index + 1}</td>
                    <td className="musicTitleCell">
                      <img src={music.music_image} className="sing1D" />
                      {music.music_title}
                    </td>
                    <td>{music.music_singer}</td>
                    <td>{music.music_genre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <p className="mapD">지도</p>
            <div className="lineD"></div>
            <img
              src={`${process.env.PUBLIC_URL}/image/naver_map.png`}
              className="mapD"
              style={{ width: "300px", height: "300px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
