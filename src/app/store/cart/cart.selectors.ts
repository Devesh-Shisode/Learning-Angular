import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';
import { selectProductEntities } from '../products/products.selectors';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItemsMap = createSelector(
  selectCartState,
  (s) => s.items
);

export const selectCartItems = createSelector(
  selectCartItemsMap,
  selectProductEntities,
  (itemsMap, productsEntities) => {
    return Object.keys(itemsMap).map(
      (id) =>
        ({
          product: productsEntities[id],
          qty: itemsMap[id],
        } as { product: any; qty: number })
    );
  }
);

export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((sum, it) => sum + (it.product?.price ?? 0) * it.qty, 0)
);

export const selectCartQuantity = createSelector(
  selectCartItemsMap,
  (itemsMap) => Object.values(itemsMap).reduce((a, b) => a + b, 0)
);
