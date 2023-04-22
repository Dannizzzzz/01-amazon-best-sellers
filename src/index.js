import ReactDom from 'react-dom/client';
import BookList from './components/booklist/BookList';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);
