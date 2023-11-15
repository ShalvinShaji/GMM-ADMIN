import React from "react";
import Sectionhead from "../components/Sectionhead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const GoverningBoard = () => {
  const committeeMembers = [
    { role: "Patron", name: "patronName" },
    { role: "President", name: "presidentName" },
    { role: "Joint Secretary", name: "jointSecretaryName" },
    { role: "Secretary", name: "secretaryName" },
    { role: "Treasurer", name: "treasurerName" },
    { role: "Administrator", name: "administratorName" },
    { role: "Chief Medical Officer", name: "chiefMedicalOfficerName" },
  ];
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
          {committeeMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="governing-board-member d-flex flex-column justify-content-center align-items-center p-3">
                <p className="governing-board-member-role m-0">{member.role}</p>
                <p className="governing-board-member-name m-0">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoverningBoard;
