import React from "react";
import "./App.css";
import Car from "./component/Car";
import Bike from "./Bike";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import CallbackPage from "./callback";
import Auth from "./Auth";



function App() {
  return (
    <div className="App">
           <Auth> 
      <Router>
        <Switch>
          <Route exact path="/" component={Car}></Route>
          <Route exact path="/bike" component={Bike}></Route>
          <Route path="/callback" component={CallbackPage}/>
        </Switch>
      </Router>
      </Auth>
    </div>
  );
}

export default App;
