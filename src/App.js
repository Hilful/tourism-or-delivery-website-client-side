
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';
import Login from './Component/Pages/Login-form/Login';
import Orders from './Component/Pages/My-Orders/Orders';

import Orderplace from './Component/Pages/Order-Place/Orderplace';
import PrivateRoute from './Component/Pages/PrivateRoute/PrivateRoute';
import Services from './Component/Pages/Services/Services';
import Authprovider from './context/Authprovider';
import Footer from './Component/Pages/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Authprovider>
      <Router>
        <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
            <Home/>
        </Route>
        <PrivateRoute path="/Services">
          <Services>

          </Services>
        </PrivateRoute>
        <Route path="/order">
            <Orders/>
        </Route>
        <Route path="/Orderplace">
            <Orderplace/>
        </Route>
        <Route path="/login">
            <Login/>
        </Route>
      </Switch>
      <Footer>

      </Footer>
    
      </Router>
      </Authprovider>
    </div>
  );
}

export default App;
