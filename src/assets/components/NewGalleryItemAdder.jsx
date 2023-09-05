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
        <h4 className="text-start">Create a new album</h4>
        <input
          type="text"
          placeholder="Enter the album title here.."
          value={albumTitle}
          onChange={handleTitleChange}
        />
      </div>
      <Button
        variant="primary"
        className="image-select-delete-btn mt-3 mb-3"
        onClick={createAlbum}
      >
        <span>Save Album</span>
        <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
      </Button>
    </div>
  );
};

export default NewGalleryItemAdder;
