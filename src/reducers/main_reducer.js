const main_reducer = (state, action) => {
  if (action.type === "FILTER_AUCTIONS") {
    const filteredData = state.data.auctions;
    if (action.payload === "all") {
      return {
        ...state,
        filteredData: filteredData,
      };
    }

    let tempData = filteredData.filter((item) => {
      return item.status === action.payload;
    });

    return {
      ...state,
      filteredData: tempData,
    };
  }
  return {
    ...state,
  };
};

export default main_reducer;
