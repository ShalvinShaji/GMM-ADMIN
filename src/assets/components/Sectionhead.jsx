import React from "react";

export default function Sectionhead(props) {
  return (
    <>
      <div className="section-title">
        <h2 className="text-uppercase">{props.sectionname}</h2>
      </div>
    </>
  );
}
