const managerReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.payload);

    default:
      return state;
  }
};
export default managerReducer;
