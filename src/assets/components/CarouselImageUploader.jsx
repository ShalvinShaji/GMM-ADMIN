import React, { useState, useRef } from "react";
import "../css/CarouselImageUploader.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faImage } from "@fortawesome/free-solid-svg-icons";

const CarouselImageUploader = () => {
  const imageInput = useRef(null);

  const [imageUrl, setImageUrl] = useState(
    "https://images.hdqwalls.com/download/just-lift-1542x720.jpg"
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
      <div className="file-input  d-flex flex-column ">
        {imageUrl && (
          <img src={imageUrl} alt="Uploaded" className="display-image" />
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
    </>
  );
};

export default CarouselImageUploader;
