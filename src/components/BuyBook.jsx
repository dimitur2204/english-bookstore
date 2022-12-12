import {Box, Button, Modal, Stack, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {Close} from "@mui/icons-material";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

function BuyBook() {
  const [isBuyingBook, setIsBuyingBook] = useState(false)
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    paymentID: '',
    dateToCome: dayjs()
  })

  const handleChange = (key) => {
    return (event) => {
      // console.log(value)
      const value = event.target?.value ?? event
      setFormDetails((prevState) => ({...prevState, [key]: value}))
    }
  }

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

            <Stack spacing={3}>
              <TextField
                value={formDetails.name}
                onChange={handleChange('name')}
                label="Name"
                placeholder="ex. John Doe"
                variant="filled" fullWidth
              />
              <TextField
                value={formDetails.email}
                onChange={handleChange('email')}
                label="Email"
                placeholder="ex. johndoe@gmail.com"
                variant="filled"
                fullWidth
              />
              <TextField
                value={formDetails.phoneNumber}
                onChange={handleChange('phoneNumber')}
                label="Phone Number"
                placeholder="ex. 12345678"
                variant="filled"
                fullWidth
              />
              <TextField
                value={formDetails.paymentID}
                onChange={handleChange('paymentID')}
                label="Payment ID"
                placeholder="ex. 123456"
                variant="filled"
                fullWidth
              />
              <DatePicker
                value={formDetails.dateToCome}
                onChange={handleChange('dateToCome')}
                label="Date to Come"
                fullWidth
                renderInput={(params) => <TextField {...params} variant="filled"/>}
              />
            </Stack>

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