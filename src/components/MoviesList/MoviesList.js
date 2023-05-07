import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { movies } from "../Home/mockData";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = () => {
  return (
    <MDBRow className="row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  g-4">
      {movies?.results.map((elm) => {
        return (
          <div key={elm.netflix_id}>
            <MovieCard movie={elm} />
          </div>
        );
      })}
    </MDBRow>
  );
};

export default MoviesList;
