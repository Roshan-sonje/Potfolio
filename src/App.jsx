import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Project";
import Skills from "./components/Skills";
import { useRef } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Home/>
          <About/>
          <Skills/>
          <Card/>
          <Contact/>
          <GoToTop/>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
