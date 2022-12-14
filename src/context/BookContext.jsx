import {createContext, useContext} from "react";
import useBooks from "../hooks/useBooks";

const BookContext = createContext({
  books: []
})

export const BookProvider = ({ children }) => {
  const { response: books } = useBooks();

  return (
    <BookContext.Provider value={{books}}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider;

export const useBookContext = () => useContext(BookContext);
