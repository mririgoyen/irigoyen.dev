import { atom } from 'recoil';

export const activeState = atom({
  default: { id: 'home', scrollTo: false },
  key: 'activeState'
});