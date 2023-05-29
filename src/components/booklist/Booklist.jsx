import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../store/actions/booksCreator";
import BookListItem from "./BookListItem";
import Loading from "../isLoading/Loading";



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
    return <div>error: {booksIsError}</div>;
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