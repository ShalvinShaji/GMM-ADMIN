import React from "react";
import Sectionhead from "./Sectionhead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const GoverningBoardViewer = () => {
  return (
    <section>
      <Sectionhead sectionname="Edit Governing board" />
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex justify-content-end">
            <Link to="/Governing-Board">
              <Button className="image-select-delete-btn">
                <span className="text-white">Governing Board</span>
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoverningBoardViewer;
