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

const NewNewsItemAdder = () => {
  const imageInput = useRef(null);
  const [NewsTitle, setNewsTitle] = useState("");
  const [NewsDescription, setNewsDescription] = useState("");
  const [NewsDate, setNewsDate] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Set the initial sample image URL

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
  const handleNews = () => {
    console.log("News Title:", NewsTitle);
    console.log("News Date:", NewsDate);
    console.log("News Description:", NewsDescription);
    console.log("news uploaded");
  };
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

          <Form>
            <Form.Group className="">
              <Form.Label className="add-news-title">Add News Image</Form.Label>
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
              <Form.Label className="add-news-title">Add News Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter news title here..."
                value={NewsTitle}
                onChange={handleNewsTitleChange}
                className="news-title-area "
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="3">
              <Form.Label className="add-news-date">Add News Month</Form.Label>
              <Form.Control
                type="month"
                value={NewsDate}
                onChange={handleNewsDateChange}
                className="news-date-area"
                min="2023-08"
                max="3000-08"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="add-news-descrption">
                Add News Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                className="news-descrption-text-area no-border"
                placeholder="Enter the news description here..."
                value={NewsDescription}
                onChange={handleNewsDescriptionChange}
                required
              />
            </Form.Group>
          </Form>
          <div className="save-news-btn d-flex justify-content-center align-items-center">
            <Button className="image-select-delete-btn" onClick={handleNews}>
              <span>Save News</span>
              <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewNewsItemAdder;
