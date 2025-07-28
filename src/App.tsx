import { Outlet } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
