// recoil
import { atom } from 'recoil';

// auth atoms
export const userState = atom({
  key: 'userState',
  default: null,
});

export const profileState = atom({
  key: 'profileState',
  default: null,
});

// ui atoms
export const isloadingState = atom({
  key: 'isLoadingState',
  default: true,
});
