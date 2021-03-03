import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./entryFormReducer";

const EntryFormContext = createContext();

const EntryFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EntryFormContext.Provider value={{ state, dispatch }}>
      {children}
    </EntryFormContext.Provider>
  );
};

export const useEntryFormDispatch = () => {
  const { dispatch } = useContext(EntryFormContext);
  return dispatch;
};

export const useEntryFormState = () => {
  const { state } = useContext(EntryFormContext);
  return state;
};

export default EntryFormProvider;
