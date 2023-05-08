import React from "react";
import Landing from "./components/Landing";
import PageNotFound from "./components/PageNotFound";
// import Navigation from "./components/Navigation";
// import About from "./components/About";
// import Gallery from "./components/Gallery";
import LatestNewsMain from "./components/LatestNewsMain";
import {
  Routes, // instead of "Switch"
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import "./styles/Landing.css"




function App() {
  const nav = useNavigate();
  const handleCheckout = () => nav("/");
  return (
    <Routes history={handleCheckout}>
    <Route path="/" element={<Landing />} />
    <Route path="/latestnews" element={<LatestNewsMain />} />
    <Route path="*" element={<PageNotFound />} /> 
  </Routes>
  );
}

export default App;
