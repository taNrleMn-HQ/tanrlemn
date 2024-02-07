// Define a selector to derive a simplified user profile
import { selector } from 'recoil';
import { profileState, cartState } from './atoms';

// auth selectors
export const userProfileSelector = selector({
  key: 'userProfileSelector',
  get: ({ get }) => {
    const profile = get(profileState);
    return profile ? { name: profile.full_name, email: profile.email } : null;
  },
});

// ecommerce selectors

export const cartItemsSelector = selector({
  key: 'cartItemsState',
  get: ({ get }) => {
    const cart = get(cartState);

    try {
      const numCartItems = cart.reduce(
        (total, item) => total + item.options.qty,
        0
      );

      const cartTotal = {
        subtotal: cart.reduce(
          (total, item) =>
            item.on_sale
              ? total + item.options.qty * item.sale_price
              : total + item.options.qty * item.price,
          0
        ),
        shipping: 0,
        tax: 0,
        total: cart.reduce(
          (total, item) =>
            item.on_sale
              ? total + item.options.qty * item.sale_price
              : total + item.options.qty * item.price,
          0
        ),
      };

      return { cart, numCartItems, cartTotal };
    } catch (error) {
      console.error(error);

      localStorage.removeItem('cart');

      return {
        cart: [],
        numCartItems: 0,
        cartTotal: { subtotal: 0, shipping: 0, tax: 0, total: 0 },
      };
    }
  },
});
