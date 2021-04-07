import { atom } from "recoil";

export const usernameInputState = atom({
  key: 'usernameInputState',
  default: '',
});

export const passwordInputState = atom({
  key: 'passwordInputState',
  default: '',
});

export const showPasswordState = atom({
  key: 'showPasswordState',
  default: false,
})