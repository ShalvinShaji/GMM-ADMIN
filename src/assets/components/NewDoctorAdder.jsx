import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCloudArrowUp,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const NewDoctorItemAdder = () => {
  const imageInput = useRef(null);
  const [DoctorName, setDoctorName] = useState("");
  const [selectedDepartment, setselectedDepartment] = useState("option1");
  const [DoctorQualification, setDoctorQualification] = useState("");
  const [DoctorRole, setDoctorRole] = useState("");
  const [DoctorOpTime, setDoctorOptime] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "data:image/png;base64,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"
  ); // Set the initial sample image URL
  const [ShowSavePopup, setShowSavePopup] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDoctorNameChange = (event) => {
    setDoctorName(event.target.value);
  };
  const handleDoctorQualification = (event) => {
    setDoctorQualification(event.target.value);
  };
  const handleDoctorRole = (event) => {
    setDoctorRole(event.target.value);
  };

  const handleDepartmentChange = (e) => {
    setselectedDepartment(e.target.value);
  };
  const handleDoctorOpTime = (e) => {
    setDoctorOptime(e.target.value);
  };
  const departmentsList = [
    { id: "1", name: "Genaral medicine" },
    { id: "2", name: "Cardiology" },
    { id: "3", name: "Home care and palliative care" },
  ];

  const handleSaveDoctor = () => {
    if (
      !DoctorName ||
      !DoctorQualification ||
      !DoctorRole ||
      !imageUrl ||
      !DoctorOpTime
    ) {
      // If any field is empty, show an alert
      alert("Please fill in all the fields");
    } else {
      // If all fields are filled, show the save popup
      setShowSavePopup(true);
    }
  };

  const handleConfirmSaveDoctor = () => {
    const newDoctor = {
      name: DoctorName,
      department: selectedDepartment,
      qualification: DoctorQualification,
      role: DoctorRole,
      opTime: DoctorOpTime,
      imageUrl: imageUrl,
    };

    // Reset the state values to null
    setDoctorName("");
    setselectedDepartment("option1");
    setDoctorQualification("");
    setDoctorRole("");
    setDoctorOptime("");
    setImageUrl(
      "data:image/png;base64,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"
    );
    setShowSavePopup(false);
  };

  const handleSavePopupClose = () => {
    setShowSavePopup(false);
  };

  return (
    <>
      <section>
        <Sectionhead sectionname="Add Doctor" />
        <div className="container">
          <div className="back-to-prev d-flex justify-content-end align-items-start mb-4">
            <Link to="/Doctors">
              <Button className="image-select-delete-btn">
                <span className="text-white">Doctors</span>
                <FontAwesomeIcon
                  icon={faUserDoctor}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="Doctor-image">
                {imageUrl && (
                  <img src={imageUrl} alt="Uploaded" className="img-fluid" />
                )}
              </div>
              <Button
                onClick={() => imageInput.current.click()}
                className="image-select-delete-btn mt-3 mb-4"
              >
                <span>Select Doctor Image</span>
                <FontAwesomeIcon icon={faImage} className="ms-2" />
              </Button>
            </div>
            <div className="col-lg-5">
              <Form>
                <Form.Group>
                  <Form.Control
                    ref={imageInput}
                    type="file"
                    className="image-input-selecter"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="input-labels">
                    Add Doctor Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Doctor Name here..."
                    value={DoctorName}
                    onChange={handleDoctorNameChange}
                    className="input-fields"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="input-labels">
                    Select Doctor Department
                  </Form.Label>
                  <div>
                    <select
                      value={selectedDepartment}
                      onChange={handleDepartmentChange}
                      style={{
                        width: "300px",
                        height: "30px",
                        border: "1px soild black",
                        borderRadius: "5px",
                        outline: "none",
                      }}
                    >
                      {departmentsList.map((department) => (
                        <option key={department.id} value={department.id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="input-labels">
                    Add Doctor Qualification
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Doctor Qualification here..."
                    value={DoctorQualification}
                    onChange={handleDoctorQualification}
                    className="input-fields"
                    required
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-lg-5">
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label className="input-labels">
                    Add Doctor Role
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Doctor Role Name here..."
                    value={DoctorRole}
                    onChange={handleDoctorRole}
                    className="input-fields"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="input-labels">
                    Add Doctor OP time
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Doctor op time here like Monday-Friday 9AM-5PM"
                    value={DoctorOpTime}
                    onChange={handleDoctorOpTime}
                    className="input-fields"
                    required
                  />
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="save-Doctor-btn d-flex justify-content-center align-items-center">
            <Button
              className="image-select-delete-btn"
              onClick={handleSaveDoctor}
            >
              <span>Save Doctor</span>
              <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
            </Button>
          </div>
        </div>
      </section>
      <CustomPopup
        show={ShowSavePopup}
        onHide={handleSavePopupClose}
        onConfirm={handleConfirmSaveDoctor}
        message="Do you want to add this doctor?"
      />
    </>
  );
};

export default NewDoctorItemAdder;
