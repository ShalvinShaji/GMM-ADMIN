import React from "react";
import Sectionhead from "./Sectionhead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const GoverningBoardViewer = () => {
  return (
    <section>
      <Sectionhead sectionname="Governing board" />
      <div className="container">
        <div className="row mb-4">
          <div className="col d-flex justify-content-end">
            <Link to="/Edit-Governing-Board">
              <Button className="image-select-delete-btn">
                <span className="text-white">Edit Governing Board</span>
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className="ms-2 text-white"
                />
              </Button>
            </Link>
          </div>
        </div>
        <div className="row g-2">
          <p className="text-start text-capitalize m-0 current-governing-board">
            current governing board
          </p>
          <div className="col-md-4">
            <div className="governing-board-member d-flex flex-column justify-content-center align-items-center p-2 ">
              <p className="governing-board-member-name mb-1">just a name</p>
              <p className="governing-board-member-role m-0">general manager</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="governing-board-member d-flex flex-column justify-content-center align-items-center p-2 ">
              <p className="governing-board-member-name mb-1">just a name</p>
              <p className="governing-board-member-role m-0">general manager</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="governing-board-member d-flex flex-column justify-content-center align-items-center p-2 ">
              <p className="governing-board-member-name mb-1">just a name</p>
              <p className="governing-board-member-role m-0">general manager</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="governing-board-member d-flex flex-column justify-content-center align-items-center p-2">
              <p className="governing-board-member-name mb-1">just a name</p>
              <p className="governing-board-member-role m-0">general manager</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="governing-board-member d-flex flex-column justify-content-center align-items-center p-2">
              <p className="governing-board-member-name mb-1">just a name</p>
              <p className="governing-board-member-role m-0">general manager</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="governing-board-member d-flex flex-column justify-content-center align-items-center p-2 m-1">
              <p className="governing-board-member-name mb-1">just a name</p>
              <p className="governing-board-member-role m-0">general manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoverningBoardViewer;
