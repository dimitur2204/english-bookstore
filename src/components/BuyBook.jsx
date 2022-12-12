import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import ModalFormLayout from "./ModalFormLayout";
import useFormDetails from "../hooks/useFormDetails";

function BuyBook() {
  const [isBuyingBook, setIsBuyingBook] = useState(false)
  const [formDetails, handleChange] = useFormDetails({
    name: '',
    email: '',
    phoneNumber: '',
    paymentID: '',
    dateToCome: dayjs()
  })

  return (
    <>
      <Button variant="contained" fullWidth onClick={() => setIsBuyingBook(true)}>Buy now</Button>
      <ModalFormLayout open={isBuyingBook} handleCloseModal={() => setIsBuyingBook(false)}>

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
      </ModalFormLayout>
    </>
  )
}

export default BuyBook