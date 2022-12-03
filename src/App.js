import NavBar from './NavBar';
import Home from './Home';

function App() { 

  const title = "Welcome to my blog here...";
  const likes = 50;

  return (
  <div className="App">
  <NavBar/>
  <div className="content">
      <Home/>
  </div>
  </div>
  );
}
export default App;
