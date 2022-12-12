import theme from "../theme";
import { Paper, Typography } from "@mui/material";
import React from "react";

function WishlistItem({ title, author }) {
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "15px",
        p: 2,
      }}
    >
      <Typography color="#fff" fontWeight="bold">
        {title}
      </Typography>
      <Typography color="#fff">{author}</Typography>
    </Paper>
  );
}

export default WishlistItem;
