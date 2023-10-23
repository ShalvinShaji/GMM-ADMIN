import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseMedical,
  faL,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const FacilitiesViewer = () => {
  const [showDeletePopup, setshowDeletePopup] = useState(false);
  const [selectedFacilityID, setSelectedFacilityID] = useState("");
  const [facilities, setFacilities] = useState([
    {
      id: 1,
      name: "Casualty",
      imageSrc: "https://gmmhospital.in/assets/img/facilities/casualty.png",
    },
    {
      id: 2,
      name: "Ambulance",
      imageSrc: "https://gmmhospital.in/assets/img/facilities/casualty.png",
    },
    {
      id: 3,
      name: "Pharmacy",
      imageSrc: "https://gmmhospital.in/assets/img/facilities/casualty.png",
    },
    // Add more facilities as needed
  ]);

  const handleDeleteFacility = (id) => {
    setSelectedFacilityID(id);
    setshowDeletePopup(true);
  };

  const handleConfirmDeleteDepartment = () => {
    const updatedFacilities = facilities.filter(
      (facility) => facility.id !== selectedFacilityID
    );
    setFacilities(updatedFacilities);
    setshowDeletePopup(false);
  };

  const handleDeletePopupClose = () => {
    setshowDeletePopup(false);
  };

  return (
    <>
      <section>
        <Sectionhead sectionname="Facilities" />
        <div className="container">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/NewFacility">
              <Button className="image-select-delete-btn">
                <span className="text-white">Add a Facility</span>
                <FontAwesomeIcon
                  icon={faHouseMedical}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
          <div className="row g-3">
            {facilities.map((facility) => (
              <div key={facility.id} className="col-md-6 col-lg-4 col-xl-3">
                <div className="facility d-flex flex-column justify-content-center align-items-center">
                  <div className="facility-img">
                    <img src={facility.imageSrc} alt={facility.name} />
                  </div>
                  <div className="facility-name">
                    <h3 className="text-uppercase">{facility.name}</h3>
                  </div>
                </div>
                <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                  <Button
                    variant="primary"
                    className="image-select-delete-btn"
                    onClick={() => handleDeleteFacility(facility.id)}
                  >
                    <span>Delete Facility</span>
                    <FontAwesomeIcon icon={faTrash} className="ms-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CustomPopup
        show={showDeletePopup}
        onHide={handleDeletePopupClose}
        onConfirm={handleConfirmDeleteDepartment}
        message="Do you want to delete this facility?"
      />
    </>
  );
};

export default FacilitiesViewer;
