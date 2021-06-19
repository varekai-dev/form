import React, { useContext } from "react";
import Button from "../../Button/Button";
import { Context } from "../../Context/Context";
import StepsRow from "../../StepsRow/StepsRow";

function Step2() {
  const { state, changeState } = useContext(Context);
  const radioButtons = [
    {
      label: "Male",
      id: 1,
    },
    {
      label: "Female",
      id: 2,
    },
    {
      label: "I prefer not to say",
      id: 3,
    },
    {
      label: "Other",
      id: 4,
      extraField: true,
    },
  ];
  const disabledButton = [
    state.gender,
    state.firstName,
    state.lastName,
    state.phone,
  ];

  return (
    <div className="info">
      <h1>Basic information about you</h1>
      <div className="steps-container">
        <StepsRow totalSteps={2} currentStep={1} />
      </div>

      <form>
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          value={state.firstName}
          onChange={changeState}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={state.lastName}
          onChange={changeState}
        />
        <h2>Gender</h2>
        <div className="radiobuttons">
          {radioButtons.map((radioButton) => (
            <div key={radioButton.id} className="radiobutton">
              <input
                name="gender"
                type="radio"
                checked={state.gender === radioButton.label}
                value={radioButton.label}
                onChange={changeState}
              />
              <label>{radioButton.label}</label>
              {radioButton.extraField && (
                <input
                  type="text"
                  name="other"
                  value={state.other}
                  onChange={changeState}
                />
              )}
            </div>
          ))}
        </div>
        <div className="info-number">
          <div className="custom-select">
            <select
              name="numberPrefix"
              value={state.numberPrefix}
              onChange={changeState}
            >
              <option value="+1">+1</option>
              <option value="+2">+2</option>
              <option value="+3">+3</option>
              <option value="+4">+4</option>
              <option value="+5">+5</option>
            </select>
          </div>

          <input
            name="phone"
            type="tel"
            placeholder="Business phone number"
            value={state.phone}
            onChange={changeState}
          />
        </div>
      </form>
      <div className="btns">
        <div className="btns">
          <Button type="prev" arrow>
            Previous
          </Button>
          <Button
            type="next"
            disabled={disabledButton.some((item) => item === "")}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
