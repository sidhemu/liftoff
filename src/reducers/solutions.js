const solution = (state = [], action) => {
  switch (action.type) {
    case "SOLUTION_LIST":
      state = { ...state, [action.qId]: action.sId };
      return state;
    case "CLEAR_ALL":
      return {};
    default:
      return state;
  }
};

export default solution;
