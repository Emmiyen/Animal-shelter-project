export const addItem = (filteredData) => {
  return {
    type: "ADD",
    payload: filteredData,
  };
};

export const addPet = (pet) => {
  return {
    type: "ADDPET",
    payload: pet,
  };
};
