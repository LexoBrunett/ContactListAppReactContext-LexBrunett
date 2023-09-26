import React, { useState, useRef } from "react";

const ImgContact = ({ onImageChange }) => {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
        onImageChange(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="img-contact">
      <img
        src={
          image ||
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Rick_Sanchez.png/160px-Rick_Sanchez.png"
        }
        alt="Contact Image"
        className="fixed-height"
        onClick={handleImageClick}
      />
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleInputChange}
      />
    </div>
  );
};

export { ImgContact };