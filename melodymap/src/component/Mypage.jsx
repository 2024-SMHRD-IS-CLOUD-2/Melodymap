import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/mypage.css";
import SideBar from "./SideBar";

const Mypage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const travelPages = [
    {
      page: 1,
      description: "당신은 분석적인 여행가 입니다",
      recommendation: "보성 골망태다원",
      music: ["좋은 날 - 아이유", "비행기 - 거북이", "밤양갱 - 비비"],
    },
    {
      page: 2,
      description: "당신은 모험적인 여행가 입니다",
      recommendation: "제주도 올레길",
      music: ["해변의 여인 - 쿨", "한라산 - 하림", "그대와 함께 - 더블루"],
    },
    {
      page: 3,
      description: "당신은 휴식이 필요한 여행가 입니다",
      recommendation: "강릉 경포대",
      music: ["너의 의미 - 산울림", "한강 - 하림", "밤하늘의 별을 - 경서"],
    },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentTravelInfo = travelPages.find(
    (page) => page.page === currentPage
  );

  return (
    <div className="containermy">
      <div className="wrappermy">
        <SideBar />
        <div className="contentmy">
          <div className="mypageM">
            <p className="mypageTitle">나의 여행지</p>
          </div>
          <div className="mypageinfo">
            <p>{currentTravelInfo.description}</p>
            <p>추천 여행지</p>
            <p>{currentTravelInfo.recommendation}</p>
            <p>추천 음악</p>
            {currentTravelInfo.music.map((song, index) => (
              <p key={index} className="songmy">
                {song}
              </p>
            ))}
          </div>
          <div className="paginationmy">
            {travelPages.map((page) => (
              <button
                key={page.page}
                onClick={() => handlePageChange(page.page)}
                className="pageButtonmy"
              >
                {page.page}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              navigate("/travelwrite");
            }}
            className="writeM"
          >
            여행후기 쓰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
