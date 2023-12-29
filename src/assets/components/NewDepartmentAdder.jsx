import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCloudArrowUp,
  faTrash,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import CustomPopup from "../components/CustomPopup";

const NewDepartmentAdder = () => {
  const imageInput = useRef(null);
  const [departmentTitle, setdepartmentTitle] = useState("");
  const [departmentDescription, setdepartmentDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [departmentId, setDepartmentId] = useState(null);
  const [showDeletePopup, setshowDeletePopup] = useState(false);
  const [showSaveDepartmentPopup, setShowSaveDepartmentPopup] = useState(false);

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

  const handleDepartmentTitleChange = (event) => {
    setdepartmentTitle(event.target.value);
  };
  const handleDepartmentDescriptionChange = (event) => {
    setdepartmentDescription(event.target.value);
  };

  const handleDepartmentDelete = (id) => {
    setDepartmentId(id);
    setshowDeletePopup(true);
  };

  const handleConfirmDeleteDepartment = () => {
    console.log("deleted", departmentId);
    setshowDeletePopup(false);
  };

  const handleDeletePopupClose = () => {
    setshowDeletePopup(false);
  };

  const handleSaveDepartment = () => {
    // Check if all three fields are filled
    if (!departmentTitle || !departmentDescription || !imageUrl) {
      // If any field is empty, show an alert
      alert("Please fill in all the fields");
    } else {
      // If all fields are filled, show the save popup
      setShowSaveDepartmentPopup(true);
    }
  };

  const handleConfirmSaveDepartment = () => {
    const newDepartment = {
      name: departmentTitle,
      description: departmentDescription,
      banner: imageUrl,
    };
    console.log(newDepartment);

    setShowSaveDepartmentPopup(false);

    setdepartmentTitle("");
    setdepartmentDescription("");
    setImageUrl("");
  };

  const handleSavePopupClose = () => {
    setShowSaveDepartmentPopup(false);
  };

  function currentDepartmentsData() {
    var departmentsList = [
      {
        departmentId: "general-medicine",
        name: "General Medicine",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "The department of general medicine deals with the prevention, diagnosis, and treatment of adult diseases. With experienced doctors in the field, the department provides the best possible primary care.",
      },
      {
        departmentId: "cardiology",
        name: "Cardiology",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "The department of cardiology diagnoses and provides treatment for disorders related to the heart and cardiovascular system. We provide OPD based care for our patients.",
      },
      {
        departmentId: "pediatrics",
        name: "Pediatrics",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "The department provides medical care to infants, children, adolescents, and young adults. We provide outpatient services as well as inpatient service which includes assessments and vaccinations.",
      },
      {
        departmentId: "orthopedics",
        name: "Orthopedics",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "Provide medical care for issues related to the musculoskeletal system and treating injuries to bones, joints, ligaments, or tendons. We also have a well-equipped physiotherapy unit.",
      },
      {
        departmentId: "nephrology",
        name: "Nephrology",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "Provides OPD based medical care for diseases related to the kidney. We also have a dialysis unit providing treatment for kidney failure. ",
      },
      {
        departmentId: "emergency-medicine",
        name: "Emergency Medicine",
        bannerImage:
          "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
        description:
          "We provide 24*7 emergency care to patients who need immediate care.",
      },
    ];

    return (
      <div className="row gy-5">
        {departmentsList.map((department) => (
          <div
            key={department.departmentId}
            className="col-lg-3 col-md-6 col-12 text-center "
          >
            <p className="dep-item">{department.name}</p>
            <Button
              className="image-select-delete-btn"
              onClick={() => handleDepartmentDelete(department.departmentId)}
            >
              <span>Delete department</span>
              <FontAwesomeIcon icon={faTrash} className="ms-2" />
            </Button>
          </div>
        ))}
      </div>
    );
  }

  function newDepartmentData() {
    return (
      <div className="data-adder">
        <Form>
          <Form.Group>
            <Form.Label className="input-labels">
              Add Department Banner Image
            </Form.Label>
            <Form.Control
              ref={imageInput}
              type="file"
              className="image-input-selecter"
              onChange={handleFileChange}
              required
            />
          </Form.Group>

          <div className="department-image">
            {imageUrl && (
              <img src={imageUrl} alt="Uploaded" className="img-fluid" />
            )}
          </div>
          <Button
            onClick={() => imageInput.current.click()}
            className="image-select-delete-btn mt-1 mb-4"
          >
            <span>Select Image</span>
            <FontAwesomeIcon icon={faImage} className="ms-2" />
          </Button>
          <Form.Group className="mb-4">
            <Form.Label className="input-labels">
              Add Department Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department name here..."
              value={departmentTitle}
              onChange={handleDepartmentTitleChange}
              className="input-fields"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="input-labels">
              Add Department Description
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              className="input-fields"
              placeholder="Enter the department description here..."
              value={departmentDescription}
              onChange={handleDepartmentDescriptionChange}
              required
            />
          </Form.Group>
        </Form>
        <div className="save-department-btn d-flex justify-content-center align-items-center">
          <Button
            className="image-select-delete-btn"
            onClick={handleSaveDepartment}
          >
            <span>Save Department</span>
            <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section>
        <Sectionhead sectionname="Delete/Add departments" />
        <div className="container">
          <div className="d-flex justify-content-end align-items-center mb-4">
            <Link to="/Departments">
              <Button className="image-select-delete-btn">
                <span className="text-white">Back to Departments</span>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
          <div className="current-departments data-adder">
            {currentDepartmentsData()}
          </div>
        </div>
      </section>
      <section>
        <Sectionhead sectionname="Add a new department" />
        <div className="container ">{newDepartmentData()}</div>
      </section>
      <CustomPopup
        show={showDeletePopup}
        onHide={handleDeletePopupClose}
        onConfirm={handleConfirmDeleteDepartment}
        message="Do you want to delete this department?"
      />
      <CustomPopup
        show={showSaveDepartmentPopup}
        onHide={handleSavePopupClose}
        onConfirm={handleConfirmSaveDepartment}
        message="Do you want to save this department?"
      />
    </>
  );
};

export default NewDepartmentAdder;
