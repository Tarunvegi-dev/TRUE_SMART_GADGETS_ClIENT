import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.css'
import './pages/Home/styles.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
