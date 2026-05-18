import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as ProductsActions from './products.actions';
import { Products } from '../../models/products.model';

export interface ProductsState extends EntityState<Products> {
  loading: boolean;
  error?: any;
}
export const productsAdapter = createEntityAdapter<Products>();

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    loading: false,
  });

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductsActions.loadProducts, (state) => ({ ...state, loading: true })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    productsAdapter.setAll(products, { ...state, loading: false })
  ),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
