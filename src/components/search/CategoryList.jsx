import { Box, Unstable_Grid2 as Grid2 } from "@mui/material";
import React from "react";
import theme from "../../theme";
import CategoryCard from "./CategoryCard";

// defining the categories to get the correct background image for them
function CategoryList({list}) {
  return (
    <Box
      sx={{
        mt: theme.spacing(3),
        ":last-child": {
          mb: "66px",
        },
      }}
    >
      <Grid2 container spacing={2}>
      {list.map((c) => {
        return (
            <Grid2 xs={6}  key={c.imageIndex}>
            <CategoryCard
              title={c.title}
              img={c.img}
              url={`/category/${c.title.toLowerCase().replace(/ /g, "-")}`}
            />
            </Grid2>
        );
      })}
          </Grid2>
    </Box>
  );
}

export default CategoryList;
