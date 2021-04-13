import React, { useContext } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AppProvider from './context/AppContext';
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './components/NotFound';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Router basename='/gallery'>
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/mountain'/>}/>
            <Route path='/mountain' render={() => <Main searchValue='mountain'/>}/>
            <Route path='/sport' render={() => <Main searchValue='sport'/>}/>
            <Route path='/science' render={() => <Main searchValue='science'/>}/>
            <Route path='/island' render={() => <Main searchValue='island'/>}/>
            <Route path='/search/:searchValue' render={(props) => <Main searchValue={props.match.params.searchValue}/>}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
