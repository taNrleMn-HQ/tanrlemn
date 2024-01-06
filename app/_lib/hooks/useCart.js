'use client';

// recoil
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { cartState, cartItemsState } from '@/app/_lib/context/CartRoot';

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
