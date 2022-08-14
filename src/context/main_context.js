import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/main_reducer";
import { createTheme } from "@mui/material/styles";
// import data from "../data.json";
import { db } from "../Firebase/firebase";
import { onValue, ref } from "firebase/database";

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
const setLoading = (e) => {
  e = !e;
};
const initialState = {
  theme: theme,
  data: [],
  loading: false,
  setLoading: setLoading(),
  filteredData: [],
  error: false,
};

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAuctions = async (initialState) => {
    dispatch({ type: "GET_AUCTIONS_BEGIN" });
    // setLoading(initialState.loading);
    try {
      const query = ref(db, "auctions");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        if (snapshot.exists()) {
          console.log(data);
          setTimeout(() => {
            dispatch({ type: "GET_AUCTIONS_SUCCESS", payload: data });
          }, 3500);
          // setLoading(initialState.loading);
        }
      });
    } catch (error) {
      dispatch({ type: "GET_AUCTIONS_FAIL" });
      console.log(error);
    }
  };

  const handleFilter = (input) => {
    dispatch({ type: "FILTER_AUCTIONS", payload: input });
  };

  useEffect(() => {
    fetchAuctions();
  }, []);

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
