import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div>
      <Router>

  <Navbar />

  <Switch>
    <Route exact path="/">
  <Home />
  </Route>

  </Switch>

  <Switch>
    <Route path="/create">
      <Create />
    </Route>

    <Route path="/blogs/:id">
      <BlogDetails />

    </Route>

  </Switch>

  </Router>
  </div>
    );
}

export default App;
