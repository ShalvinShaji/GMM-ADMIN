import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Sectionhead from "../components/Sectionhead";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCloudArrowUp,
  faHouseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const NewFacilityAdder = () => {
  const [showFacilitySavePopup, setShowFacilitySavePopup] = useState(false);
  const imageInput = useRef(null);
  const [imageUrl, setImageUrl] = useState(
    "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
  ); // Set the initial sample image URL

  const [facilityName, setFacilityName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFacilityNameChange = (event) => {
    setFacilityName(event.target.value);
  };

  const handleSaveFacility = () => {
    if (!facilityName || !imageUrl) {
      // If any field is empty, show an alert
      alert("Please fill in all the fields");
    } else {
      // If all fields are filled, show the save popup
      setShowFacilitySavePopup(true);
    }
  };

  const handleConfirmSaveFacility = () => {
    const NewFacilityData = {
      imageUrl: imageUrl,
      facilityName: facilityName,
    };
    console.log(NewFacilityData);

    setFacilityName("");
    setImageUrl(
      "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
    );
    setShowFacilitySavePopup(false);
  };

  const handleFacilitySavePopupClose = () => {
    setShowFacilitySavePopup(false);
  };

  return (
    <>
      <section className="NewFacilityAdder">
        <Sectionhead sectionname="Add Facility" />
        <div className="container ">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/Facilities">
              <Button className="image-select-delete-btn">
                <span className="text-white">Back to Facilities</span>
                <FontAwesomeIcon
                  icon={faHouseMedical}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
          <div className="data-adder">
            <div className="row  facility-adder">
              <div className="col-6  d-flex flex-column">
                <Form>
                  <Form.Label className="input-labels">
                    Add Facility Logo
                  </Form.Label>
                  <div>
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt="Uploaded"
                        className="display-facility-image me-2 "
                      />
                    )}
                    <Button
                      onClick={() => imageInput.current.click()}
                      className="image-select-delete-btn mt-3 mb-3"
                    >
                      <span>Select Logo</span>
                      <FontAwesomeIcon icon={faImage} className="ms-2" />
                    </Button>
                  </div>
                  <Form.Group>
                    <Form.Control
                      ref={imageInput}
                      type="file"
                      className="image-input-selecter hidden"
                      onChange={handleFileChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mt-4 mb-4">
                    <Form.Label className="input-labels">
                      Add Facility Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Facility Name here..."
                      value={facilityName}
                      onChange={handleFacilityNameChange}
                      className="input-fields"
                      required
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="d-flex justify-content-start align-items-center mt-3">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mb-3"
                  onClick={handleSaveFacility}
                >
                  <span>Save Facility</span>
                  <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomPopup
        show={showFacilitySavePopup}
        onHide={handleFacilitySavePopupClose}
        onConfirm={handleConfirmSaveFacility}
        message="Do you want to save this facility?"
      />
    </>
  );
};

export default NewFacilityAdder;
