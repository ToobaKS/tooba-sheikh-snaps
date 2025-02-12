import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import FilterContainer from "./components/FilterContainer/FilterContainer";
import Hero from "./components/Hero/Hero";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header/>
      <FilterContainer/>
      <Hero/>
      <PhotoCardList/>
      <Footer/>
    </>
  );
}

export default App;
