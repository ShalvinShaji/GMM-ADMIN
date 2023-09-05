import React from "react";
import "../css/RecentNews.css";
import Sectionhead from "../components/Sectionhead";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NewNewsItemAdder from "../components/NewNewsItemAdder";

const RecentNews = () => {
  return (
    <section className="Recent-News" id="Recent-News">
      <Sectionhead sectionname="Recent News" />
      <div className="container">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, neque.
              </p>
            </div>
            <div className="post-short-desc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
                distinctio commodi ad quos consectetur vitae.
              </p>
            </div>
            <div className="news-details d-flex justify-content-between align-items-center">
              <p className="post-date text-end m-0">August 29, 2023</p>
              <Button variant="primary" className="image-select-delete-btn">
                <span>Read more</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="arrow-icon ms-2"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="row g-2">
          <NewNewsItemAdder />
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
