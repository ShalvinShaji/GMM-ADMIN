import React, { useState } from "react";
import "../css/Gallery.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const NewGalleryItemAdder = () => {
  const [albumTitle, setAlbumTitle] = useState("");
  const handleTitleChange = (event) => {
    setAlbumTitle(event.target.value);
  };

  const createAlbum = () => {
    let newAlbumTitle =
      albumTitle.charAt(0).toUpperCase() + albumTitle.slice(1);
    console.log("Album created with title:", newAlbumTitle);
    setAlbumTitle("");
  };

  return (
    <div className="New-Gallery-Item-Adder">
      <div className="gallery-item-name">
        <h4 className="text-center">Create a new album</h4>
        <input
          type="text"
          placeholder="Enter the album title here.."
          value={albumTitle}
          onChange={handleTitleChange}
        />
      </div>
      <Button
        variant="primary"
        className="mt-1 carousel-image-upload"
        onClick={createAlbum}
      >
        <FontAwesomeIcon icon={faCloudArrowUp} className="me-2" />
        <span>Save Album</span>
      </Button>
    </div>
  );
};

export default NewGalleryItemAdder;
