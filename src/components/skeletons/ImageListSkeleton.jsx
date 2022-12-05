/*
Dimitar Nizamov

This is a component that renders a loading skeleton for the ImageList component
*/
import {
  ImageListItem,
  ImageList as ImageListMUI,
  Container,
  Skeleton,
  Box,
} from "@mui/material";
import React from "react";
import theme from "../../theme";

function ImageListSkeleton({ noTitle, length = 10 }) {
  return (
    <Box>
      {/* creating a image-grid component to reuse throughout the pages  */}
      {noTitle ? null : (
        <Container>
          <Skeleton
            animation="wave"
            variant="text"
            width={90}
            sx={{ fontSize: "1.2rem", mb: theme.spacing(3) }}
          />
        </Container>
      )}
      <ImageListMUI
        cols={3}
        gap={1}
        sx={{ marginTop: theme.spacing(1), overflowX: "hidden" }}
      >
        {Array.from(Array(length || 10).keys()).map((post, index) => (
          <ImageListItem key={post}>
            {/* fetching a specific image */}
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={140}
              height={140}
            />
          </ImageListItem>
        ))}
      </ImageListMUI>
    </Box>
  );
}

export default ImageListSkeleton;
