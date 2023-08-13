import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const NewFacilityAdder = () => {
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
    const facilityData = {
      imageUrl: imageUrl,
      facilityName: facilityName,
    };

    setFacilityName("");
    setImageUrl(
      "https://st3.depositphotos.com/23594922/31822/v/450/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
    );
  };

  return (
    <>
      <div className="facility p-2 d-flex flex-column justify-content-center align-items-start ">
        <div className="facility-add-img border-0 m-0 p-1  d-flex justify-content-around align-items-center">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded"
              className="display-facility-image p-0 me-2 "
            />
          )}
          <Button
            variant="primary"
            className="mt-1 file-input facility-image-select"
          >
            <input type="file" id="file" onChange={handleFileChange} />
            <label htmlFor="file" className="file">
              <FontAwesomeIcon icon={faImage} className="me-2" />
              <span>Select Image</span>
            </label>
          </Button>
        </div>

        <div className="facility-add-name mt-1">
          <input
            type="text"
            name="facility-add-name"
            id="facility-add-name"
            placeholder="Enter facility name here."
            className="p-2"
            value={facilityName}
            onChange={handleFacilityNameChange}
          />
        </div>

        <Button
          variant="primary"
          className="mt-1 facility-image-upload"
          onClick={handleSaveFacility}
        >
          <FontAwesomeIcon icon={faCloudArrowUp} className="me-2" />
          <span>Save Facility</span>
        </Button>
      </div>
    </>
  );
};

export default NewFacilityAdder;
