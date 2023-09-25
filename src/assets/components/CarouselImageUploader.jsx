import React, { useState, useRef } from "react";
import "../css/CarouselImages.css";
import Sectionhead from "../components/Sectionhead";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faImage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CarouselImageUploader = (props) => {
  const imageInput = useRef(null);

  const [imageUrl, setImageUrl] = useState(
    "https://images.hdqwalls.com/download/john-wick-chapter-2-2017-ad-1537x722.jpg"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
        console.log(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("image", file);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  };
  return (
    <>
      <section className="CarouselImageUploader">
        <Sectionhead sectionname="Add new Carousel image" />
        <div className="container">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/">
              <Button className="image-select-delete-btn">
                <span className="text-white">Back to Carousel Images</span>
                <FontAwesomeIcon icon={faImage} className="ms-2 text-white" />
              </Button>
            </Link>
          </div>
          <div className="file-input  d-flex flex-column ">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="display-image img-fluid"
              />
            )}
            <div className="Image-select-upload-buttons d-flex justify-content-around align-items-center">
              <Button
                onClick={() => imageInput.current.click()}
                className="image-select-delete-btn mt-3 mb-3"
              >
                <span>Select Image</span>
                <FontAwesomeIcon icon={faImage} className="ms-2" />
              </Button>

              <input
                ref={imageInput}
                type="file"
                className="image-input-selecter hidden"
                onChange={handleFileChange}
              />

              <Button
                className="image-select-delete-btn mt-3 mb-3"
                onClick={uploadImage}
              >
                <span>Upload Image</span>
                <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselImageUploader;
