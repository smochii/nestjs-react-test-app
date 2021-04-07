import { atom, RecoilState } from 'recoil';
import { Color } from '@material-ui/lab/Alert';

export const snackBarOpenState = atom({
  key: 'snackBarOpenState',
  default: false,
});

export const snackBarMessageState = atom({
  key: 'snackBarMessageState',
  default: '',
});

export const snackBarSeverityState = atom<Color>({
  key: 'snackBarSeverityState',
  default: 'success',
});