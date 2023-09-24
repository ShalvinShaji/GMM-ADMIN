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
import "../css/NewDepartment.css";
import { Link } from "react-router-dom";

const NewDepartmentAdder = () => {
  const imageInput = useRef(null);
  const [departmentTitle, setdepartmentTitle] = useState("");
  const [departmentDescription, setdepartmentDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "data:image/png;base64,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"
  );

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

  const handleDepartmentTitleChange = (event) => {
    setdepartmentTitle(event.target.value);
  };
  const handleDepartmentDescriptionChange = (event) => {
    setdepartmentDescription(event.target.value);
  };

  return (
    <>
      <section>
        <Sectionhead sectionname="Delete departments" />
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
          <div className="current-departments ">
            <div className="row ">
              <div className=" col-3 text-center">
                <p className="dep-item">dep name</p>
                <Button className="image-select-delete-btn">
                  <span>Delete department</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
              <div className=" col-3 text-center">
                <p className="dep-item">dep name</p>
                <Button className="image-select-delete-btn">
                  <span>Delete department</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
              <div className=" col-3 text-center">
                <p className="dep-item">dep name</p>
                <Button className="image-select-delete-btn">
                  <span>Delete department</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
              <div className=" col-3 text-center">
                <p className="dep-item">dep name</p>
                <Button className="image-select-delete-btn">
                  <span>Delete department</span>
                  <FontAwesomeIcon icon={faTrash} className="ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Sectionhead sectionname="Add a new department" />
        <div className="container">
          <div className="department-image">
            {imageUrl && (
              <img src={imageUrl} alt="Uploaded" className="img-fluid" />
            )}
          </div>
          <Button
            onClick={() => imageInput.current.click()}
            className="image-select-delete-btn mt-3 mb-3"
          >
            <span>Select Image</span>
            <FontAwesomeIcon icon={faImage} className="ms-2" />
          </Button>

          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                ref={imageInput}
                type="file"
                className="image-input-selecter"
                onChange={handleFileChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="add-department-title">
                Add department name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter department name here..."
                value={departmentTitle}
                onChange={handleDepartmentTitleChange}
                className="department-title-area "
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="add-department-descrption">
                Add department Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                className="department-descrption-text-area no-border"
                placeholder="Enter the department description here..."
                value={departmentDescription}
                onChange={handleDepartmentDescriptionChange}
                required
              />
            </Form.Group>
          </Form>
          <div className="save-department-btn d-flex justify-content-center align-items-center">
            <Button className="image-select-delete-btn">
              <span>Save department</span>
              <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewDepartmentAdder;
