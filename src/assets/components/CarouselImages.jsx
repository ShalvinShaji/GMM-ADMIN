import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Sectionhead from "../components/Sectionhead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const CarouselImages = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://images.hdqwalls.com/download/the-chronicles-of-john-wick-8s-1537x722.jpg",
    },
    {
      id: 2,
      src: "https://images.hdqwalls.com/download/2022-the-batman-minimal-5k-1m-1544x724.jpg",
    },
    {
      id: 3,
      src: "https://images.hdqwalls.com/download/the-batman-riddle-5k-js-1544x724.jpg",
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const [selectedImageId, setSelectedImageId] = useState(null);
  const handleDelete = (id) => {
    setSelectedImageId(id);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    const updatedImages = images.filter(
      (image) => image.id !== selectedImageId
    );
    setImages(updatedImages);
    console.log(`Image with id ${selectedImageId} deleted`);
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
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
          <div className="carousel-image-box ">
            <div className="row g-3 ">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="col-md-6 col-xl-4 d-flex flex-column justify-content-center align-items-center"
                >
                  <img src={image.src} alt="" className="img-fluid" />
                  <Button
                    onClick={() => handleDelete(image.id)}
                    className="image-select-delete-btn mt-3 mb-3"
                  >
                    <span>Delete Image</span>
                    <FontAwesomeIcon icon={faTrash} className="ms-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CustomPopup
        show={showPopup}
        onHide={handlePopupClose}
        onConfirm={handleConfirmDelete}
        message="Do you really want to delete this image?"
      />
    </>
  );
};

export default CarouselImages;
