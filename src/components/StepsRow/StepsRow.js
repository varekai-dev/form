import React from "react";
import CheckIcon from "./CheckIcon";
import clsx from "clsx";

function StepsRow({ totalSteps, currentStep }) {
  const steps = Array.from(Array(totalSteps).keys());

  return (
    <div className="steps-row">
      {steps.map((item, index) => (
        <div
          className={clsx(
            "step",
            currentStep === index + 1 && "step-current",
            currentStep > index + 1 && "step-completed"
          )}
          key={index}
        >
          {currentStep < index + 1 || currentStep === index + 1 ? (
            `${index + 1}`
          ) : (
            <CheckIcon />
          )}
        </div>
      ))}
    </div>
  );
}

export default StepsRow;
