import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/coupang.css";

const Coupang = () => {
  const navigate = useNavigate();
  const [visited, setVisited] = useState(() => {
    const saved = localStorage.getItem("visited");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("visited", visited);
  }, [visited]);

  const handleLinkClick = (e) => {
    e.preventDefault(); // a 태그의 기본 이동 방지
    window.open("http://smhrd.or.kr", "_blank", "noopener,noreferrer"); // 새 창에서 URL 열기
    navigate("/Result"); // 동시에 다른 경로로 이동
  };

  return (
    <>
      {visited && (
        <div className="container">
          <div className="wrapper">
            <div className="content" onClick={() => setVisited(true)}>
              <a
                href="http://smhrd.or.kr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <img
                  src="./image/smhrd.png"
                  style={{ width: "340px", height: "200px" }}
                />
              </a>
              {/* 버튼을 활성화하고 싶다면 주석 해제 */}
              {/* <button
                onClick={() => {
                  navigate("/Result");
                }}
                className="start"
              >
                클릭하고 결과 보기!
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Coupang;
