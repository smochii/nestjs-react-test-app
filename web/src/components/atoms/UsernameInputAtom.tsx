import React from "react";
import { TextField } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { usernameInputState } from '../../states/InputState';

const UsernameInputAtom: React.FC = () => {
  const [username, setUsername] = useRecoilState(usernameInputState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <TextField value={username} onChange={onChange} label="Username" fullWidth />
  );
}

export default UsernameInputAtom;