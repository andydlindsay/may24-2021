import './App.css';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h2>Class-Based Components</h2>

      <Router>
        <nav>
          <Link to="/classbased">ClassBased </Link>
          <Link to="/lifecycle">Lifecycle</Link>
        </nav>

        <Switch>
          <Route path="/classbased">
            <ClassBased secretMessage="Secret message from parent" />
          </Route>
          <Route path="/lifecycle" component={Lifecycle} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
