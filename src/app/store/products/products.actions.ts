import { createAction, props } from '@ngrx/store';
import { Products } from '../../models/products.model';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: Products[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Failure',
  props<{ error: any }>()
);
