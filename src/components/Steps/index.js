import React, { useContext } from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import { Context } from "../Context/Context";

function Steps() {
  const { state } = useContext(Context);

  const { step } = state;

  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;

    default:
      return <h1>oops</h1>;
  }
}

export default Steps;
