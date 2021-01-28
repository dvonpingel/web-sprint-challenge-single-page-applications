import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/home'
import Form from './components/pizzaform'


const App = () => {

  const initialFormValues = {
    name: '',
    size: '',
    pepperoni: false,
    bacon: false,
    anchovies: false,
    pineapple: false,
    chicken: false,
    sausage: false,
  }


  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='navbar'>
          <Link to='/'>HOME</Link>
          <p>Come get yourself some MIGHTY FINE pizza!!!</p>
          <Link to='/pizza'>PIZZA</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Form

          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
