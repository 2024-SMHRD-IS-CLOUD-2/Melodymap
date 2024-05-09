import React from "react";
import "../css/TestProgress.css";

const TestProgress = ({ currentStep, totalSteps }) => {
  const progressWidth = (currentStep / totalSteps) * 100 + "%";

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: progressWidth }}>
        {`${currentStep}/${totalSteps}`}
      </div>
    </div>
  );
};

export default TestProgress;
