import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/reviewdetail.css";
import SideBar from "./SideBar";

const Reviewdetail = () => {
  const navigate = useNavigate();

  return (
    <div className="containerRD">
      <div className="wrapperRD">
        <SideBar />
        <div className="contentRD">
          <div className="headerRD">
            <p className="titleRD">즐거운 보성 여행!</p>
            <p className="nameRD">작성자 : 구희철</p>
          </div>
          <div className="lineRD"></div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/image/Meta.jpg`}
              alt="Main Image"
              className="imageRD"
            />
          </div>
          <div className="reviewRD">
            <p>너무 즐거운 여행이었습니다 ㅎㅎㅎㅎㅎ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewdetail;
