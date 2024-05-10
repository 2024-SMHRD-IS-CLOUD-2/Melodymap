import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { musicDetails } = location.state || {};
  console.log(musicDetails);

  return <div>Detail</div>;
};

export default Detail;
