import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Colours from "./pages/Colours";
import Gallery from "./pages/Gallery";
import Sinks from "./pages/Sinks";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App min-h-screen bg-[#FAF8F3]">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/colours" element={<Colours />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sinks" element={<Sinks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
