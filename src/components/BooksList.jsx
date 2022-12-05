import React from 'react'
import { ImageList, ImageListItem, Typography } from '@mui/material'
import theme from '../theme'
import { itemData1 } from './bidsList'

function BooksList() {
  return (
    <ImageList cols={3} gap={theme.spacing(1)}>
            {itemData1.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <Typography>
                    {item.title}
                </Typography>
                <Typography fontWeight="light" lineHeight={1.2} fontSize="1rem">
                    Current bid
                </Typography>
                <Typography fontWeight="light" lineHeight={1.2}  fontSize="1rem" color={theme.palette.primary.main}>
                    140$
                </Typography>
                <Typography fontWeight="light" lineHeight={1.2}  fontSize="0.8rem">
                    5 hours left
                </Typography>
              </ImageListItem>
            ))}
          </ImageList>
  )
}

export default BooksList