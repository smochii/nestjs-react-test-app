import React from "react";
import { TextField } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { usernameInputState } from '../../states/InputState';

const UsernameInputAtom: React.FC = () => {
  const [state, setState] = useRecoilState(usernameInputState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, value: event.target.value});
  };

  return (
    <TextField value={state.value} onChange={onChange} label="Username" fullWidth />
  );
}

export default UsernameInputAtom;