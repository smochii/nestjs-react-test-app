import React from "react";
import { Grid, Typography, Paper, makeStyles, Button } from '@material-ui/core';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { snackBarOpenState, snackBarMessageState, snackBarSeverityState } from '../../states/SnackBarState';
import axios from "axios";
import PasswordInputAtom from "../atoms/PasswordInputAtom";
import UsernameInputAtom from "../atoms/UsernameInputAtom";
import { usernameInputState, passwordInputState } from '../../states/InputState';
import UsernameCheckInputAtom from "../atoms/UsernameCheckInputAtom";

const useStyles = makeStyles({
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

const SignUpFormOrganisms: React.FC = () => {
  const classes = useStyles();
  const state = useRecoilValue(usernameInputState);
  const password = useRecoilValue(passwordInputState);

  const setOpen = useSetRecoilState(snackBarOpenState);
  const setMessage = useSetRecoilState(snackBarMessageState);
  const setSeverity = useSetRecoilState(snackBarSeverityState);

  const submit = () => {
    const params = {
      username: state.value,
      password: password
    }

    axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, params)
    .then(res => {
      let status = res.status;
      if (status === 201) {
        setMessage('registration was successful');
        setSeverity('success');
        setOpen(true);
      }
    })
    .catch(e => {
      let status = e.response.status;
      if (status === 409) {
        setMessage('username is already registered.');
        setSeverity('error');
        setOpen(true);
      } else {
        setMessage('unexpected error.');
        setSeverity('error');
        setOpen(true);
      }
    });
  }

  return (
    <Paper className={classes.paper}>
    <Grid container component="form" justify="center">
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" className={classes.subTitle}>
          SignUp
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <UsernameCheckInputAtom />
      </Grid>
      <Grid item xs={12}>
        <PasswordInputAtom/>
      </Grid>
    </Grid>
    <Grid container className={classes.action} justify="center">
      <Button variant="contained" color="primary" className={classes.button} onClick={submit}>CREATE</Button>
      <Button variant="contained" color="secondary" className={classes.button} href="/">CANCEL</Button>
    </Grid>
  </Paper>
  );
};

export default SignUpFormOrganisms;