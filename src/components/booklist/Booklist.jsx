import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../store/actions/booksCreator";
import BookListItem from "./BookListItem";
import Loading from "../isLoading/Loading";
import Error from "./Error/Error";


const Booklist = () => {
  const { books, booksIsLoading, booksIsError } = useSelector(
    (state) => state.booksReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log(books, booksIsError, booksIsLoading);

  if (booksIsError) {
    return <div><Error /></div>;
  }

  return (
    <ul>
      {booksIsLoading ? (
       <Loading />
      ) : (
        books.map((el) => <BookListItem key={`books-${el.id}`} book={el} />)
      )}
    </ul>
  );
};

export default Booklist;