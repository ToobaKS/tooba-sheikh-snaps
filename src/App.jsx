import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <PhotoCardList/>
      <Footer/>
    </>
  );
}

export default App;
