const main_reducer = (state, action) => {
  if (action.type === "GET_AUCTIONS_BEGIN") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "GET_AUCTIONS_SUCCESS") {
    return {
      ...state,
      filteredData: action.payload,
      data: action.payload,
      loading: false,
    };
  }
  if (action.type === "GET_AUCTIONS_FAIL") {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }
  if (action.type === "FILTER_AUCTIONS") {
    const filteredData = state.data;
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
