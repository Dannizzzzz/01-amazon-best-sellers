import './Book.css';

const Book = (props) => {
  const { img, title, author, type, price, id } = props;
  return (
    <div className="book">
      <div className="rank">
        <span className="rankNum">#{id}</span>
      </div>
      <div className="rankTri"></div>
      <img src={img} alt={title} />
      <p className="name">{title}</p>
      <p className="author">{author}</p>
      <p className="type">{type}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default Book;
