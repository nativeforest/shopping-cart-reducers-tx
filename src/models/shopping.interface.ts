// types of actions in the reducer
export enum ActionsTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART',
  REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART',
  CLEAN_CART = 'CLEAN_CART',
}
export interface shoppingReducer {
  type: ActionsTypes;
  payload: number;
}
export interface ShoppingInitialState {
  products: Array<ProductInterface>;
  cart: Array<ProductInterface>;
}
interface ProductInterface {
  id: number;
  image: string;
  name: string;
  price: number;
}
