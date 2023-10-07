import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faImage } from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const NewGalleryItemAdder = () => {
  const AlbumImageInput = useRef(null);
  const [albumTitle, setAlbumTitle] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const handleGalleryAlbumTitleChange = (event) => {
    setAlbumTitle(event.target.value);
  };

  const createAlbum = () => {
    let newAlbumTitle =
      albumTitle.charAt(0).toUpperCase() + albumTitle.slice(1);
    console.log("Album created with title :", newAlbumTitle);
    console.log("Album created with images", selectedImages);
    setAlbumTitle("");
    setSelectedImages([]);
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
      <div key={index} className="col-md-3 mb-4">
        <img src={imageUrl} alt={`Image ${index}`} className="img-fluid" />
      </div>
    ));
  };
  return (
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
        <div className="row mb-4">
          <div className="gallery-album-name">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="add-album-title">
                  Add album Title
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter album title here..."
                  value={albumTitle}
                  onChange={handleGalleryAlbumTitleChange}
                  className="news-title-area "
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  ref={AlbumImageInput}
                  type="file"
                  className="image-input-selecter hidden"
                  onChange={handleAlbumImageChange}
                  required
                  multiple
                />
              </Form.Group>
            </Form>
            <Button
              onClick={() => AlbumImageInput.current.click()}
              className="image-select-delete-btn"
            >
              <span>Select Images</span>
              <FontAwesomeIcon icon={faImage} className="ms-2" />
            </Button>
          </div>
        </div>
        <div className="row">{renderSelectedImages()}</div>
        <div className="create-album d-flex justify-content-center align-items-center">
          <Button
            onClick={createAlbum}
            className="image-select-delete-btn  mb-2"
          >
            <span>Create Album</span>
            <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewGalleryItemAdder;
