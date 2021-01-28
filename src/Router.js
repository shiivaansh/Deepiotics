import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import FormSignup from "./FormSignup";




function AppRouter (){ 
    
        return (

            <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route path="/" exact component={FormSignup} />
                    <Route path="/login" component={Login}/> 
                    <Route path="/register" component={FormSignup}/> 
                    
                    
                </Switch>
            </BrowserRouter>
        );
    
}
export default AppRouter;