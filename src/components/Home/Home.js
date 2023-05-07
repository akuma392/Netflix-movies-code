import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import GenerList from "../GenerList/GenerList";
import { geners } from "./mockData";

const Home = () => {
  return (
    <MDBContainer>
      <div className="mt-4 mb-3">
        <GenerList geners={geners} />
      </div>
    </MDBContainer>
  );
};

export default Home;
