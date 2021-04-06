import { Grid, TextField, Typography, Paper, FormControl } from '@material-ui/core';
import React from "react";
import { Helmet } from "react-helmet";
import CommonTemplate from "../components/templates/CommonTemplate";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    height: '100vh'
  },
  paper: {
    maxWidth: '80%',
    width: 350,
    padding: '2em'
  },
  subTitle: {
    textAlign: 'center'
  },
  action: {
    marginTop: '2em'
  },
  button: {
    width: 'calc(50% - 10px)',
    margin: '0 5px 0 5px',
  }
});

const usernameState = atom({
  key: 'usernameState',
  default: '',
});

const passwordState = atom({
  key: 'passwordState',
  default: '',
});

const UsernameInput: React.FC = () => {
  const [text, setText] = useRecoilState(usernameState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <TextField value={text} onChange={onChange} label="Username" fullWidth />
  );
}

const PasswordInput: React.FC = () => {
  const [text, setText] = useRecoilState(passwordState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <TextField type="password" value={text} onChange={onChange} label="Password" fullWidth />
  );
}

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const username = useRecoilValue(usernameState);
  const password = useRecoilValue(passwordState);

  const submit = () => {
    const params = {
      username: username,
      password: password
    }

    axios.post('/api/user/authentication', params)
    .then(res => {
      console.log('ok');
      console.log(res.data);
    })
    .catch(e => {
      console.log('error');
      console.log(e);
    });
  }

  return (
    <CommonTemplate>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Login</title>
      </Helmet>

      <Grid container className={classes.root} justify="center" alignItems="center">
        <Paper className={classes.paper}>
          <Grid container component={FormControl} justify="center">
            <Grid item xs={12}>
              <Typography variant="h5" component="h2" className={classes.subTitle}>
                LOGIN
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <UsernameInput />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput />
            </Grid>
          </Grid>
          <Grid container className={classes.action} justify="center">
            <Button variant="contained" color="primary" className={classes.button} onClick={submit}>SUBMIT</Button>
            <Button variant="contained" color="secondary" className={classes.button} href="/">CANCEL</Button>
          </Grid>
        </Paper>
      </Grid>

    </CommonTemplate>
  );
};

export default LoginPage;