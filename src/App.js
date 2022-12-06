import NavBar from './NavBar';
import Home from './Home';
import Create from './Create'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  // const title = "Welcome to my blog here...";
  // const likes = 50;

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
