import './Book.css';

const Book = (props) => {
  const { img, title, author, type, price } = props;
  return (
    <div className="book">
      <img src={img} alt={title} />
      <p className="name">{title}</p>
      <p className="author">{author}</p>
      <p className="type">{type}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default Book;
