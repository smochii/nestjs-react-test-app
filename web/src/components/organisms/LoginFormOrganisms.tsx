import React from "react";
import { Grid, Typography, Paper, makeStyles, Button } from '@material-ui/core';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { snackBarOpenState, snackBarMessageState, snackBarSeverityState } from '../../states/SnackBarState';
import axios from "axios";
import PasswordInputAtom from "../atoms/PasswordInputAtom";
import UsernameInputAtom from "../atoms/UsernameInputAtom";
import { usernameInputState, passwordInputState } from '../../states/InputState';

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

const LoginFormOrganisms: React.FC = () => {
  const classes = useStyles();
  const username = useRecoilValue(usernameInputState);
  const password = useRecoilValue(passwordInputState);

  const setOpen = useSetRecoilState(snackBarOpenState);
  const setMessage = useSetRecoilState(snackBarMessageState);
  const setSeverity = useSetRecoilState(snackBarSeverityState);

  const submit = () => {
    const params = {
      username: username,
      password: password
    }

    axios.post('/api/user/authentication', params)
    .then(res => {
      setMessage('successful authentication.');
      setSeverity('success');
      setOpen(true);
    })
    .catch(e => {
      setMessage('authentication failed.');
      setSeverity('error');
      setOpen(true);
    });
  }

  return (
    <Paper className={classes.paper}>
      <Grid container component="form" justify="center">
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" className={classes.subTitle}>
            LOGIN
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <UsernameInputAtom />
        </Grid>
        <Grid item xs={12}>
          <PasswordInputAtom/>
        </Grid>
      </Grid>
      <Grid container className={classes.action} justify="center">
        <Button variant="contained" color="primary" className={classes.button} onClick={submit}>LOGIN</Button>
        <Button variant="contained" color="secondary" className={classes.button} href="/">CANCEL</Button>
      </Grid>
    </Paper>
  );
};

export default LoginFormOrganisms;