import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>

        <Route path="/home:search">
          <Home/>
        </Route>
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
