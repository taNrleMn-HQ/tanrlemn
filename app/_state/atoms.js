// recoil
import { atom } from 'recoil';
import { localStorageEffect } from './effects';

// auth atoms
export const userState = atom({
  key: 'userState',
  default: null,
});

export const profileState = atom({
  key: 'profileState',
  default: null,
});

// ecommerce atoms
export const cartState = atom({
  key: 'cartState',
  default: [],
  effects: [localStorageEffect('cart')],
});

export const productsState = atom({
  key: 'productsState',
  default: null,
});

// ui atoms
export const isloadingState = atom({
  key: 'isLoadingState',
  default: true,
});
