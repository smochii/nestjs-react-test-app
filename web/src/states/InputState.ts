import { atom } from "recoil";

interface usernameInputProps {
  value?: string;
  helperText?: string;
  isError?: boolean;
}

export const usernameInputState = atom<usernameInputProps>({
  key: 'usernameInputState',
  default: {},
});

export const passwordInputState = atom({
  key: 'passwordInputState',
  default: '',
});

export const showPasswordState = atom({
  key: 'showPasswordState',
  default: false,
})