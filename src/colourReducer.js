export const initialState = {
  submitted: 0,
  colours: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "edit":
      return { ...state, submitted: 0 };
    case "reset":
      return initialState;
    case "setColours":
      return { submitted: 1, colours: action.payload };
    default:
      return;
  }
};

export default reducer;
