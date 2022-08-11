import React, { useContext, useReducer } from "react";
import reducer from "../reducers/main_reducer";
import { createTheme } from "@mui/material/styles";
import data from "../data.json";

const MainContext = React.createContext();
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(95, 178, 136)",
    },
    secondary: {
      main: "#c1c1c1",
    },
  },
});
const initialState = {
  theme: theme,
  data: data,
  filteredData: data.auctions,
};

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFilter = (input) => {
    dispatch({ type: "FILTER_AUCTIONS", payload: input });
  };
  return (
    <MainContext.Provider value={{ ...state, handleFilter }}>
      {children}
    </MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
