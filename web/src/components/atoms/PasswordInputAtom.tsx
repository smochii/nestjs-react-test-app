import React from "react";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { passwordInputState, showPasswordState } from '../../states/InputState';
import { Visibility, VisibilityOff } from "@material-ui/icons";

const PasswordInputAtom: React.FC = () => {
  const [password, setPassword] = useRecoilState(passwordInputState);
  const [showPassword, setShowPassword] = useRecoilState(showPasswordState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth>
    <InputLabel htmlFor="password">Password</InputLabel>
    <Input
      id="password"
      type={showPassword ? 'text' : 'password'}
      value={password}
      autoComplete="off"
      onChange={onChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
    </FormControl>
  );
}

export default PasswordInputAtom;