import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";

const GalleryImagesViewer = () => {
  const deleteAlbumImages = () => {
    console.log("Album deleted");
  };
  return (
    <>
      <section id="Image-gallery" className="Image-gallery">
        <Sectionhead sectionname="Gallery" />
        <div className="container">
          <div className="row mb-4">
            <div className="col d-flex justify-content-end">
              <Link to="/NewGalleryAlbum">
                <Button className="image-select-delete-btn">
                  <span className="text-white">Add New Album</span>
                  <FontAwesomeIcon icon={faImage} className="ms-2 text-white" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="album-box">
              <div className="album-delete-section mt-3 mb-2 d-flex justify-content-start align-items-center">
                <p className="album-title text-start m-0 text-capitalize">
                  Gallery album name
                </p>
                <Button
                  className="image-select-delete-btn ms-2"
                  onClick={deleteAlbumImages}
                >
                  <span className="text-white">Delete Album</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2 text-white" />
                </Button>
              </div>
              <div className="row">
                <div className="album-img-box col-md-4  col-xl-3  mb-4 d-flex flex-column justify-content-center align-items-start">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/lionel-messi-and-cristiano-ronaldo-louis-vuitton-5k-v8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="album-img-box col-md-4  col-xl-3  mb-4 d-flex flex-column justify-content-center align-items-start">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/lionel-messi-and-cristiano-ronaldo-louis-vuitton-5k-v8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="album-img-box col-md-4  col-xl-3  mb-4 d-flex flex-column justify-content-center align-items-start">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/lionel-messi-and-cristiano-ronaldo-louis-vuitton-5k-v8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="album-img-box col-md-4  col-xl-3  mb-4 d-flex flex-column justify-content-center align-items-start">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/lionel-messi-and-cristiano-ronaldo-louis-vuitton-5k-v8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="album-img-box col-md-4  col-xl-3  mb-4 d-flex flex-column justify-content-center align-items-start">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/lionel-messi-and-cristiano-ronaldo-louis-vuitton-5k-v8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="album-img-box col-md-4  col-xl-3  mb-4 d-flex flex-column justify-content-center align-items-start">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/lionel-messi-and-cristiano-ronaldo-louis-vuitton-5k-v8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="album-img-box col-md-4  col-xl-3  mb-4 d-flex flex-column justify-content-center align-items-start">
                  <img
                    src="https://images.hdqwalls.com/wallpapers/lionel-messi-and-cristiano-ronaldo-louis-vuitton-5k-v8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"></div>
    </>
  );
};

export default GalleryImagesViewer;
