import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from 'recoil';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RecoilPage from './pages/RecoilPage';
import SignUpPage from './pages/SignUpPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <RecoilRoot>
          <Route path="/" component={HomePage} exact />
          <Route path="/user/signup" component={SignUpPage} exact />
          <Route path="/user/login" component={LoginPage} exact />
          <Route path="/recoil" component={RecoilPage} exact />
        </RecoilRoot>
      </Switch>
    </Router>
  );
}


export default App;
