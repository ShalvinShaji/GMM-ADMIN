import React from "react";
import Sectionhead from "../components/Sectionhead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const DoctorsViewer = () => {
  const onDelete = () => {
    console.log("doctor deleted");
  };
  return (
    <>
      <section className="Doctors">
        <Sectionhead sectionname="View/Remove Doctors" />
        <div className="container">
          <div className="row mb-4">
            <div className="col d-flex justify-content-end">
              <Link to="/NewDoctor">
                <Button className="image-select-delete-btn">
                  <span className="text-white">Add Doctor</span>
                  <FontAwesomeIcon
                    icon={faUserDoctor}
                    className="ms-2 text-white"
                  />
                </Button>
              </Link>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 ">
              <div className="member d-flex flex-column align-items-center justify-content-center">
                <div className="pic">
                  <img
                    src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div className="member-info text-center">
                  <h4 className="m-0">Dr. K. A Chacko</h4>
                  <span className="doctor-qualification">(MBBS, FCAMS)</span>
                  <h4>Chief Medical Officer</h4>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="image-select-delete-btn mt-3 mb-3"
                  onClick={onDelete}
                >
                  <span>Delete Doctor</span>
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

export default DoctorsViewer;
