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
            <div className="row ">
              <div className="col-md-6 col-lg-4 col-xl-3">
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
                    className="mt-1 facility-delete"
                    onClick={onDelete}
                  >
                    <FontAwesomeIcon icon={faTrash} className="me-2" />
                    <span>Delete Facility</span>
                  </Button>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
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
                    className="mt-1 facility-delete"
                    onClick={onDelete}
                  >
                    <FontAwesomeIcon icon={faTrash} className="me-2" />
                    <span>Delete Facility</span>
                  </Button>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
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
                    className="mt-1 facility-delete"
                    onClick={onDelete}
                  >
                    <FontAwesomeIcon icon={faTrash} className="me-2" />
                    <span>Delete Facility</span>
                  </Button>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
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
                    className="mt-1 facility-delete"
                    onClick={onDelete}
                  >
                    <FontAwesomeIcon icon={faTrash} className="me-2" />
                    <span>Delete Facility</span>
                  </Button>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 mb-4 d-flex flex-column justify-content-center align-items-center p-2  NewFacilityAdder">
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
