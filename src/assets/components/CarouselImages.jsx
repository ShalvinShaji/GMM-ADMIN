import React from "react";
import "../css/CarouselImages.css";
import Button from "react-bootstrap/Button";
import Sectionhead from "../components/Sectionhead";
import CarouselImageUploader from "./CarouselImageUploader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CarouselImages = () => {
  const onDelete = () => {
    console.log("image deleted");
  };

  return (
    <>
      <section id="Home-carousel" className="Home-carousel">
        <Sectionhead sectionname="Home Carousel" />
        <div className="container">
          <div className="carousel-image-box">
            <div className="row">
              <div className="col-sm-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                  alt=""
                />
                <Button
                  variant="primary"
                  className="mt-1 carousel-image-delete"
                  onClick={onDelete}
                >
                  <FontAwesomeIcon icon={faTrash} className="me-2" />
                  <span>Delete Image</span>
                </Button>
              </div>

              <div className="col-sm-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center p-2  CarouselImageUploader">
                <CarouselImageUploader />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselImages;
