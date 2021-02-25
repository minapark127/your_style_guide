import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./Components/startFormReducer";

const StartFormContext = createContext();

const StartFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StartFormContext.Provider value={{ state, dispatch }}>
      {children}
    </StartFormContext.Provider>
  );
};

export const useStartFormDispatch = () => {
  const { dispatch } = useContext(StartFormContext);
  return dispatch;
};

export const useStartFormState = () => {
  const { state } = useContext(StartFormContext);
  return state;
};

export default StartFormProvider;
