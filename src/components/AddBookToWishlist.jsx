import ModalFormLayout from "./ModalFormLayout";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useFormDetails from "../hooks/useFormDetails";
import { toast } from "react-toastify";

const AddBookToWishlist = ({ handleAddBook }) => {
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [formDetails, handleChange] = useFormDetails({
    title: "",
    author: "",
  });

  const resetForm = () => {
    handleChange("title")("");
    handleChange("author")("");
  };

  const onAddBook = () => {
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    currentWishlist.push(formDetails);
    localStorage.setItem("wishlist", JSON.stringify(currentWishlist));

    setIsAddBookOpen(false);
    resetForm();
    handleAddBook();

    toast("Added book to your wishlist successfully!", { type: "success" });
  };

  return (
    <>
      <Box textAlign="center" mt={4}>
        <img
          src={`${process.env.PUBLIC_URL}/add-wishlist-icon.svg`}
          onClick={() => setIsAddBookOpen(true)}
        />
      </Box>
      <ModalFormLayout
        open={isAddBookOpen}
        handleCloseModal={() => setIsAddBookOpen(false)}
      >
        <Typography
          textAlign="center"
          mb={2}
          fontSize="1.3rem"
          fontWeight="bold"
        >
          Add a book to your wishlist!
        </Typography>
        <Stack spacing={3}>
          <TextField
            value={formDetails.title}
            onChange={handleChange("title")}
            label="Title"
            placeholder="ex. Curious George"
            variant="filled"
            fullWidth
          />
          <TextField
            value={formDetails.author}
            onChange={handleChange("author")}
            label="Author"
            placeholder="ex. H. A. Ray"
            variant="filled"
            fullWidth
          />
        </Stack>

        <Box textAlign="center" mt={3}>
          <Button variant="contained" size="large" onClick={onAddBook}>
            Submit
          </Button>
        </Box>
      </ModalFormLayout>
    </>
  );
};

export default AddBookToWishlist;
