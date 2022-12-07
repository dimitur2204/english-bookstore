/*
Carl Christiansen

The main bids page that renders when you access /bids,
Renders the section where the items that the user bidded on or chose to "watch" (the eye icon),
Also renders the tabs component that allows the user to switch between the different tabs (bids, watched).
*/

import React from "react";
import { Tab, TabList, Tabs, TabPanel } from "@mui/joy";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData1, itemData2 } from "../components/booksList";
import theme from "../theme";
import { Container, Typography, Box, InputAdornment,Input, IconButton,} from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import CategoryList from '../components/search/CategoryList'
// Bidding page that is made up of Header + ButtonTabs component
function Bids() {
  const [value, setValue] = React.useState('');
  const [index,setIndex] = React.useState(0);
  return (
    <div>
      <Container>
      <Box
        sx={{ mt: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <IconButton sx={{ pl: 0 }} color="primary">
          <CloseIcon />
        </IconButton>
        {/* white box for typing what users search for */}
        <Input
          endAdornment={
            <InputAdornment position="end">
              {value ? (
                <IconButton onClick={() => setValue("")}>
                  <CloseIcon />
                </IconButton>
              ) : null}
            </InputAdornment>
          }
          placeholder="Type title or author"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        <IconButton sx={{ pl: 0 }} color="primary">
          <SearchIcon />
        </IconButton>
      </Box>
      <Tabs
        aria-label="Soft tabs"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={{backgroundColor: theme.palette.background.default}}
      >
        <TabList variant="soft">
          <Tab
          sx={{borderRadius: 1000}}
            variant={index === 0 ? "solid" : "plain"}
            color={index === 0 ? "primary" : "neutral"}
            style={{color: index === 0 && "white"}}
          >
            Books
          </Tab>
          <Tab
            sx={{borderRadius: 1000}}
            variant={index === 1 ? "solid" : "plain"}
            color={index === 1 ? "primary" : "neutral"}
            style={{color: index === 1 && "white"}}
          >
           Miscellaneous
          </Tab>
          </TabList>
          <TabPanel value={0}>
            <CategoryList list={itemData1} />
          </TabPanel>
          <TabPanel value={1}>
          <CategoryList list={itemData2} />
          </TabPanel>
      </Tabs>
      </Container>
    
    </div>
  );
}

export default Bids;
