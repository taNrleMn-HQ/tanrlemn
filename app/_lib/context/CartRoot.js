'use client';

// recoil
import { atom, selector } from 'recoil';

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window === 'undefined') return null;

    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const cartState = atom({
  key: 'cartState',
  default: [],
  effects: [localStorageEffect('cart')],
});

export const cartItemsState = selector({
  key: 'cartItemsState',
  get: ({ get }) => {
    const cart = get(cartState);

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
  },
});
