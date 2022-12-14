import { useReducer } from 'react';
import {
  shoppingInitialState,
  shoppingReducer,
} from '@/reducers/shopping.reducer';
import { ActionsTypes } from '@/models/shopping.interface';

const Products: React.FC = () => {
  const addToCart = (id: number) => {
    dispatch({ type: ActionsTypes.ADD_TO_CART, payload: id });
    console.log(id);
  };
  const deleteFromCart = () => {};
  const clearCart = () => {};

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products } = state;

  return (
    <div className='products'>
      {products.map((product) => (
        <div key={product.id} className='product__card'>
          <img src={product.image} alt='product image' />
          <div className='product__details'>
            <p>{product.name}</p>
            <p>USD$ {product.price}</p>
          </div>
          <button onClick={() => addToCart(product.id)} className='btn-primary'>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
