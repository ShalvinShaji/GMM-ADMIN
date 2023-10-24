import React, { useState } from "react";
import Sectionhead from "./Sectionhead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import CustomPopup from "../components/CustomPopup";

const initialCareersData = [
  {
    id: 1,
    title: "Career 1",
    description:
      "Description for Career 1 nnnnnnnnnnnzdaaaa ajkankfnakfj asjnfkafnlka alkjalfjalf alkkkkkkkkkkkkk",
    date: "June, 2023",
    image:
      "https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg",
  },
  {
    id: 2,
    title: "Career 2",
    description:
      "Description for Career 2 nnnnnnnnnnnzdaaaa ajkankfnakfj asjnfkafnlka alkjalfjalf alkkkkkkkkkkkkk",
    date: "June, 2023",
    image:
      "https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg",
  },
  {
    id: 3,
    title: "Career 3",
    description:
      "Description for Career 3 nnnnnnnnnnnzdaaaa ajkankfnakfj asjnfkafnlka alkjalfjalf alkkkkkkkkkkkkk",
    date: "June, 2023",
    image:
      "https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg",
  },
];

const CareersViewer = () => {
  const [careersData, setCareersData] = useState(initialCareersData);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCareerId, setSelectedCareerId] = useState(null);

  const deleteCareer = (id) => {
    setSelectedCareerId(id);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    const updatedCareers = careersData.filter(
      (career) => career.id !== selectedCareerId
    );
    setCareersData(updatedCareers);
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section>
        <Sectionhead sectionname="Careers" />
        <div className="container">
          <div className="row mb-4">
            <div className="col d-flex justify-content-end">
              <Link to="/NewCareer">
                <Button className="image-select-delete-btn">
                  <span className="text-white">Add New Career</span>
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    className="ms-2 text-white"
                  />
                </Button>
              </Link>
            </div>
          </div>
          <div className="row g-2">
            {careersData.map((career) => (
              <div key={career.id} className="col-xl-4 col-md-6 p-3">
                <div className="post-box p-3">
                  <div className="post-img d-flex justify-content-center align-items-center">
                    <img
                      src={career.image}
                      alt="career-img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="post-title d-flex justify-content-between align-items-center">
                    <p className="text-wrap my-1">{career.title}</p>
                  </div>
                  <div className="post-short-desc">
                    <p>{career.description}</p>
                  </div>
                  <div className="post-date">
                    <p className="text-end">{career.date}</p>
                  </div>
                </div>
                <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                  <Button
                    variant="primary"
                    className="image-select-delete-btn"
                    onClick={() => deleteCareer(career.id)}
                  >
                    <span>Delete Career</span>
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
        message="Do you really want to delete this Career?"
      />
    </>
  );
};

export default CareersViewer;
