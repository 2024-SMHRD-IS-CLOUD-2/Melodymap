import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Test.css";
import SideBar from "./SideBar";

const Coursepreview = () => {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);
  const courseRegion = data ? data[0].courseRegion : "No Data";
  const courses = data ? data[0].courses : [];
  const navigate = useNavigate();

  const GoDetail = (course) => {
    navigate("/coursedetail", { state: { course: course } });
  };

  return (
    <div className="container">
      <div className="wrapper">
        <SideBar />
        <h1>{courseRegion}</h1>
        {courses.map((course, index) => (
          <button
            onClick={() => GoDetail(course)}
            key={index}
            className="coursebox"
          >
            <p>{course.courseName}</p>
            <p>{course.courseTime}</p>
            <p>{course.courseDistance}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Coursepreview;
