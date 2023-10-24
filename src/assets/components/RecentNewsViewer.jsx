import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faNewspaper,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const RecentNewsViewer = () => {
  const initialNewsData = [
    {
      id: 1,
      title: "News 1",
      image: "https://images.hdqwalls.com/wallpapers/hellsweeper-vr-sy.jpg",
      shortDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adipisci natus quibusdam a doloremque?",
      date: "August 2023",
    },
    {
      id: 2,
      title: "News 2",
      image: "https://images.hdqwalls.com/wallpapers/hellsweeper-vr-sy.jpg",
      shortDesc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit nisi consequatur eligendi est doloribus! Adipisci natus quibusdam a doloremque?",
      date: "August 2023",
    },
    // Add more news items as needed
  ];

  const [newsData, setNewsData] = useState(initialNewsData);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const handleDeleteNews = (id) => {
    setSelectedNewsId(id);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    const updatedNews = newsData.filter((News) => News.id !== selectedNewsId);
    setNewsData(updatedNews);
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section className="Recent-News">
        <Sectionhead sectionname="Recent News" />
        <div className="container">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/NewNews">
              <Button className="image-select-delete-btn">
                <span className="text-white">Add News</span>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
          <div className="row g-2">
            {newsData.map((news) => (
              <div key={news.id} className="col-xl-4 col-md-6  p-3">
                <div className="post-box p-3">
                  <div className="post-img d-flex justify-content-center">
                    <img
                      src={news.image}
                      alt="news-img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="post-title d-flex justify-content-between">
                    <p className=" text-wrap">{news.title}</p>
                  </div>
                  <div className="news-post-short-desc">
                    <p>{news.shortDesc}</p>
                  </div>
                  <div className="news-details d-flex justify-content-between align-items-center">
                    <p className="post-date text-end m-0">{news.date}</p>
                  </div>
                </div>
                <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                  <Button
                    variant="primary"
                    className="image-select-delete-btn"
                    onClick={() => handleDeleteNews(news.id)}
                  >
                    <span>Delete Post</span>
                    <FontAwesomeIcon icon={faTrash} className="ms-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CustomPopup
        show={showPopup}
        onHide={handlePopupClose}
        onConfirm={handleConfirmDelete}
        message="Do you really want to delete this News?"
      />
    </>
  );
};

export default RecentNewsViewer;
