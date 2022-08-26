import { useReducer } from 'react';
import {
  shoppingInitialState,
  shoppingReducer,
} from '@/reducers/shopping.reducer';

const Cart: React.FC = () => {
  const deleteFromCart = () => {};
  const clearCart = (id: number) => {
    console.log(id);
  };

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { cart } = state;

  return (
    <div className='cart'>
      <button className='btn-primary'>Clean Cart</button>

      {cart.length === 0 ? (
        <div className='center'>No products yet</div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className='cart__card'>
            <div className='cart__details'>
              <p>{item.name}</p>
              <p>USD$ {item.price}</p>
            </div>
            <button>Remove from Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
