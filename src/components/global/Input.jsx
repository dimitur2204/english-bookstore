import { InputBase } from "@mui/material";
import React from "react";

function Input({ sx, ...props }) {
  return (
    // input for the account form
    <InputBase
      variant="filled"
      sx={{
        background: "rgba(0, 0, 0, 0.06)",
        borderRadius: 1000,
        padding: "0.2rem 0.7rem",
        width: "100%",
        ...sx,
      }}
      {...props}
    />
  );
}

export default Input;
