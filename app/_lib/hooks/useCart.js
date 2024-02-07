'use client';

import { useRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { cartState } from '../../_state/atoms';
import { cartItemsSelector } from '../../_state/selectors';

export function useCart() {
  const [cart, setCart] = useRecoilState(cartState);
  const clearCart = useResetRecoilState(cartState);
  const { numCartItems, cartTotal } = useRecoilValue(cartItemsSelector);

  const updateCart = (newCart, setLoadingDiv) => {
    setCart(newCart);
    if (setLoadingDiv) setLoadingDiv(false);
  };

  const findCartItemIndex = (itemId) =>
    cart.findIndex(({ id }) => id === itemId);

  const addUpdateItem = ({ item, options, setLoadingDiv, fromCart = true }) => {
    const index = findCartItemIndex(item.id);

    let newCart;
    if (index === -1) {
      newCart = [...cart, { ...item, options }];
    } else {
      newCart = replaceItemAtIndex(
        cart,
        index,
        fromCart
          ? { ...item, options }
          : {
              ...item,
              options: {
                ...cart[index].options,
                qty: cart[index].options.qty + options.qty,
              },
            }
      );
    }

    updateCart(newCart, setLoadingDiv);
  };

  const deleteItem = ({ item, setLoadingDiv }) => {
    const index = findCartItemIndex(item.id);
    const newCart = removeItemAtIndex(cart, index);
    updateCart(newCart, setLoadingDiv);
  };

  return {
    cart,
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
