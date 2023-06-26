import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <NavBar />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
