import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Photo from "./pages/PhotoPage/PhotoPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<HomePage isOpen={isOpen} />} />
          <Route path="/photo/:id" element={<Photo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
