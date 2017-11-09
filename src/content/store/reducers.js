const initialState = {
  visible: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_APP":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
