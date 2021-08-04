import {Link, Switch, Route} from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>All of our products!</h2>

      <nav>
        <Link to="/products/1">Product #1</Link><br/>
        <Link to="/products/2">Product #2</Link><br/>
        <Link to="/products/3">Product #3</Link><br/>
        <Link to="/products/4">Product #4</Link>

        <h1><Link to="/awesome">My Awesome Link</Link></h1>
        <Link to="/something"><button>Click Me</button></Link>
      </nav>

      <Switch>
        <Route path="/products/:productId" component={Product} />
        <Route path="/products">
          <h2>Please choose from the list above</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
