import { Grid, TextField, Typography, Paper, FormControl, InputAdornment, IconButton, Input, InputLabel } from '@material-ui/core';
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CommonTemplate from "../components/templates/CommonTemplate";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

const SignUpPage: React.FC = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const submit = () => {
    const params = {
      username: values.username,
      password: values.password
    }
    console.log(params);

    axios.post('/api/user/signup', params)
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
      <title>SignUp</title>
      </Helmet>

      <Grid container className={classes.root} justify="center" alignItems="center">
        <Paper className={classes.paper}>
          <Grid container component="form" justify="center">
            <Grid item xs={12}>
              <Typography variant="h5" component="h2" className={classes.subTitle}>
                SignUp
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Username"
                value={values.username}
                onChange={handleChange('username')}
                autoComplete="off"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  autoComplete="off"
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container className={classes.action} justify="center">
            <Button variant="contained" color="primary" className={classes.button} onClick={submit}>CREATE</Button>
            <Button variant="contained" color="secondary" className={classes.button} href="/">CANCEL</Button>
          </Grid>
        </Paper>
      </Grid>

    </CommonTemplate>
  );
};

export default SignUpPage;