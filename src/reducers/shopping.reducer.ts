import { ACTIONS } from '@/actions/shopping.actions';
import {
  CartActionType,
  ShoppingInitialState,
  shoppingReducer,
  State,
} from '@/models/shopping.interface';

export const shoppingInitialState: ShoppingInitialState = {
  products: [
    {
      id: 1,
      image: 'https://placeimg.com/200/200/tech/1',
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      image: 'https://placeimg.com/200/200/tech/2',
      name: 'Product 2',
      price: 200,
    },
    {
      id: 3,
      image: 'https://placeimg.com/200/200/tech/3',
      name: 'Product 3',
      price: 100,
    },
    {
      id: 4,
      image: 'https://placeimg.com/200/200/tech/4',
      name: 'Product 4',
      price: 400,
    },
    {
      id: 5,
      image: 'https://placeimg.com/200/200/tech/5',
      name: 'Product 5',
      price: 100,
    },
    {
      id: 6,
      image: 'https://placeimg.com/200/200/tech/6',
      name: 'Product 6',
      price: 600,
    },
  ],
  cart: [],
};

export function shoppingReducer(
  state: ShoppingInitialState,
  action: CartActionType
):State {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_TO_CART: {
      let addCartItem = state.products.find(
        (product) => product.id === payload
      );
      return {
        ...state,
        cart: [...state.cart, addCartItem],
      };
    }
    case ACTIONS.REMOVE_ONE_FROM_CART: {
    }
    case ACTIONS.REMOVE_ONE_FROM_CART: {
    }
    case ACTIONS.CLEAN_CART: {
    }
    default:
      return state;
  }
}
