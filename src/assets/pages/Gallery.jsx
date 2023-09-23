import React from "react";
import "../css/Gallery.css";
import Sectionhead from "../components/Sectionhead";

import NewGalleryItemAdder from "../components/NewGalleryItemAdder";
import GalleryImagesViewer from "../components/GalleryImagesViewer";

const Gallery = () => {
  return (
    <div>
      <section id="Image-gallery" className="Image-gallery">
        <Sectionhead sectionname="Gallery" />
        <div className="container">
          <GalleryImagesViewer />
          <NewGalleryItemAdder />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
