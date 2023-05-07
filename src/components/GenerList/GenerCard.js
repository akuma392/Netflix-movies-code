import React from "react";

const GenerCard = ({ generList }) => {
  const { genre, netflix_id } = generList;
  return (
    <li className="genre-card p-2">
      <h5>{genre}</h5>
      <p>{netflix_id}</p>
    </li>
  );
};

export default GenerCard;
