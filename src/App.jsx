import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { MainRoutes } from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <NavBar />
      <MainRoutes />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
