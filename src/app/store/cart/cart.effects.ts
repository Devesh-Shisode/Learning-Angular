import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CartActions from './cart.actions';
import { withLatestFrom, exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCartItems } from './cart.selectors';
import { ProductService } from '../../services/product.service';

@Injectable()
export class CartEffects {
  checkout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.checkout),
      withLatestFrom(this.store.select(selectCartItems)),
      exhaustMap(([action, items]) => {
        const payload = items.map((i) => ({
          productId: i.product.id,
          qty: i.qty,
        }));
        return this.productService.checkout(payload).pipe(
          map(() => CartActions.checkoutSuccess()),
          catchError((err) => of(CartActions.checkoutFailure({ error: err })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private productService: ProductService
  ) {}
}
