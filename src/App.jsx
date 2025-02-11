import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import PhotoCardList from "./components/PhotoCardList/PhotoCardList";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header/>
      <PhotoCardList/>
      <Footer/>
    </>
  );
}

export default App;
