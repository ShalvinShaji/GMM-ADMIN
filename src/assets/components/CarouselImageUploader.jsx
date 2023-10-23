import React, { useState, useRef } from "react";
import Sectionhead from "../components/Sectionhead";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faImage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const CarouselImageUploader = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const imageInput = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const newImageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImageUrls((prevImageUrls) => [...prevImageUrls, ...newImageUrls]);
    }
  };

  const uploadImages = () => {
    if (imageUrls.length === 0) {
      alert("Please select at least one image before uploading.");
    } else {
      setShowPopup(true);
    }
  };

  const handleConfirmUpload = () => {
    // Handle the actual upload logic here
    // For now, just close the popup and clear the selected images
    setShowPopup(false);
    setImageUrls([]);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section className="CarouselImageUploader">
        <Sectionhead sectionname="Add new Carousel images" />
        <div className="container">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/">
              <Button className="image-select-delete-btn">
                <span className="text-white">Back to Carousel Images</span>
                <FontAwesomeIcon icon={faImage} className="ms-2 text-white" />
              </Button>
            </Link>
          </div>
          <div className="file-input d-flex flex-column">
            {imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Uploaded ${index + 1}`}
                className="display-image img-fluid mb-3"
              />
            ))}
            <div className="Image-select-upload-buttons d-flex justify-content-around align-items-center">
              <Button
                onClick={() => imageInput.current.click()}
                className="image-select-delete-btn mt-3 mb-3"
              >
                <span>Select Images</span>
                <FontAwesomeIcon icon={faImage} className="ms-2" />
              </Button>

              <input
                ref={imageInput}
                type="file"
                className="image-input-selecter hidden"
                onChange={handleFileChange}
                multiple
              />

              <Button
                className="image-select-delete-btn mt-3 mb-3"
                onClick={uploadImages}
              >
                <span>Upload Images</span>
                <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CustomPopup
        show={showPopup}
        onHide={handlePopupClose}
        onConfirm={handleConfirmUpload}
        message="Are you sure you want to upload these images?"
      />
    </>
  );
};

export default CarouselImageUploader;
