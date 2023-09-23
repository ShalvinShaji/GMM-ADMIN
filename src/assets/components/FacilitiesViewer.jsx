import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const FacilitiesViewer = () => {
  const onDelete = () => {
    console.log("facility deleted");
  };
  return (
    <>
      <div className="row g-3">
        <div className="col-md-6 col-lg-4 col-xl-3 facility d-flex flex-column justify-content-center align-items-center ">
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
    </>
  );
};

export default FacilitiesViewer;
