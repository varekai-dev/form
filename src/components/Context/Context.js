import React, { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const initialValue = {
    step: 1,
    describe: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    other: "",
    gender: "",
    phone: "",
    numberPrefix: "+1",
    categories: [],
  };

  const [state, setState] = useState(initialValue);

  const nextStep = () => {
    if (state.step === 3) {
      const { step, other, numberPrefix, ...filteredState } = state;
      const formData = {
        ...filteredState,
        phone: `${state.numberPrefix}${state.phone}`,
        gender: state.other.length > 0 ? state.other : state.gender,
      };
      alert(JSON.stringify(formData, null, 4));
      setState(initialValue);
      return;
    }
    setState({
      ...state,
      step: state.step + 1,
    });
  };
  const prevStep = () => {
    setState({
      ...state,
      step: state.step - 1,
    });
  };

  const changeState = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const store = {
    state,
    setState,
    nextStep,
    prevStep,
    changeState,
  };
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export default ContextProvider;
