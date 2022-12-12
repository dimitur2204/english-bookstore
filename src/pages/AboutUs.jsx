import React from "react";
import Header from "../components/Header";
import { Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import theme from "../theme";

function InfoItem({text, index}) {

  return (
    <ListItem sx={{alignItems: 'start', paddingY: theme.spacing(2)}}>
    <ListItemAvatar>
      <Avatar sx={{ width: 24, height: 24, fontSize: '0.8rem', background: theme.palette.common.white, color: theme.palette.text.primary, border: theme.palette.text.primary, borderWidth: '1px', borderStyle: 'solid' }}>
        {index}.
      </Avatar>
    </ListItemAvatar>
    <ListItemText sx={{margin: 0}} primaryTypographyProps={{sx: {lineHeight: "1.3rem"}}} primary={text}/>
  </ListItem>
  )
}
const items = [
  "Find a book you want to buy and click Buy Now",
  "Prepare your mobile pay, because you gonna need it",
  "Fill out the form. Don't forget to add the transaction ID ",
  "Within the form, you can choose a time and date that fits you for picking up the book.",
"If something comes up, I'll get back to you.",
"The last thing you need to do, is coming to Frederiks Alle and get your book."
]
function AboutUs() {
  return (
    <Container>
      <Header text="How buying from me works" />
      <List>
        {items.map((item, index) => <InfoItem text={item} index={index + 1} />)}
    </List>
    <Box display="flex" justifyContent="center" alignItems="center">
    <img  src={`${process.env.PUBLIC_URL}/successful-purchase.svg`} alt="A jin coming out of a lamp" />

    </Box>
    </Container>
  );
}

export default AboutUs;
