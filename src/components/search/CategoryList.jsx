import { Box } from "@mui/material";
import React from "react";
import theme from "../../theme";
import CategoryCard from "./CategoryCard";

// listing images of cagetories for our search feature
const categories = [
  {
    title: "paintings",
    imageIndex: 4,
  },
  {
    title: "clay",
    imageIndex: 3,
  },
  {
    title: "woodwork",
    imageIndex: 2,
  },
  {
    title: "print",
    imageIndex: 1,
  },
  {
    title: "photography",
    imageIndex: 6,
  },
];
// defining the categories to get the correct background image for them
function CategoryList() {
  return (
    <Box
      sx={{
        mt: theme.spacing(3),
        ":last-child": {
          mb: "66px",
        },
      }}
    >
      {categories.map((c) => {
        return (
          <Box key={c.imageIndex} sx={{ mb: theme.spacing(2) }}>
            <CategoryCard
              title={c.title}
              imageIndex={c.imageIndex}
              url={`/${c.title}`}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default CategoryList;
