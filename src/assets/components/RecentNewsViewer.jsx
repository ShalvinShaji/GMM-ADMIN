import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faNewspaper,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RecentNewsViewer = () => {
  return (
    <>
      <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
        <Link to="/NewNews">
          <Button className="image-select-delete-btn">
            <span className="text-white">Add News</span>
            <FontAwesomeIcon icon={faNewspaper} className="ms-2 text-white" />
          </Button>
        </Link>
      </div>
      <div className="row g-2">
        <div className="col-xl-4 col-md-6 post-box p-3">
          <div className="post-img d-flex justify-content-center">
            <img
              src="https://images.hdqwalls.com/wallpapers/hellsweeper-vr-sy.jpg"
              alt="news-img"
              className="img-fluid"
            />
          </div>
          <div className="post-title d-flex justify-content-between">
            <p className=" text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              neque.
            </p>
          </div>
          <div className="post-short-desc">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              distinctio commodi ad quos consectetur vitae.
            </p>
          </div>
          <div className="news-details d-flex justify-content-between align-items-center">
            <p className="post-date text-end m-0">August 2023</p>
            <Button variant="primary" className="image-select-delete-btn">
              <span>Read more</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="arrow-icon ms-2"
              />
            </Button>
          </div>
          <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
            <Button variant="primary" className="image-select-delete-btn">
              <span>Delete Post</span>
              <FontAwesomeIcon icon={faTrash} className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentNewsViewer;
