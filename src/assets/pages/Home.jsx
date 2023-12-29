import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Sectionhead from "../components/Sectionhead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const Home = () => {
  const carouselImages = [
    {
      id: 1,
      src: {
        small: "https://source.unsplash.com/random/800x600?medical=1",
      },
    },
    {
      id: 2,
      src: {
        small: "https://source.unsplash.com/random/800x600?medical=2",
      },
    },
    {
      id: 3,
      src: {
        small: "https://source.unsplash.com/random/800x600?medical=3",
      },
    },
    {
      id: 4,
      src: {
        small: "https://source.unsplash.com/random/800x600?medical=4",
      },
    },
    {
      id: 5,
      src: {
        small: "https://source.unsplash.com/random/800x600?medical=5",
      },
    },
    {
      id: 6,
      src: {
        small: "https://source.unsplash.com/random/800x600?medical=6",
      },
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  const [selectedImageId, setSelectedImageId] = useState(null);
  const handleDelete = (id) => {
    setSelectedImageId(id);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Image with id ${selectedImageId} deleted`);
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  function homeCarouselData() {
    const carouselImages = [
      {
        id: 1,
        src: {
          small: "https://source.unsplash.com/random/800x600?medical=1",
        },
      },
      {
        id: 2,
        src: {
          small: "https://source.unsplash.com/random/800x600?medical=2",
        },
      },
      {
        id: 3,
        src: {
          small: "https://source.unsplash.com/random/800x600?medical=3",
        },
      },
      {
        id: 4,
        src: {
          small: "https://source.unsplash.com/random/800x600?medical=4",
        },
      },
      {
        id: 5,
        src: {
          small: "https://source.unsplash.com/random/800x600?medical=5",
        },
      },
      {
        id: 6,
        src: {
          small: "https://source.unsplash.com/random/800x600?medical=6",
        },
      },
    ];

    return (
      <div className="row g-3 ">
        {carouselImages.map((image) => (
          <div
            key={image.id}
            className="col-md-6 col-xl-4 d-flex flex-column justify-content-center align-items-center"
          >
            <img src={image.src.small} alt="" className="img-fluid" />
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
    );
  }

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
          <div className="carousel-image-box ">{homeCarouselData()}</div>
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

export default Home;
