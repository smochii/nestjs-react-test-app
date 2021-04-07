import { Grid } from '@material-ui/core';
import React from "react";
import { Helmet } from "react-helmet";
import CommonTemplate from "../components/templates/CommonTemplate";
import { makeStyles } from '@material-ui/core/styles';
import SnackBarOrganisms from '../components/organisms/SnackBarOrganisms';
import SignUpFormOrganisms from '../components/organisms/SignUpFormOrganisms';

const useStyles = makeStyles({
  root: {
    height: '100vh'
  }
});

const SignUpPage: React.FC = () => {
  const classes = useStyles();

  return (
    <CommonTemplate>
      <Helmet>
      <meta charSet="utf-8" />
      <title>SignUp</title>
      </Helmet>
      <Grid container className={classes.root} justify="center" alignItems="center">
        <SignUpFormOrganisms />
      </Grid>
      <SnackBarOrganisms />
    </CommonTemplate>
  );
};

export default SignUpPage;