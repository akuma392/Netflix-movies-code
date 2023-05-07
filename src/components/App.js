import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import MoviesList from "./MoviesList/MoviesList";
import { MDBContainer } from "mdb-react-ui-kit";
import Movies from "./Movies/Movies";
import { Provider } from "./Context/DarkContext";

function App() {
  return (
    <Provider>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
