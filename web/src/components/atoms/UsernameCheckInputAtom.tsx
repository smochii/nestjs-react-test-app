import React from "react";
import { TextField } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { usernameInputState } from '../../states/InputState';
import axios from "axios";

const UsernameCheckInputAtom: React.FC = () => {
  const [state, setState] = useRecoilState(usernameInputState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({value: event.target.value});
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!state.value) {
      return;
    }

    const params = {
      username: state.value
    }

    axios.post(`${process.env.REACT_APP_API_URL}/user/find`, params)
    .then(res => {
      let status = res.status;
      if (status === 200) {
        setState({
          helperText: '',
          isError: false,
        });
      }
    })
    .catch(e => {
      let status = e.response.status;
      if (status === 409) {
        setState({
          helperText: 'username is already registered',
          isError: true,
        });
      }
    });
  };

  return (
    <TextField error={state.isError} helperText={state.helperText} value={state.value} onChange={onChange} onBlur={onBlur} label='Username' fullWidth />
  );
}

export default UsernameCheckInputAtom;