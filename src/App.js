
import { Container } from 'react-bootstrap';
import UserComponent from './components/UserComponent';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ButtonAppBar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import BoxSx from './components/Box';
import CreateUserComponent from './components/CreateUserComponent';

function App() {
  return (
   

   <Router>
    <div className="App">

      <div>
        <div className="item"></div>
      </div>
      
      <div className="">
        
      <ButtonAppBar className="nav"></ButtonAppBar> 
    
      <Switch>
        
        <Route exact path="/"  component={HomePage} />
        <Route path="/users" component={UserPage}/>
        <Route path="/users/add" component={CreateUserComponent}/>

      </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
