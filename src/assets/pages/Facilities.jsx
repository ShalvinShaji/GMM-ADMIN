import React from "react";
import "../css/Facilities.css";
import Button from "react-bootstrap/Button";
import Sectionhead from "../components/Sectionhead";
import NewFacilityAdder from "../components/NewFacilityAdder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Facilities = () => {
  const onDelete = () => {
    console.log("facility deleted");
  };

  return (
    <>
      <section id="Facilities" className="Facilities">
        <Sectionhead sectionname="Facilities" />
        <div className="container">
          <div className="facilities-box">
            <div className="row g-3">
              <div className="col-md-6 col-lg-4 col-xl-3 ">
                <div className="facility d-flex flex-column justify-content-center align-items-center">
                  <div className="facility-img">
                    <img
                      src="https://gmmhospital.in/assets/img/facilities/casualty.png"
                      alt=""
                    />
                  </div>
                  <div className="facility-name">
                    <h3 className="text-uppercase">casualty</h3>
                  </div>
                  <Button
                    variant="primary"
                    className="image-select-delete-btn mt-3 mb-3"
                    onClick={onDelete}
                  >
                    <span>Delete Facility</span>
                    <FontAwesomeIcon icon={faTrash} className="ms-2" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12">
                <NewFacilityAdder />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
