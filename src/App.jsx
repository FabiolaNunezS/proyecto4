import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { MainRoutes } from "./routes/MainRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <MainRoutes setUser={setUser} />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
