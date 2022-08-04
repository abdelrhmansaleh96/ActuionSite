import React, { useContext, useReducer } from "react";
import reducer from "../reducers/main_reducer";
import { createTheme } from "@mui/material/styles";

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
};
export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MainContext.Provider value={{ ...state }}>{children}</MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
