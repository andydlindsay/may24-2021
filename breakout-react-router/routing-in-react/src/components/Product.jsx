import {useParams, useHistory} from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  const params = useParams();
  console.log(params);

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    setTimeout(() => {
      history.push('/protected');
    }, 5000);
  }, []);

  // getProductById(params.productId);
  // axios.get(`/products/${params.productId}`)

  return (
    <div>
      <h2>Just one product #{params.productId}</h2>
    </div>
  );
};

export default Product;
