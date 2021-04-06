import { Helmet } from "react-helmet";
import CommonTemplate from "../components/templates/CommonTemplate";
import Typography from '@material-ui/core/Typography';
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import React from "react";
import AppBarOrganisms from "../components/organisms/AppBarOrganisms";
import { Container, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  content: {
    width: '100%',
    margin: 0,
    padding: 20
  },
  title: {
    marginBottom: '1em'
  },
});

const textState = atom({
  key: 'textState',
  default: '',
});

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

const TextInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <TextField variant="outlined" label="input" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const CharacterCount: React.FC = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

const RecoilPage: React.FC = () => {
  const classes = useStyles();

  return (
    <CommonTemplate>
      <Helmet>
        <meta charSet="utf-8" />
        <title>recoil test page</title>
      </Helmet>
      <AppBarOrganisms />
      <Container className={classes.content}>
        <Typography variant="h5" component="h2" className={classes.title}>
          Recoil test page
        </Typography>
        <TextInput />
        <CharacterCount />
      </Container>
    </CommonTemplate>
  );
};

export default RecoilPage;