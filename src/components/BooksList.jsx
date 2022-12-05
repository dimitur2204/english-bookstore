import React from 'react'
import { Box, Button, ImageList, ImageListItem, Typography } from '@mui/material'
import theme from '../theme'
import { itemData1, itemData2 } from './booksList'

function BooksList() {
    const [all, setAll] = React.useState(false)
  return (
    <>
    <Box display="flex" justifyContent='space-between'>
    <Typography fontWeight="bold" fontSize="1.5rem" mb={1}>This week's</Typography>
    <Button onClick={() => setAll(!all)} variant="text">See {all ? 'less' : 'all'}</Button>
    </Box>
    <ImageList cols={3} gap={theme.spacing(2)}>
            {itemData1.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  style={{height: 160, objectFit: 'cover'}}
                />
                <Typography fontWeight='600' lineHeight="1.2rem">
                    {item.title}
                </Typography>
                <Typography fontWeight="light" color='rgba(0,0,0,0.5)' lineHeight={1.2} fontSize="1rem">
                    George Orwell
                </Typography>
                <Typography fontWeight="light" lineHeight={1.2}  fontSize="1rem" color={theme.palette.primary.main}>
                    140$
                </Typography>
              </ImageListItem>
            ))}
            {all && itemData2.map((item) => (
                <ImageListItem key={item.img}>
                <img
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                  style={{height: 160, objectFit: 'cover', flexGrow: 0}}
                />
                <Typography fontWeight='600' lineHeight="1.2rem">
                    {item.title}
                </Typography>
                <Typography fontWeight="light" color='rgba(0,0,0,0.5)' lineHeight={1.2} fontSize="1rem">
                    George Orwell
                </Typography>
              </ImageListItem>
            ))}
          </ImageList>
    </>

  )
}

export default BooksList