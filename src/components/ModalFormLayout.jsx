import {Box, Modal} from "@mui/material";
import {Close} from "@mui/icons-material";
import React from "react";

function ModalFormLayout({open, handleCloseModal, children}) {
  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box display="flex" alignItems="center" justifyContent="center" height="100%">
        <Box p={3} style={{backgroundColor: '#fff'}} width={350} borderRadius={10}>
          <Box textAlign="right">
            <Close fontSize="large" onClick={handleCloseModal}/>
          </Box>

          {children}
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalFormLayout