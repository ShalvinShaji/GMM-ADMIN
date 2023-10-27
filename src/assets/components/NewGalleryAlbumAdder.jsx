import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faImage } from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import CustomPopup from "../components/CustomPopup";

const NewGalleryItemAdder = () => {
  const AlbumImageInput = useRef(null);
  const [albumTitle, setAlbumTitle] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [showSavePopup, setShowSavePopup] = useState(false);

  const handleGalleryAlbumTitleChange = (event) => {
    setAlbumTitle(event.target.value);
  };

  const handleAlbumImageChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const newSelectedImages = [];

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newSelectedImages.push(e.target.result);

          if (newSelectedImages.length === files.length) {
            setSelectedImages(newSelectedImages);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  const renderSelectedImages = () => {
    return selectedImages.map((imageUrl, index) => (
      <div key={index} className="col-md-3 mb-4 ">
        <img src={imageUrl} alt={`Image ${index}`} className="img-fluid" />
      </div>
    ));
  };

  const handleSaveAlbum = () => {
    if (!albumTitle || selectedImages.length === 0) {
      // If any of the required fields are empty, show an alert
      alert("Please fill in all the required fields.");
    } else {
      setShowSavePopup(true);
    }
  };

  const handleConfirmSaveAlbum = () => {
    let newAlbumTitle =
      albumTitle.charAt(0).toUpperCase() + albumTitle.slice(1);
    const newAlbumItem = {
      title: newAlbumTitle,
      image: selectedImages,
    };
    console.log(newAlbumItem);

    setShowSavePopup(false);
    setAlbumTitle("");
    setSelectedImages([]);
  };

  const handleSavePopupClose = () => {
    setShowSavePopup(false);
  };

  return (
    <>
      <section className="album-adder">
        <Sectionhead sectionname="Add New Album" />
        <div className="container">
          <div className="row mb-4">
            <div className="col d-flex justify-content-end">
              <Link to="/Gallery">
                <Button className="image-select-delete-btn">
                  <span className="text-white">Gallery</span>
                  <FontAwesomeIcon icon={faImage} className="ms-2 text-white" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="data-adder">
            <div className="row mb-4 ">
              <div className="col-6">
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Label className="input-labels">
                      Add album Title
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter album title here..."
                      value={albumTitle}
                      onChange={handleGalleryAlbumTitleChange}
                      className="input-fields "
                      maxLength="200"
                      required
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="col-12 gallery-album-name">
                <Form>
                  <Form.Group>
                    <Form.Label className="input-labels">
                      Add album Images
                    </Form.Label>
                    <Form.Control
                      ref={AlbumImageInput}
                      type="file"
                      className="image-input-selecter hidden"
                      onChange={handleAlbumImageChange}
                      required
                      multiple
                    />
                  </Form.Group>

                  <Button
                    onClick={() => AlbumImageInput.current.click()}
                    className="image-select-delete-btn mb-3"
                  >
                    <span>Select Images</span>
                    <FontAwesomeIcon icon={faImage} className="ms-2" />
                  </Button>
                </Form>
              </div>
              <div className="row">{renderSelectedImages()}</div>
              <div className="create-album d-flex justify-content-center align-items-center">
                <Button
                  onClick={handleSaveAlbum}
                  className="image-select-delete-btn  mb-2"
                >
                  <span>Create Album</span>
                  <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomPopup
        show={showSavePopup}
        onHide={handleSavePopupClose}
        onConfirm={handleConfirmSaveAlbum}
        message="Do you really want to save this Album?"
      />
    </>
  );
};

export default NewGalleryItemAdder;
