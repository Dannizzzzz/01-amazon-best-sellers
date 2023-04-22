import './Book.css';

const Book = (props) => {
  const { img, title, author, price } = props;
  return (
    <div className="book">
      <img src={img} alt={title} />
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default Book;
