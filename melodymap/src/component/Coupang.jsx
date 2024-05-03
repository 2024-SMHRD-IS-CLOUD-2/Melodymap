import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/coupang.css";

const Coupang = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="wrapper">
        <div className="content">
          <button
            onClick={() => {
              navigate("/Result");
            }}
            className="start"
          >
            클릭하고 결과 보기!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupang;
