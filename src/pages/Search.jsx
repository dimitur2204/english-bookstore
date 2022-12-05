/*
Dimitar Nizamov

This is the page that renders when you access /search
It renders a search bar and a category list that is clickable so you can go to /category/:categoryName
*/
import React from "react";
import {
  InputAdornment,
  Container,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import CategoryList from "../components/search/CategoryList";
import Input from "../components/global/Input";

function Search() {
  const [value, setValue] = React.useState("");
  return (
    <Container>
      <Box
        sx={{ mt: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <IconButton sx={{ pl: 0 }} color="primary">
          <SearchIcon />
        </IconButton>
        {/* white box for typing what users search for */}
        <Input
          endAdornment={
            <InputAdornment position="end">
              {value ? (
                <IconButton onClick={() => setValue("")}>
                  <CloseIcon />
                </IconButton>
              ) : null}
            </InputAdornment>
          }
          placeholder="What do you need?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </Box>

      {/*displaying category list so that users can choose from different kinds of art */}
      {!value ? (
        <CategoryList />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "calc(70vh - 56px)",
          }}
          // if results finds no such item, this will be displayed
        >
          <Typography sx={{}}>There are no results found...</Typography>
        </Box>
      )}
    </Container>
  );
}

export default Search;
