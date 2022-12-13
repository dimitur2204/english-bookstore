//a component that works as a wishlist item
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
      {/* here users can insert the title of a book */}
      <Typography color="#fff" fontWeight="bold">
        {title}
      </Typography>
      {/* here users can insert the author of a book */}
      <Typography color="#fff">{author}</Typography>
    </Paper>
  );
}

export default WishlistItem;
