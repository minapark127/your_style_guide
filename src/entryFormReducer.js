export const initialState = {
  submitted: 0,
  businessName: "",
  error: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "submit":
      return { submitted: 1, businessName: `${action.payload}`, error: 0 };
    case "reset":
      return initialState;
    case "error":
      return { ...state, error: 1 };
    default:
      return;
  }
};

export default reducer;
