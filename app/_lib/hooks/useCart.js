'use client';

// recoil
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  atom,
  selector,
} from 'recoil';

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

export function useCart() {
  const [cart, setCart] = useRecoilState(cartState);
  const clearCart = useResetRecoilState(cartState);

  const { numCartItems, cartTotal } = useRecoilValue(cartItemsState);

  const addUpdateItem = ({ item, options, setLoadingDiv, fromCart = true }) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (index === -1) {
      const newCart = [...cart, { ...item, options }];
      setCart(newCart);
    } else {
      if (fromCart) {
        const newCart = replaceItemAtIndex(cart, index, {
          ...item,
          options,
        });
        setCart(newCart);
      } else {
        const newCart = replaceItemAtIndex(cart, index, {
          ...item,
          options: {
            ...cart[index].options,
            qty: cart[index].options.qty + options.qty,
          },
        });
        setCart(newCart);
      }
    }

    setLoadingDiv && setLoadingDiv(false);
  };

  const deleteItem = ({ item, setLoadingDiv }) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    const newCart = removeItemAtIndex(cart, index);

    setCart(newCart);

    setLoadingDiv && setLoadingDiv(false);
  };

  return {
    cart,
    setCart,
    numCartItems,
    cartTotal,
    addUpdateItem,
    deleteItem,
    clearCart,
  };
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
