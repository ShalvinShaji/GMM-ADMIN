import React from "react";
import Sectionhead from "./Sectionhead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const CareersViewer = () => {
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
            <div className="col-xl-4 col-md-6  p-3">
              <div className="post-box p-3">
                <div className="post-img d-flex justify-content-center">
                  <img
                    src="https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg"
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe distinctio commodi ad quos consectetur vitae.
                  </p>
                </div>
                <div className="post-date">
                  <p className="text-end">june, 2023</p>
                </div>
              </div>
              <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                <Button variant="primary" className="image-select-delete-btn">
                  <span>Delete Career</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-xl-4 col-md-6  p-3">
              <div className="post-box p-3">
                <div className="post-img d-flex justify-content-center">
                  <img
                    src="https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg"
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe distinctio commodi ad quos consectetur vitae.
                  </p>
                </div>
                <div className="post-date">
                  <p className="text-end">june, 2023</p>
                </div>
              </div>
              <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                <Button variant="primary" className="image-select-delete-btn">
                  <span>Delete Career</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-xl-4 col-md-6  p-3">
              <div className="post-box p-3">
                <div className="post-img d-flex justify-content-center">
                  <img
                    src="https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg"
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe distinctio commodi ad quos consectetur vitae.
                  </p>
                </div>
                <div className="post-date">
                  <p className="text-end">june, 2023</p>
                </div>
              </div>
              <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                <Button variant="primary" className="image-select-delete-btn">
                  <span>Delete Career</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-xl-4 col-md-6  p-3">
              <div className="post-box p-3">
                <div className="post-img d-flex justify-content-center">
                  <img
                    src="https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg"
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe distinctio commodi ad quos consectetur vitae.
                  </p>
                </div>
                <div className="post-date">
                  <p className="text-end">june, 2023</p>
                </div>
              </div>
              <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                <Button variant="primary" className="image-select-delete-btn">
                  <span>Delete Career</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-xl-4 col-md-6  p-3">
              <div className="post-box p-3">
                <div className="post-img d-flex justify-content-center">
                  <img
                    src="https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg"
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe distinctio commodi ad quos consectetur vitae.
                  </p>
                </div>
                <div className="post-date">
                  <p className="text-end">june, 2023</p>
                </div>
              </div>
              <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                <Button variant="primary" className="image-select-delete-btn">
                  <span>Delete Career</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-xl-4 col-md-6  p-3">
              <div className="post-box p-3">
                <div className="post-img d-flex justify-content-center">
                  <img
                    src="https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg"
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe distinctio commodi ad quos consectetur vitae.
                  </p>
                </div>
                <div className="post-date">
                  <p className="text-end">june, 2023</p>
                </div>
              </div>
              <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                <Button variant="primary" className="image-select-delete-btn">
                  <span>Delete Career</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-xl-4 col-md-6  p-3">
              <div className="post-box p-3">
                <div className="post-img d-flex justify-content-center">
                  <img
                    src="https://images.hdqwalls.com/download/punisher-dark-avenger-65-1538x726.jpg"
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Saepe distinctio commodi ad quos consectetur vitae.
                  </p>
                </div>
                <div className="post-date">
                  <p className="text-end">june, 2023</p>
                </div>
              </div>
              <div className="post-delete d-flex justify-content-center align-items-center mt-2 mb-2">
                <Button variant="primary" className="image-select-delete-btn">
                  <span>Delete Career</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersViewer;
