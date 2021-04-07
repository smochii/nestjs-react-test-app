import { Grid, TextField, Typography, Paper, FormControl } from '@material-ui/core';
import React from "react";
import { Helmet } from "react-helmet";
import CommonTemplate from "../components/templates/CommonTemplate";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import SnackBarOrganisms from '../components/organisms/SnackBarOrganisms';
import { snackBarMessageState, snackBarOpenState, snackBarSeverityState } from '../states/SnackBarState';
import UsernameInputAtom from '../components/atoms/UsernameInputAtom';
import { usernameInputState, passwordInputState } from '../states/InputState';
import LoginFormOrganisms from '../components/organisms/LoginFormOrganisms';

const useStyles = makeStyles({
  root: {
    height: '100vh'
  }
});

const LoginPage: React.FC = () => {
  const classes = useStyles();

  return (
    <CommonTemplate>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Login</title>
      </Helmet>
      <Grid container className={classes.root} justify="center" alignItems="center">
        <LoginFormOrganisms/>
      </Grid>
      <SnackBarOrganisms />
    </CommonTemplate>
  );
};

export default LoginPage;