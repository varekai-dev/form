import React, { useContext } from "react";
import ArrowIcon from "./ArrowIcon";
import { Context } from "../Context/Context";

function Button({ children, disabled, type, arrow }) {
  const { prevStep, nextStep } = useContext(Context);
  return (
    <button
      onClick={type === "next" ? nextStep : prevStep}
      disabled={disabled}
      className={`btn ${type}`}
    >
      {children} {arrow && <ArrowIcon />}
    </button>
  );
}

export default Button;
