/*
Carl Christiansen

The main bids page that renders when you access /bids,
Renders the section where the items that the user bidded on or chose to "watch" (the eye icon),
Also renders the tabs component that allows the user to switch between the different tabs (bids, watched).
*/

import React from "react";
import Header from "../components/Header";
import { Tab, TabList, Tabs, TabPanel } from "@mui/joy";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData1, itemData2 } from "../components/booksList";
import theme from "../theme";
import { Container, Typography } from "@mui/material";

// Bidding page that is made up of Header + ButtonTabs component
function Bids() {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      <Header text="Your Actions" />
      <Container>
      <Tabs
        aria-label="Soft tabs"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={{backgroundColor: theme.palette.background.paper}}
      >
        <TabList variant="soft">
          <Tab
          sx={{borderRadius: 1000}}
            variant={index === 0 ? "solid" : "plain"}
            color={index === 0 ? "primary" : "neutral"}
            style={{color: index === 0 && "white"}}
          >
            Bids
          </Tab>
          <Tab
            sx={{borderRadius: 1000}}
            variant={index === 1 ? "solid" : "plain"}
            color={index === 1 ? "primary" : "neutral"}
            style={{color: index === 1 && "white"}}
          >
            Watched
          </Tab>
          </TabList>
          <TabPanel value={0}>
          <ImageList col={2} gap={theme.spacing(2)}>
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
          </TabPanel>
          <TabPanel value={1}>
          <ImageList col={2} gap={theme.spacing(2)}>
            {itemData2.map((item) => (
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
                    70$
                </Typography>
                <Typography fontWeight="light" lineHeight={1.2}  fontSize="0.8rem">
                    6 hours left
                </Typography>
              </ImageListItem>
            ))}
          </ImageList>
          </TabPanel>

      </Tabs>
      </Container>
    
    </div>
  );
}

export default Bids;
