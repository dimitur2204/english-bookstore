/*
Dimitar Nizamov

This is the CategoryCard component that renders the category cards on the search page
It takes in the title, imageIndex, and url props
It uses the Link component from react-router-dom to link to the appropriate page
It uses the Box component from @mui/material to render the category card
It uses the Typography component from @mui/material to render the title of the category card
*/
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// function for each category card to get a fitting title and img
function CategoryCard({ title, imageIndex, url }) {
  return (
    // showcasing images for our cagetory cards
    <Link to={url}>
      <Box
        // fetching a specific image from our public folder
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/category-${imageIndex}.jpg)`,
          position: "relative",
          zIndex: 0,
          width: "100%",
          height: 115,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            height: "100%",
            borderRadius: 5,
          }}
        />
        {/* adding the title of each cagetory over the img */}
        <Typography
          variant="h3"
          fontFamily="quiche-sans"
          textTransform="uppercase"
          fontSize="2rem"
          fontWeight="500"
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            zIndex: 1,
            color: "white",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
}

export default CategoryCard;
