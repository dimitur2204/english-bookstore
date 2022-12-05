import { Box } from "@mui/material";
import React from "react";
import theme from "../../theme";
import CategoryCard from "./CategoryCard";

// listing images of cagetories for our search feature
const categories = [
  {
    title: "Drama",
    imageIndex: 4,
  },
  {
    title: "Kids",
    imageIndex: 3,
  },
  {
    title: "Education",
    imageIndex: 2,
  },
  {
    title: "Fiction",
    imageIndex: 1,
  },
  {
    title: "Non-fiction",
    imageIndex: 6,
  },
  {
    title: "Others",
    imageIndex: 7,
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
