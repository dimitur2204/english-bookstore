import {Box, Button, Chip, SwipeableDrawer, Typography} from "@mui/material";
import React from "react";
import {Close} from "@mui/icons-material";

function BookDetails({book}) {
  return (
    <SwipeableDrawer anchor="bottom" open PaperProps={{style: {borderRadius: '50px 50px 0 0'}}}>
      <Box px={5} pb={2}>
        <Box my={1} textAlign="right">
          <Close fontSize="medium"/>
        </Box>

        <img src={book.image} width="100%" height="350" style={{objectFit: 'contain'}}/>

        <Typography fontWeight='600' lineHeight="1.8rem" fontSize="1.8rem" mt={0.5} color="#202504">{book.title}</Typography>

        <Typography fontWeight="light" color='rgba(0,0,0,0.5)' lineHeight={1.2} fontSize="1rem" mb={2}>
          by {book.author}
        </Typography>

        {!!book.genres.length && <Box>
          <Typography fontSize="1rem" color="#202504">Genres</Typography>

          <Box display="flex" gap={1}>
            {book.genres.map((genre) => (<Chip label={genre} variant="outlined" style={{borderRadius: 4}} />))}
          </Box>
        </Box>
        }

        <Typography mt={1.5} mb={3.5}>
          Price: {book.price} DKK
        </Typography>

        <Button variant="contained" fullWidth>Buy now</Button>
      </Box>
    </SwipeableDrawer>
  )
}

export default BookDetails;