import React from "react";
import DepartmentsViewer from "../components/DepartmentsViewer";
import Sectionhead from "../components/Sectionhead";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <>
      <div className="container">
        <Sectionhead
          sectionname="Departments"
          sectiondescription="Centres Of "
          sectiondescriptionbold="Excellence"
        />
        <DepartmentsViewer />
        <div className="row mb-3">
          <div className="col d-flex justify-content-center">
            <Button className="image-select-delete-btn">
              <Link to="/NewDepartment">
                <span className="text-white">Add/Edit departments</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
