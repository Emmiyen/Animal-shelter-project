const managerReducer = (state = { data: [], cart: [] }, action) => {
  switch (action.type) {
    case "ADD":
      state.data = action.payload;
      return state;

    case "ADDPET":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
export default managerReducer;
