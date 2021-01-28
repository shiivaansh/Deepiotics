import React from 'react';
import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import FormSignup from "./FormSignup";
import Navbar from './Navbar';
import MainPage from './MainPage';
import Reports from './Reports';

function App() {
  return(
    <div>
      <Router>
      {/* <Navbar/> */}
      <Switch>
                    <Route path="/" exact component={FormSignup} />
                    <Route path="/login" component={Login}/> 
                    <Route path="/register" component={FormSignup}/>
                    <Route path="/MainPage" component={MainPage}/>
                    <Route path="/Reports" component={Reports}/> 
                    <Route path="/add-patient" component={MainPage}/> 
                    
                    
      </Switch>
      </Router>
      
      
    </div>
  )
}

export default App;
