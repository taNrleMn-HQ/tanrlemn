// Define a selector to derive a simplified user profile
import { selector } from 'recoil';
import {
  profileState,
  transactionsState,
  envelopesState,
  currentTxnState,
} from './atoms';

// auth selectors
export const userProfileSelector = selector({
  key: 'userProfileSelector',
  get: ({ get }) => {
    const profile = get(profileState);
    return profile ? { name: profile.full_name, email: profile.email } : null;
  },
});
