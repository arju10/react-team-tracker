import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home";
import Error from "./Component/Error/Error";
import About from "./Component/About/About";


function App() {
  return (
    <>
     <Router>
      <Switch>
      <Route exact path ="/home">
         <Home></Home>
          </Route>
          <Route exact path ="/teamDetails">
             <About></About>
          </Route>
          <Route path ="/teamDetails/:idTeam">
             <About></About>
          </Route>
        <Route exact path ="/">
         <Home></Home>
          </Route>
          <Route path ="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
