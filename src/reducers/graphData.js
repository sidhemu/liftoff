const graphData = (state = [], action) => {
  switch (action.type) {
    case "GRAPH_DATA":
      const correctSolution = {
        0: "104",
        1: "202",
        2: "304",
        3: "401"
      };

      let correctCount = 0;
      let incorrectCount = 0;
      Object.keys(action.userSolution).forEach(elem => {
        if (action.userSolution[elem] === correctSolution[elem]) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      });
      state[0]["value"] = correctCount;
      state[1]["value"] = incorrectCount;
      return [...state];
    case "CLEAR_ALL":
      state[0].value = 0;
      state[1].value = 0;
      return [...state];
    default:
      return state;
  }
};

export default graphData;
