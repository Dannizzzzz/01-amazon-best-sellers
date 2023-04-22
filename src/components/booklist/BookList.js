import './BookList.css';

function BookList() {
  return (
    <>
      <div className="top">
        <h1>Amazon Best Sellers</h1>
        <h5>Our most popular products based on sales. Updated frequently.</h5>
      </div>
      <div className="list">
        <div className="title">Best Sellers in Books</div>
        <div className="listContent">
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
        </div>
      </div>
    </>
  );
}

export default BookList;
