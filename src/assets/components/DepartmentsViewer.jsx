import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Sectionhead from "../components/Sectionhead";

const DepartmentsViewer = () => {
  const [activeTab, setActiveTab] = useState("general-medicine");

  const departmentsData = [
    {
      id: "general-medicine",
      name: "General Medicine",
      bannerImage:
        "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
      description:
        "The department of general medicine deals with the prevention, diagnosis, and treatment of adult diseases. With experienced doctors in the field, the department provides the best possible primary care.",
      doctors: [
        {
          name: "Dr N Damodaran",
          qualifications: "MBBS, MD",
          role: "Chief Physician",
          opTimings: "Monday- Saturday, 6.00 PM- 9.00 PM",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        {
          name: "Dr N Damodharan",
          qualifications: "MBBS, MD",
          role: "Chief Physician",
          opTimings: "Monday- Saturday, 6.00 PM- 9.00 PM",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        // Add more doctors as needed
      ],
    },
    {
      id: "cardiology",
      name: "Cardiology",
      bannerImage:
        "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
      description:
        "The department of cardiology diagnoses and provides treatment for disorders related to the heart and cardiovascular system. We provide OPD based care for our patients.",
      doctors: [
        {
          name: "Dr Philipose John",
          qualifications: "MBBS, MD, DM",
          role: "Cardiologist",
          opTimings: "Saturday, 12.00 PM – 1.00 PM",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        // Add more doctors as needed
      ],
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      bannerImage:
        "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
      description:
        "The department provides medical care to infants, children, adolescents, and young adults. We provide outpatient services as well as inpatient service which includes assessments and vaccinations.",
      doctors: [
        {
          name: "Dr Sunnychen Devasia",
          qualifications: "MBBS, DCH",
          role: "Pediatrician",
          opTimings: "Monday- Saturday, 11.30 AM- 1.00 PM",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        // Add more doctors as needed
      ],
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      bannerImage:
        "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
      description:
        "Provide medical care for issues related to the musculoskeletal system and treating injuries to bones, joints, ligaments, or tendons. We also have a well-equipped physiotherapy unit.",
      doctors: [
        {
          name: "Dr Varkey S Kulangara",
          qualifications: "MBBS, MS, DNB, MRCS",
          role: "Orthopedic Surgeon",
          opTimings: "Monday, Tuesday, Thursday, 5.30 PM- 8.00 PM",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        // Add more doctors as needed
      ],
    },
    {
      id: "nephrology",
      name: "Nephrology",
      bannerImage:
        "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
      description:
        "Provides OPD based medical care for diseases related to the kidney. We also have a dialysis unit providing treatment for kidney failure. ",
      doctors: [
        {
          name: "Dr Sneha Anna Joy",
          qualifications: "MBBS, MD, DM",
          role: "Consultant Nephrologist",
          opTimings: "1st & 3rd Saturday, 11.00 AM- 12.00 PM",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        // Add more doctors as needed
      ],
    },
    {
      id: "emergency-medicine",
      name: "Emergency Medicine",
      bannerImage:
        "https://gmmhospital.in/assets/img/carousel-images/carousel-bg-1.jpg",
      description:
        "We provide 24*7 emergency care to patients who need immediate care.",
      doctors: [
        {
          name: "Dr Rohan Chacko Jacob",
          qualifications: "MBBS",
          role: "Casualty Medical Officer",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        {
          name: "Dr Sara Jacob",
          qualifications: "MBBS",
          role: "Casualty Medical Officer",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        {
          name: "Dr Midhun Raj",
          qualifications: "MBBS",
          role: "General Practitioner",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgFoOhqNVXZCBY2xVkGVNBPZsFZigXvho7A&usqp=CAU",
        },
        // Add more doctors as needed
      ],
    },
  ];

  return (
    <>
      <section id="departments" className="departments">
        <Sectionhead sectionname="Departments" />
        <div className="container">
          <div className="row mb-4">
            <div className="col d-flex justify-content-end">
              <Link to="/NewDepartment">
                <Button className="image-select-delete-btn">
                  <span className="text-white">Add/Delete Departments</span>
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="ms-2 text-white"
                  />
                </Button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <h5 className=" text-center fw-bold">Our Departments</h5>
                </li>
                {departmentsData.map((department) => (
                  <li className="nav-item" key={department.id}>
                    <a
                      className={`nav-link ${
                        activeTab === department.id ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      href={`#${department.id}`}
                    >
                      <p>{department.name}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                {departmentsData.map((department) => (
                  <div
                    key={department.id}
                    className={`tab-pane ${
                      activeTab === department.id ? "active show" : ""
                    }`}
                    id={department.id}
                  >
                    <div className="department-img">
                      <img
                        src={department.bannerImage}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="department-heading my-4">
                      <h3>{department.name}</h3>
                    </div>

                    <div className="department-description mb-4">
                      <p>{department.description}</p>
                    </div>

                    {/* Render doctors for the department */}
                    <div className="row department-doctors g-3">
                      {department.doctors.map((doctor) => (
                        <div className=" col-xl-4 col-md-6" key={doctor.name}>
                          <div className="doc d-flex flex-column justify-content-center align-items-center">
                            <div className="doc-img p-2">
                              <img
                                src={doctor.image}
                                className="img-fluid"
                                alt="image"
                              />
                            </div>
                            <div className="doc-info text-center d-flex flex-column align-items-center justify-content-center m-3">
                              <h4>{doctor.name}</h4>
                              <span>{doctor.qualifications}</span>
                              <span>{doctor.role}</span>
                              <p>{doctor.opTimings}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentsViewer;
