import React, {useMemo} from "react";
import { Tab, TabList, Tabs, TabPanel } from "@mui/joy";
import { itemData1, itemData2 } from "../components/booksList";
import theme from "../theme";
import {
  Container,
  Box,
  InputAdornment,
  Input,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon, Close as CloseIcon } from "@mui/icons-material";
import CategoryList from "../components/search/CategoryList";
import {useBookContext} from "../context/BookContext";
import BooksList2Cols from "../components/BooksList2Cols";

// Search page that is made to list genres/categories for items
function Search() {
  const {books} = useBookContext()

  const [value, setValue] = React.useState("");
  const [index, setIndex] = React.useState(0);

  const filteredBooks = useMemo(() =>
    books.filter(
      (book) => book.author.toLowerCase().includes(value) || book.item_title.toLowerCase().includes(value))
    , [value])

  console.log(filteredBooks)
  return (
    <div>
      <Container>
        <Box
          sx={{ mt: "10px", display: "flex", justifyContent: "space-between" }}
        >
          <IconButton sx={{ pl: 0 }} color="primary">
            <CloseIcon />
          </IconButton>
          {/* a box for typing what users search for */}
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
          sx={{ backgroundColor: theme.palette.background.default }}
        >
          <TabList variant="soft">
            {/* tab of Books */}
            <Tab
              sx={{ borderRadius: 1000 }}
              variant={index === 0 ? "solid" : "plain"}
              color={index === 0 ? "primary" : "neutral"}
              style={{ color: index === 0 && "white" }}
            >
              Books
            </Tab>
            {/* tab of other items */}
            <Tab
              sx={{ borderRadius: 1000 }}
              variant={index === 1 ? "solid" : "plain"}
              color={index === 1 ? "primary" : "neutral"}
              style={{ color: index === 1 && "white" }}
            >
              Other
            </Tab>
          </TabList>
          {value ? (
              <BooksList2Cols
                books={filteredBooks}
                noBooksText="No books found  with your search query. Try writing a diffrent title" />)
            : (
              <>
                <TabPanel value={0}>
                  {/* itemData1 = book genres */}
                  <CategoryList list={itemData1} />
                </TabPanel>
                <TabPanel value={1}>
                  {/* itemData2 = miscelleanous items */}
                  <CategoryList list={itemData2} />
                </TabPanel>
              </>
            )}

        </Tabs>
      </Container>
    </div>
  );
}

export default Search;
