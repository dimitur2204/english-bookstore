import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {Close} from "@mui/icons-material";

function BuyBook() {
  const [isBuyingBook, setIsBuyingBook] = useState(false)

  return (
    <>
      <Button variant="contained" fullWidth onClick={() => setIsBuyingBook(true)}>Buy now</Button>
      <Modal open={isBuyingBook}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          <Box p={3} style={{backgroundColor: '#fff'}} width={350} borderRadius={10}>
            <Box textAlign="right">
              <Close fontSize="large" onClick={() => setIsBuyingBook(false)}/>
            </Box>

            <Typography color="#221D1D" fontWeight="bold" fontSize="1.4rem" mb={4} textAlign="center">MobilePay: 01234567</Typography>

            <Box display="flex" flexDirection="column" gap={3}>
              <TextField label="Name" placeholder="ex. John Doe" variant="filled" fullWidth/>
              <TextField label="Email" placeholder="ex. johndoe@gmail.com" variant="filled" fullWidth/>
              <TextField label="Phone Number" placeholder="ex. 12345678" variant="filled" fullWidth/>
              <TextField label="Payment ID" placeholder="ex. 123456" variant="filled" fullWidth/>
              <TextField label="Date to Come" variant="filled" fullWidth/>
            </Box>

            <Box textAlign="center" mt={3}>
              <Button variant="contained" size="large">Submit</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default BuyBook