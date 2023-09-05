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
                  onClick={onDelete}
                  className="image-select-delete-btn mt-3 mb-3"
                >
                  <span>Delete Image</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>

              <div className="col-sm-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center  ">
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
