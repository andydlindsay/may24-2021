import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <h2>React Router</h2>

      <Router>
        <Navigation />

        <Switch>
          <Route path="/about">
            <About someProp="whatever" />
          </Route>

          <Route path="/products" component={Products} />
          <Route path="/secret">
            <h2>You have found the secret page! Shhhhh!</h2>
          </Route>

          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
