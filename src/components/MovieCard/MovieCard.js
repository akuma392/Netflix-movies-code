import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCardSubTitle,
  MDBListGroupItem,
  MDBCol,
} from "mdb-react-ui-kit";

export default function MovieCard({ movie }) {
  const { title, img, synopsis, rating, title_date, year, netflix_id, poster } =
    movie;
  return (
    <MDBCol>
      <MDBCard alignment="center" className="w-100" background="light">
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay shadow-1-strong rounded"
        >
          <MDBCardImage src={poster} fluid alt={title} overlay />
          <a>
            <div
              className="mask"
              style={{
                background:
                  "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
              }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardSubTitle>{netflix_id}</MDBCardSubTitle>
          <MDBCardText className="text-secondary mt-2 mb-2">
            {synopsis.slice(0, 100) + "....."}
          </MDBCardText>
          <MDBListGroupItem>
            Imdb: <span tag="strong">{rating}</span>
          </MDBListGroupItem>
          <MDBListGroupItem className="mt-2 mb-2">{year}</MDBListGroupItem>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
