import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    color: '#ffffff'
  }
});

const AppBarOrganisms: React.FC = () => {
  const classes = useStyles();
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link href="/" className={classes.title}>NestJs React Test App</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarOrganisms;