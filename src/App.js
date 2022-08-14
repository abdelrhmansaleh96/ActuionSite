import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useMainContext } from "./context/main_context";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import ForgetPassword from "./pages/ForgetPassword";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SingleAuction from "./pages/SingleAuction";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { AnimatePresence } from "framer-motion";
function App() {
  const { theme } = useMainContext();
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/singleauction" element={<SingleAuction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
