import React from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

//a function that allows us to use a "go back" button throughout the webapp if needed
function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton
    //if a button is clicked, it redirects the user to the previous page
      onClick={() => {
        navigate(-1);
      }}
    >
      <ChevronLeft sx={{ width: 30, height: 30 }} />
    </IconButton>
  );
}

export default BackButton;
