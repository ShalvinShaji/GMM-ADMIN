import React from "react";
import DepartmentsViewer from "../components/DepartmentsViewer";
import Sectionhead from "../components/Sectionhead";

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
      </div>
    </>
  );
};

export default Departments;
