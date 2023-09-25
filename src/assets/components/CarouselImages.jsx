import React from "react";
import "../css/CarouselImages.css";
import Button from "react-bootstrap/Button";
import Sectionhead from "../components/Sectionhead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CarouselImages = () => {
  const onDelete = () => {
    console.log("image deleted");
  };

  return (
    <>
      <section id="Home-carousel" className="Home-carousel">
        <Sectionhead sectionname="Home Carousel" />
        <div className="container">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/NewCarouselImage">
              <Button className="image-select-delete-btn">
                <span className="text-white">Add New Image</span>
                <FontAwesomeIcon icon={faImage} className="ms-2 text-white" />
              </Button>
            </Link>
          </div>
          <div className="carousel-image-box">
            <div className="row g-3">
              <div className="  col-md-6 col-xl-4 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://images.hdqwalls.com/download/the-chronicles-of-john-wick-8s-1537x722.jpg"
                  alt=""
                  className="img-fluid"
                />

                <Button
                  onClick={onDelete}
                  className="image-select-delete-btn mt-3 mb-3"
                >
                  <span>Delete Image</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
              <div className="  col-md-6 col-xl-4 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://images.hdqwalls.com/download/the-chronicles-of-john-wick-8s-1537x722.jpg"
                  alt=""
                  className="img-fluid"
                />

                <Button
                  onClick={onDelete}
                  className="image-select-delete-btn mt-3 mb-3"
                >
                  <span>Delete Image</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
              <div className="  col-md-6 col-xl-4 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://images.hdqwalls.com/download/the-chronicles-of-john-wick-8s-1537x722.jpg"
                  alt=""
                  className="img-fluid"
                />

                <Button
                  onClick={onDelete}
                  className="image-select-delete-btn mt-3 mb-3"
                >
                  <span>Delete Image</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselImages;
