import React from "react";
import "../css/Facilities.css";
import Sectionhead from "../components/Sectionhead";
import NewFacilityAdder from "../components/NewFacilityAdder";
import FacilitiesViewer from "../components/FacilitiesViewer";

const Facilities = () => {
  return (
    <>
      <section id="Facilities" className="Facilities">
        <Sectionhead sectionname="Facilities" />
        <div className="container">
          <FacilitiesViewer />
          <NewFacilityAdder />
        </div>
      </section>
    </>
  );
};

export default Facilities;
