import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      alert("No image selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch("http://localhost:5108/api/Image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Image successfully uploaded! Prediction: ${data.Prediction}`);
      } else {
        const errorMessage = await response.text();
        alert(`Failed to upload image. Error: ${errorMessage}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Classify image</h2>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Classify
      </button>
    </div>
  );
};

export default ImageUpload;
