import React from "react";
import Header from "../components/Header";
import theme from "../theme";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: "29px",
        p: 4,
        mb: `calc(72px + ${theme.spacing(2)})`,
      }}
    >
      <Typography fontWeight="bold" color={theme.palette.common.white} mb={1}>
        Do you have a wish{" "}
        <AutoAwesomeIcon sx={{ fill: theme.palette.common.white }} />
      </Typography>
      <Typography color="rgba(255,255,255,0.8)" mb={3}>
        With our{" "}
        <Link style={{ color: "rgba(255,255,255,0.8)" }}>wishlist</Link> you can
        wish for a book that you want us to get on the shelves
      </Typography>
    </Paper>
  );
}

export default AboutUs;
