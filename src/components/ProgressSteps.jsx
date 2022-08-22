import React from 'react'

function ProgressSteps({ stepProcent }) {
  console.log(stepProcent);

  return (
    <div className="steps-block">
      <div className={"step"} style={{width: `${stepProcent}%` }}></div>
      <div className={`gray-step`}></div>
    </div>
  );
}
export default ProgressSteps
