import { createAction, props } from '@ngrx/store';
export const addToCart = createAction(
  '[Cart] Add',
  props<{ productId: string }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove',
  props<{ productId: string }>()
);
export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ productId: string; qty: number }>()
);
export const clearCart = createAction('[Cart] Clear');

export const checkout = createAction('[Cart] Checkout');
export const checkoutSuccess = createAction('[Cart] Checkout Success');
export const checkoutFailure = createAction(
  '[Cart] Checkout Failure',
  props<{ error: any }>()
);
