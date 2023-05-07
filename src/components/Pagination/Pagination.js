import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

function Paginations({ setCurrentPage, data }) {
  const pageCount = Math.ceil(data?.length / 20);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  return (
    <div className="d-flex justify-content-center mt-4 mb-4" id="pagination">
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Paginations;
