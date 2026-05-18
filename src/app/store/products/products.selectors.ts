import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsAdapter, ProductsState } from './products.reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

const { selectAll, selectEntities } = productsAdapter.getSelectors();

export const selectAllProducts = createSelector(selectProductsState, selectAll);
export const selectProductEntities = createSelector(
  selectProductsState,
  selectEntities
);
export const selectProductsLoading = createSelector(
  selectProductsState,
  (s) => s.loading
);
