import React, { useState } from "react";
import Sectionhead from "./Sectionhead";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const GoverningBoardViewer = () => {
  const [patronName, setPatronName] = useState("");
  const [presidentName, setPresidentName] = useState("");
  const [jointSecretaryName, setJointSecretaryName] = useState("");
  const [secretaryName, setSecretaryName] = useState("");
  const [treasurerName, setTreasurerName] = useState("");
  const [administratorName, setAdministratorName] = useState("");
  const [chiefMedicalOfficerName, setChiefMedicalOfficerName] = useState("");

  const handlepatronNameChange = (event) => {
    setPatronName(event.target.value);
  };
  const handlePresidentNameChange = (event) => {
    setPresidentName(event.target.value);
  };
  const handleSecretaryNameChange = (event) => {
    setSecretaryName(event.target.value);
  };
  const handleJointSecretaryNameChange = (event) => {
    setJointSecretaryName(event.target.value);
  };
  const handleTreasurerNameChange = (event) => {
    setTreasurerName(event.target.value);
  };
  const handleAdministratorNameChange = (event) => {
    setAdministratorName(event.target.value);
  };
  const handleChiefMedicalOfficerNameChange = (event) => {
    setChiefMedicalOfficerName(event.target.value);
  };

  const saveGoverningBoard = () => {
    console.log("changes saved");
  };

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
        <div className="row g-3">
          <div className="col-md-4 governing-board-fields">
            <div className="patron">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="add-patron-name">
                    Add patron name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter patron name here..."
                    value={patronName}
                    onChange={handlepatronNameChange}
                    className="news-title-area "
                    required
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="col-md-4 governing-board-fields">
            <div className="president">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="add-president-name">
                    Add president name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter president name here..."
                    value={presidentName}
                    onChange={handlePresidentNameChange}
                    className="news-title-area "
                    required
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="col-md-4 governing-board-fields">
            <div className="secretary">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="add-secretary-name">
                    Add secretary name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter secretary name here..."
                    value={secretaryName}
                    onChange={handleSecretaryNameChange}
                    className="news-title-area "
                    required
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="col-md-4 governing-board-fields">
            <div className="joint-secretary">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="add-joint-secretary-name">
                    Add joint secretary name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter joint secretary name here..."
                    value={jointSecretaryName}
                    onChange={handleJointSecretaryNameChange}
                    className="news-title-area "
                    required
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="col-md-4 governing-board-fields">
            <div className="Treasurer">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="add-Treasurer-name">
                    Add treasurer name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter treasurer name here..."
                    value={treasurerName}
                    onChange={handleTreasurerNameChange}
                    className="news-title-area "
                    required
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="col-md-4 governing-board-fields">
            <div className="Hon-Administrator">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="add-Hon-Administrator-name">
                    Add Hon. Administrator name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Hon. Administrator name here..."
                    value={administratorName}
                    onChange={handleAdministratorNameChange}
                    className="news-title-area "
                    required
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div className="col-md-4 governing-board-fields">
            <div className="Chief-Medical-Officer">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="add-Chief-Medical-Officer-name">
                    Add Chief Medical Officer name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter chief medical officer name here..."
                    value={chiefMedicalOfficerName}
                    onChange={handleChiefMedicalOfficerNameChange}
                    className="news-title-area "
                    required
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>

        <div className="save-governing-board d-flex justify-content-center align-items-center">
          <Button
            onClick={saveGoverningBoard}
            className="image-select-delete-btn  mb-2"
          >
            <span>Save Changes</span>
            <FontAwesomeIcon icon={faCloudArrowUp} className="ms-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoverningBoardViewer;
