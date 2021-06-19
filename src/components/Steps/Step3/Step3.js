import React, { useContext, useState } from "react";
import Button from "../../Button/Button";
import { Context } from "../../Context/Context";
import clsx from "clsx";
import StepsRow from "../../StepsRow/StepsRow";

function Step3() {
  const { state, changeState, setState } = useContext(Context);
  const [error, setError] = useState(null);
  const { categories } = state;
  const disabledButton = [state.password, state.categories, state.email];
  const checkBoxes = [
    {
      label: "Economy",
      id: 1,
    },
    {
      label: "Business",
      id: 2,
    },
    {
      label: "Trading",
      id: 3,
    },
    {
      label: "Сommunications",
      id: 4,
    },
  ];
  const changePasswordState = (e) => {
    const passwordReg = /^(?=.*[A-Z]).*$/;
    changeState(e);
    if (e.target.value.length < 8) {
      setError(`Left ${8 - e.target.value.length} characters`);
    } else if (!passwordReg.test(e.target.value)) {
      setError(`Should contain at least one upper case letter`);
    } else {
      setError(null);
    }
  };
  const changeCategories = (e) => {
    if (categories.includes(e.target.value)) {
      const newCategories = categories.filter(
        (category) => category !== e.target.value
      );
      setState({
        ...state,
        categories: newCategories,
      });
      return;
    }
    setState({ ...state, categories: [...categories, e.target.value] });
  };

  return (
    <div className="info">
      <h1>Basic information about you</h1>
      <div className="steps-container">
        <StepsRow totalSteps={2} currentStep={2} />
      </div>
      <h2>Categories you work with</h2>
      <form className="form">
        <div className="checkboxes">
          {checkBoxes.map((checkBox) => (
            <div key={checkBox.id} className="checkbox">
              <input
                name="categories"
                type="checkbox"
                checked={categories.includes(checkBox.label)}
                value={checkBox.label}
                onChange={changeCategories}
              />
              <label>{checkBox.label}</label>
            </div>
          ))}
        </div>

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={state.Email}
          onChange={changeState}
        />
        <input
          className={clsx("form-password", error && "error")}
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) => changePasswordState(e)}
        />
        {error && <p className="error">{error}</p>}
        <p>
          The password has to be at least 8 characters long and contain at least
          one upper case letter.
        </p>
      </form>
      <div className="btns">
        <div className="btns">
          <Button type="prev" arrow>
            Previous
          </Button>
          <Button
            type="next"
            disabled={disabledButton.some((item) => item === "" || error)}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Step3;
