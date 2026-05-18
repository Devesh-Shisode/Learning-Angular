import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export interface CartState {
  items: { [productId: string]: number }; // quantity by productId
  checkingOut: boolean;
  error?: any;
}

export const initialCartState: CartState = {
  items: {},
  checkingOut: false,
};

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state, { productId }) => {
    const prev = state.items[productId] ?? 0;
    return { ...state, items: { ...state.items, [productId]: prev + 1 } };
  }),
  on(CartActions.removeFromCart, (state, { productId }) => {
    const { [productId]: _, ...rest } = state.items;
    return { ...state, items: rest };
  }),
  on(CartActions.updateQuantity, (state, { productId, qty }) => {
    if (qty <= 0) {
      const { [productId]: _, ...rest } = state.items;
      return { ...state, items: rest };
    }
    return { ...state, items: { ...state.items, [productId]: qty } };
  }),
  on(CartActions.clearCart, (state) => ({ ...state, items: {} })),
  on(CartActions.checkout, (state) => ({ ...state, checkingOut: true })),
  on(CartActions.checkoutSuccess, (state) => ({
    ...state,
    checkingOut: false,
    items: {},
  })),
  on(CartActions.checkoutFailure, (state, { error }) => ({
    ...state,
    checkingOut: false,
    error,
  }))
);
