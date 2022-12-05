/*
Dimitar Nizamov

This is the main component that renders the image grid
It takes in the posts and the title as props
It also takes in the count prop which is used to display the amount of likes on each image
It also takes in the sx prop which is used to style the component
It uses the ImageListMUI component from @mui/material to render the image grid
*/
import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  ImageList as ImageListMUI,
  Box,
  Typography,
  Container,
  Grow,
} from "@mui/material";
import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import theme from "../../theme";
import { Link } from "react-router-dom";
import ImageListSkeleton from "../skeletons/ImageListSkeleton";
function ImageList({ posts, count, title, sx }) {
  return (
    <>
      {/* creating a image-grid component to reuse throughout the pages  */}
      {posts?.length ? (
        <>
          <Container>
            <Typography fontSize="1.2rem">{title}</Typography>
          </Container>
          <ImageListMUI
            cols={3}
            gap={1}
            sx={{ marginTop: theme.spacing(1), ...sx }}
          >
            {posts.map((post, index) => (
              <Grow
                key={post.id}
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                timeout={Math.min(...[index * 150, 3000])}
              >
                <ImageListItem as={Link} to={`/post/${post.id}`}>
                  {/* fetching a specific image */}
                  <img src={post.url} loading="lazy" alt={post.title} />
                  {count ? (
                    <ImageListItemBar
                      sx={{ backgroundColor: "transparent" }}
                      position="bottom"
                      style={{
                        marginBottom: theme.spacing(1),
                        marginRight: theme.spacing(1),
                      }}
                      // heart icon over the images (to display likes)
                      actionIcon={
                        <Box
                          borderRadius="1000px"
                          backgroundColor="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          paddingX={theme.spacing(1)}
                        >
                          <IconButton
                            sx={{
                              color: "white",
                              width: "25px",
                              height: "25px",
                            }}
                            aria-label={post.title}
                          >
                            <FavoriteBorder
                              sx={{
                                fill: "rgba(0,0,0,0.4)",
                                width: "20px",
                                height: "20px",
                              }}
                            />
                          </IconButton>
                          {/* displaying the amount of likes of each picture */}
                          <Typography fontSize="0.9rem" color="rgba(0,0,0,0.4)">
                            {count}
                          </Typography>
                        </Box>
                      }
                      actionPosition="right"
                    />
                  ) : null}
                </ImageListItem>
              </Grow>
            ))}
          </ImageListMUI>
        </>
      ) : (
        <ImageListSkeleton noTitle={!title ? true : false} />
      )}
    </>
  );
}

export default ImageList;
