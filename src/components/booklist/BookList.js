import Book from '../book/Book';
import './BookList.css';
import { books } from '../book/books';

function BookList() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="top">
        <h1>Amazon Best Sellers</h1>
        <h5>Our most popular products based on sales. Updated frequently.</h5>
      </div>
      <div className="list">
        <div className="title">Best Sellers in Books</div>
        <div className="listContent">
          {books.map((book) => {
            return <Book {...book} key={book.id} />;
          })}
        </div>
      </div>
      <div className="bottom">
        <span className="text" onClick={backToTop}>
          Back to Top
        </span>
      </div>
    </>
  );
}

export default BookList;
