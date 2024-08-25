import React, { useState } from "react";
import "./Gallery.css";
import logo from "../images/logo-admc.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: logo, alt: "Image 1", caption: "Image 1 caption" },
    { src: logo, alt: "Image 2", caption: "Image 2 caption" },
    { src: logo, alt: "Image 3", caption: "Image 3 caption" },
    { src: logo, alt: "Image 4", caption: "Image 4 caption" },
    { src: logo, alt: "Image 5", caption: "Image 5 caption" },
    { src: logo, alt: "Image 6", caption: "Image 6 caption" },
  ];

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-item"
            onClick={() => handleClick(image)}
          >
            <img src={image.src} alt={image.alt} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
