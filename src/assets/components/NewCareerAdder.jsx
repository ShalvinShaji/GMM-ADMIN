import React from "react";
import Sectionhead from "./Sectionhead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const NewCareerAdder = () => {
  return (
    <>
      <section>
        <Sectionhead sectionname="Add new Career" />
        <div className="container">
          <div className="row mb-4">
            <div className="col d-flex justify-content-end">
              <Link to="/Careers">
                <Button className="image-select-delete-btn">
                  <span className="text-white">Back to Careers</span>
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    className="ms-2 text-white"
                  />
                </Button>
              </Link>
            </div>
          </div>
          <div className="row g-2"></div>
        </div>
      </section>
    </>
  );
};

export default NewCareerAdder;
