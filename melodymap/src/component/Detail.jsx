import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";
import { useLocation } from "react-router-dom";
import "../css/detail.css";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { musicDetails, placeDetails } = location.state || {};

  // const { musicDetails, placeDetails } = location.state || {};
  console.log(musicDetails);

  return (
    <div className="containerD">
      <div className="wrapperD">
        <div className="allD">
          <p className="travelD">보성 골망태다원</p>
          <p className="explainD">"동화 속 요정의 마을 골망태 다원"</p>
          <img
            src={`${process.env.PUBLIC_URL}/image/Meta.jpg`}
            alt="Main Image"
            className="imageD"
          />
          <p className="explain2D">상세설명</p>
          <div className="lineD"></div>

          <p className="explain3D">
            보성 골망태다원은 보성 차밭 인근에 있으며 차밭뿐 아니라 펜션과 수국,
            수선화 정원 등을 방문할 수 있는 재미있는 관광지이다. 동심원의 녹차
            미로공원을 조성하였으며 버섯 모양 지붕을 한 펜션이 옹기종기 모여있다
          </p>
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
                {musicDetails.map((music, index) => (
                  <tr key={index} className="musicRow">
                    <td>{index + 1}</td>
                    <td className="musicTitleCell">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/Goodday.jpg`}
                        className="sing1D"
                      />
                      {music.musicTitle}
                    </td>
                    <td>{music.musicSinger}</td>
                    <td>{music.musicGenre}</td>
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
