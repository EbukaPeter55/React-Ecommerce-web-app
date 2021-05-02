import { createSelector } from 'reselect';

// Input selector gets only a slice or what we need from the state up to a level deep
const selectCart = state => state.cart;

// Output selector using createSelector makes it a memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// Hidden selector
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

// New selector for countItems
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
      )
)

