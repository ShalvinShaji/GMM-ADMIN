import React from "react";
import "../css/Gallery.css";
import NewImageAdder from "../components/NewImageAdder";
import Sectionhead from "../components/Sectionhead";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import NewGalleryItemAdder from "../components/NewGalleryItemAdder";

const Gallery = () => {
  const onDelete = () => {
    console.log("Image deleted");
  };
  return (
    <div>
      <section id="Image-gallery" className="Image-gallery">
        <Sectionhead sectionname="Gallery" />
        <div className="container">
          <div className="image-box">
            <div className="gallery-title">
              <h4 className="text-start">Gallery album name</h4>
            </div>
            <div className="row">
              <div className="img-box col-md-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
                <img
                  src="https://images.hdqwalls.com/wallpapers/lionel-messi-and-cristiano-ronaldo-louis-vuitton-5k-v8.jpg"
                  alt=""
                  className="img-fluid"
                />
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Image</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>

              <div className="col-md-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center newImageAdder">
                <NewImageAdder />
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column justify-content-center   align-items-center   p-2">
            <NewGalleryItemAdder />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
