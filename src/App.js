import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CakeContainer from './components/cakeContainer'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/register'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Switch>
      <Route exact path="/">
       <Login/>
       </Route>
       <Route path="/register">
          <Register/>
      </Route>

       <Route path="/cakecontainer">
      <CakeContainer/>
      </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
