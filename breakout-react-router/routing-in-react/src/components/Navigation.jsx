import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <h2>Our routes in the navigation component</h2>
      <Link to="/about">About </Link>
      <Link to="/">Home </Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};

export default Navigation;
