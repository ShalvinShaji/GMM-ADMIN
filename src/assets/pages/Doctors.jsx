import { React, useState } from "react";
import Sectionhead from "../components/Sectionhead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const Doctors = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedDoctorID, setSelectedDoctorID] = useState("");

  const handleDoctorDelete = (id) => {
    setSelectedDoctorID(id);
    setShowDeletePopup(true);
  };

  const handleConfirmDoctorDelete = () => {
    console.log("deleted", selectedDoctorID);
    setShowDeletePopup(false);
  };

  const handleDeletePopupClose = () => {
    setShowDeletePopup(false);
  };

  function doctorsData() {
    const doctorsDataList = [
      {
        id: 1,
        deparmentid: "general-medicine",
        name: "Dr. K. A Chacko",
        qualification: "MBBS, FCAMS",
        role: "Chief Medical Officer",
        optime: "Monday-Friday 9AM-5PM",
        imageSrc:
          "https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg",
      },
      {
        id: 2,
        deparmentid: "general-medicine",
        name: "Dr. K. A Chacko",
        qualification: "MBBS, FCAMS",
        role: "Chief Medical Officer",
        optime: "Monday-Friday 9AM-5PM",
        imageSrc:
          "https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg",
      },
    ];

    return (
      <div className="row gy-4">
        {doctorsDataList.map((doctor) => (
          <div key={doctor.id} className="col-md-6 col-lg-4 col-xl-3 ">
            <div className="member d-flex flex-column align-items-center justify-content-center">
              <div className="pic">
                <img
                  src={doctor.imageSrc}
                  className="mb-3"
                  alt={`Dr. ${doctor.name}`}
                />
              </div>
              <div className="member-info text-center">
                <h4 className="doctor-name m-0">{doctor.name}</h4>
                <p className="doctor-qualification m-0 mt-1">
                  {doctor.qualification}
                </p>
                <p className="m-0 mt-2">{doctor.role}</p>
                <p className="doctor-optime m-0 mt-2">{doctor.optime}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="primary"
                className="image-select-delete-btn mt-3 mb-3"
                onClick={() => handleDoctorDelete(doctor.id)}
              >
                <span>Delete Doctor</span>
                <FontAwesomeIcon icon={faTrash} className="ms-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }

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
          {doctorsData()}
        </div>
      </section>
      <CustomPopup
        show={showDeletePopup}
        onHide={handleDeletePopupClose}
        onConfirm={handleConfirmDoctorDelete}
        message="Do you want to delete this doctor?"
      />
    </>
  );
};

export default Doctors;
