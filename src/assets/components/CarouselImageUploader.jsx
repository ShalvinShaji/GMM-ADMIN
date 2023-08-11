import React, { useState } from "react";
import "../css/CarouselImageUploader.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const CarouselImageUploader = () => {
  return (
    <div className="file-input d-flex flex-column border border-primary p-3">
      <input type="file" id="file" />
      <Button variant="primary" className="mt-1 carousel-image-upload">
        <FontAwesomeIcon icon={faCloudArrowUp} /> Upload
      </Button>
    </div>
  );
};

export default CarouselImageUploader;
