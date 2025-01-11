import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Input,
} from "@mui/material";

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedImage) {
      alert(`Image Uploaded: ${selectedImage.name}`);
    } else {
      alert("No image selected!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        Image Upload
      </Typography>
      <Stack spacing={2} direction="column" alignItems="center">
        <Button
          variant="contained"
          component="label"
          sx={{ width: 200 }}
        >
          Upload Image
          <Input
            type="file"
            onChange={handleImageUpload}
            sx={{ display: "none" }}
          />
        </Button>
        {selectedImage && (
          <Typography variant="body1">
            Selected Image: {selectedImage.name}
          </Typography>
        )}
        <Button
          variant="outlined"
          onClick={handleSubmit}
          sx={{ width: 200 }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default App;
