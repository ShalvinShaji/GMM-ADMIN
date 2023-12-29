import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrash } from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  const deleteGalleryAlbum = (id) => {
    setSelectedAlbumId(id);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    console.log("deleted", selectedAlbumId);
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  function galleryData() {
    const initialalbumData = [
      {
        id: 1,
        name: "Hospital Ward",
        images: [
          "https://source.unsplash.com/1000x600/?hospital",
          "https://source.unsplash.com/1000x601/?hospital",
          "https://source.unsplash.com/1000x602/?hospital",
          "https://source.unsplash.com/1000x602/?hospital",
          "https://source.unsplash.com/1000x602/?hospital",
        ],
      },
      {
        id: 2,
        name: "Emergency Room",
        images: [
          "https://source.unsplash.com/1000x603/?hospital",
          "https://source.unsplash.com/1000x604/?hospital",
          "https://source.unsplash.com/1000x605/?hospital",
        ],
      },
    ];

    return (
      <div>
        {initialalbumData.map((album) => (
          <div className="row" key={album.id}>
            <div className="album-box">
              <div className="album-delete-section mt-3 mb-2 d-flex justify-content-start align-items-center">
                <p className="album-title text-start m-0 text-capitalize">
                  {album.name}
                </p>
                <Button
                  className="image-select-delete-btn ms-2"
                  onClick={() => deleteGalleryAlbum(album.id)}
                >
                  <span className="text-white">Delete Album</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2 text-white" />
                </Button>
              </div>
              <div className="row">
                {album.images.map((image, index) => (
                  <div
                    className="album-img-box col-md-4 col-xl-3 mb-4 d-flex flex-column justify-content-center align-items-start"
                    key={index}
                  >
                    <img src={image} alt="" className="img-fluid" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <section id="Image-gallery" className="Image-gallery">
        <Sectionhead sectionname="Gallery" />
        <div className="container">
          <div className="col d-flex justify-content-end">
            <Link to="/NewGalleryAlbum">
              <Button className="image-select-delete-btn">
                <span className="text-white">Add New Album</span>
                <FontAwesomeIcon icon={faImage} className="ms-2 text-white" />
              </Button>
            </Link>
          </div>
          {galleryData()}
        </div>
      </section>
      <CustomPopup
        show={showPopup}
        onHide={handlePopupClose}
        onConfirm={handleConfirmDelete}
        message="Do you really want to delete this Album?"
      />
    </>
  );
};

export default Gallery;
