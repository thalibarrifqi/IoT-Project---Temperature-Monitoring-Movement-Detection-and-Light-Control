import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Human from './components/pages/Human';
import Light from './components/pages/Light';
import Temperature from './components/pages/Temperature';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/temperature' exact component={Temperature} />
          <Route path='/human' exact component={Human} />
          <Route path='/light' exact component={Light} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
