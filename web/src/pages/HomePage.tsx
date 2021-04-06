import React from "react";
import { Helmet } from "react-helmet";
import CommonTemplate from "../components/templates/CommonTemplate";
import Typography from '@material-ui/core/Typography';
import AppBarOrganisms from "../components/organisms/AppBarOrganisms";
import { Container, List, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  content: {
    width: '100%',
    margin: 0,
    padding: 20
  },
  title: {
    marginBottom: '1em'
  },
  list: {
    maxWidth: 300
  }
});

const HomePage: React.FC = () => {
  const classes = useStyles();

  const linkList = [
    {url: '/user/signup', name: 'SignUp test page'},
    {url: '/user/login', name: 'Login test page'},
    {url: '/recoil', name: 'Recoil test page'},
  ];

  const listItems = linkList.map(link => {
    return (
      <ListItem component={Link} to={link.url}>{link.name}</ListItem>
    )
  });

  return (
    <CommonTemplate>
      <Helmet>
        <meta charSet="utf-8" />
        <title>home</title>
      </Helmet>
      <AppBarOrganisms />
      <Container className={classes.content}>
        <Typography variant="h5" component="h2" className={classes.title}>
          Home
        </Typography>
        <List className={classes.list}>
          {listItems}
        </List>
      </Container>
    </CommonTemplate>
  );
};

export default HomePage;