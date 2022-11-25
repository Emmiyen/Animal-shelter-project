export const addItem = (filteredData) => {
  return {
    type: "ADD",
    payload: filteredData,
  };
};
