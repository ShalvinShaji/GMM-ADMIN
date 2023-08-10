import React from "react";
import "../css/CarouselImages.css";
import Button from "react-bootstrap/Button";

const CarouselImages = () => {
  const onDelete = () => {
    console.log("image deleted");
  };

  return (
    <>
      <div className="container">
        <div className="carousel-image-box">
          <div className="row">
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
            <div className="col-lg-6  col-xl-4  mb-4 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://images.hdqwalls.com/wallpapers/thumb/antman-8k-qm.jpg"
                alt=""
              />
              <Button
                variant="primary"
                className="mt-1 carousel-image-delete"
                onClick={onDelete}
              >
                <i className="bx bx-trash-alt me-1"></i> Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselImages;
