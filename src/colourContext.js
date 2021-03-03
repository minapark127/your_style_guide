import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./colourReducer";

const ColourContext = createContext();

const ColourProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ColourContext.Provider value={{ state, dispatch }}>
      {children}
    </ColourContext.Provider>
  );
};

export const useColourDispatch = () => {
  const { dispatch } = useContext(ColourContext);
  return dispatch;
};

export const useColourState = () => {
  const { state } = useContext(ColourContext);
  return state;
};

export default ColourProvider;
