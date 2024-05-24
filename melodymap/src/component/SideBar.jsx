import React from "react";
import "../css/sidebar.css";
import { useNavigate } from "react-router-dom";
import { useTest } from "../context/TestContext";

const SideBar = () => {
  const navigate = useNavigate();
  const { resetChoice } = useTest();

  const checkLogin = () => {
    if (sessionStorage.getItem("userID")) {
      navigate("/travelboard");
    } else {
      alert("로그인이 필요합니다");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userID");
    resetChoice();
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="sidebar">
      {sessionStorage.getItem("userID") ? (
        <>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => navigate("/mypage")}>My</button>
          <button onClick={checkLogin}>Review</button>
          <button onClick={goBack}>Back</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/")}>Home</button>
          <button
            onClick={() => {
              resetChoice();
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              resetChoice();
              navigate("/join");
            }}
          >
            Join
          </button>

          <button
            onClick={() => {
              checkLogin();
              navigate("/login");
            }}
          >
            Review
          </button>
          <button onClick={goBack}>Back</button>
        </>
      )}
    </div>
  );
};

export default SideBar;
