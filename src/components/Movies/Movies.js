import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import MoviesList from "../MoviesList/MoviesList";
import Search from "./Search";
const Movies = () => {
  return (
    <MDBContainer className="mt-3 mb-3">
      <Search />
      <MoviesList />
    </MDBContainer>
  );
};

export default Movies;
