import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/travelwrite.css";
import SideBar from "./SideBar";
import axios from "axios";

const Travelwrite = () => {
  const [title, setTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const author = sessionStorage.getItem("userID");
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "https://jo07xi8kmg.execute-api.ap-northeast-2.amazonaws.com",
        {
          commentTitle: title,
          author: author,
          content: reviewContent,
          date: new Date().toLocaleDateString(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            "spring.cloud.function.definition": "addComment",
          },
        }
      );
      if (response.data) {
        alert("후기 작성 완료");
        navigate("/travelboard");
      }
    } catch (error) {
      alert("후기 작성 중 오류 발생");
    }
  };

  return (
    <div className="containerT">
      <div className="wrapperT">
        <div className="contentT">
          <SideBar />
          <div style={{ width: "330px" }} className="marginT">
            <p className="boardT" style={{ width: "330px" }}>
              여행 후기 작성
            </p>
          </div>
          <div>
            <div className="titleT">
              <p className="titlep">제목 :</p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="resultT">
              <p className="resultp">작성자 :</p>
              <p>{author}</p>
            </div>
            <div className="imageT">
              <p className="imagep">이미지 :</p>
              <input
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>
            <div className="contentT">
              <p>후기 내용</p>
              <textarea
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                style={{ width: "330px", height: "330px" }}
              />
            </div>
            <button onClick={handleSave} className="saveT">
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelwrite;
