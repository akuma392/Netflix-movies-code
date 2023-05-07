import React, { useState, useEffect } from "react";
import Autosuggestions from "../AutoSuggestions/AutoSuggestions";
import Paginations from "../Pagination/Pagination";
import { filterData } from "../../utils/utils";
import GenerPage from "./GenerPage";

const GenerList = ({ geners }) => {
  const [generDataPerPage, setGenerDataPerPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [genresList, setGenresList] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredGenre, setFilteredGenre] = useState(null);

  useEffect(() => {
    if (currentPage > 0) {
      setGenerDataPerPage(
        genresList?.slice(currentPage * 20, 20 + currentPage * 20)
      );
    }
  }, [currentPage]);

  useEffect(() => {
    setGenresList(geners?.results);
  }, []);

  useEffect(() => {
    setGenerDataPerPage(genresList?.slice(0, 20));
  }, [genresList]);

  useEffect(() => {
    let filterGenre = filterData(geners.results, selectedGenre);
    setFilteredGenre(filterGenre);
  }, [selectedGenre]);

  useEffect(() => {
    setGenresList(filteredGenre);
  }, [filteredGenre]);

  console.log(selectedGenre, ">>>>>>>>>>>", filteredGenre, genresList);

  return (
    <div className="pt-3">
      <div className="mt-2 mb-2 d-flex justify-content-center mt-4 mb-4">
        <Autosuggestions setSelectedGenre={setSelectedGenre} />
      </div>
      <ul className="grids">
        <GenerPage geners={generDataPerPage} />
      </ul>
      <Paginations setCurrentPage={setCurrentPage} data={genresList} />
    </div>
  );
};

export default GenerList;
