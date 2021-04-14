import React from "react";
import { TextField } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { usernameInputState } from '../../states/InputState';
import axios from "axios";
import { FindUserDto } from '../../../../api/src/user/dto/findUser.dto';

const UsernameCheckInputAtom: React.FC = () => {
  const [username, setUsername] = useRecoilState(usernameInputState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const params: FindUserDto = {
      username: username
    }

    axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, params)
    .then(res => {
      let status = res.status;
      if (status === 201) {
        // TODO
      }
    })
    .catch(e => {
      let status = e.response.status;
      if (status === 409) {
        // TODO
      }
    });
  };

  return (
    <TextField value={username} onChange={onChange} onBlur={onBlur} label="Username" fullWidth />
  );
}

export default UsernameCheckInputAtom;