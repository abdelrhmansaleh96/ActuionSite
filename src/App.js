import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useMainContext } from "./context/main_context";

// import { Routes, Route } from "react-router-dom";
// import ContactUs from "./pages/ContactUs";
// import ForgetPassword from "./pages/ForgetPassword";
// import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import SingleAuction from "./pages/SingleAuction";
import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/ImageSlider/ImageSlider";
// import LogIn from "./components/LogIn/LogIn";
import Footer from "./components/Footer/Footer";
import CardDetailed from "./components/CardDetailed/CardDetailed";
import AuctionDetailed from "./components/AuctionDetailed/AuctionDetailed";

function App() {
  const { theme } = useMainContext();

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singleauction" element={<SingleAuction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes> */}
        <Navbar />
        <AuctionDetailed />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
