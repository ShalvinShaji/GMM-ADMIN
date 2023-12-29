import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCloudArrowUp,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const NewNewsItemAdder = () => {
  const imageInput = useRef(null);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Set the initial sample image URL
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
        console.log(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewsTitleChange = (event) => {
    setNewsTitle(event.target.value);
  };
  const handleNewsDescriptionChange = (event) => {
    setNewsDescription(event.target.value);
  };
  const handleNewsDateChange = (event) => {
    setNewsDate(event.target.value);
  };

  const handleSaveNews = () => {
    if (!newsTitle || !imageUrl || !newsDate || !newsDescription) {
      // If any of the required fields are empty, show an alert
      alert("Please fill in all the required fields.");
    } else {
      setShowPopup(true);
    }
  };

  const handleConfirmSaveAlbum = () => {
    const newNewsItem = {
      title: newsTitle,
      description: newsDescription,
      date: newsDate,
      image: imageUrl,
    };
    console.log(newNewsItem);
    setShowPopup(false);
    setNewsTitle("");
    setNewsDate("");
    setNewsDescription("");
    setImageUrl("");
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  function newNewsData() {
    return (
      <div className="data-adder">
        <Form>
          <Form.Group>
            <Form.Label className="input-labels">Add News Image</Form.Label>
            <Form.Control
              ref={imageInput}
              type="file"
              className="image-input-selecter"
              onChange={handleFileChange}
              required
            />
          </Form.Group>
          <Button
            onClick={() => imageInput.current.click()}
            className="image-select-delete-btn  mb-3"
          >
            <span>Select Image</span>
            <FontAwesomeIcon icon={faImage} className="ms-2" />
          </Button>
          <div className="news-image">
            {imageUrl && (
              <img src={imageUrl} alt="Uploaded" className="img-fluid" />
            )}
          </div>
          <Form.Group className="mb-3">
            <Form.Label className="input-labels">Add News Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter news title here..."
              value={newsTitle}
              onChange={handleNewsTitleChange}
              className="input-fields"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="3">
            <Form.Label className="input-labels">Add News Month</Form.Label>
            <Form.Control
              type="month"
              value={newsDate}
              onChange={handleNewsDateChange}
              className="input-fields"
              min="2023-08"
              max="3000-08"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="input-labels">
              Add News Description
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              className="input-fields"
              placeholder="Enter the news description here..."
              value={newsDescription}
              onChange={handleNewsDescriptionChange}
              required
            />
          </Form.Group>
        </Form>
        <div className="save-news-btn d-flex justify-content-center align-items-center mt-4">
          <Button className="image-select-delete-btn" onClick={handleSaveNews}>
            <span>Save News</span>
            <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section>
        <Sectionhead sectionname="Add News" />
        <div className="container">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/Recent-news">
              <Button className="image-select-delete-btn">
                <span className="text-white">Back to recent News</span>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
          {newNewsData()}
        </div>
      </section>
      <CustomPopup
        show={showPopup}
        onHide={handlePopupClose}
        onConfirm={handleConfirmSaveAlbum}
        message="Do you really want to save this News?"
      />
    </>
  );
};

export default NewNewsItemAdder;
