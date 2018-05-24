export const questionList = () => ({
  type: "QUESTIONS_LIST"
});

export const solution = (questionId, solutionId) => ({
  type: "SOLUTION_LIST",
  qId: questionId,
  sId: solutionId
});

export const graphData = data => ({
  type: "GRAPH_DATA",
  userSolution: data
});

export const updateData = () => ({
  type: "UPDATE_GRAPH"
});
