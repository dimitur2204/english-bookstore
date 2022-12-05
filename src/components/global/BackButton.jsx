import React from "react";
import { IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => {
        navigate(-1);
      }}
    >
      <ChevronLeft sx={{ width: 30, height: 30 }} />
    </IconButton>
  );
}

export default BackButton;
