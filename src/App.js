import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as yup from 'yup';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/home'
import Form from './components/pizzaform'
import schema from './validation/formSchema';
import Pizza from './components/pizza';
import styled from 'styled-components';
import './App.css';


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  bacon: false,
  anchovies: false,
  pineapple: false,
  chicken: false,
  sausage: false,
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
}
const initialPizzas = []
const initialDisabled = true;



const App = () => {

  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const addPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
    .then(res => {
      setPizzas([res.data, ...pizzas]);
      setFormValues(initialFormValues);
    })
    .catch(err => {
      console.log(err);
    })
    
  }


  const pizzaChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const pizzaSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pepperoni', 'bacon', 'anchovies', 'pineapple', 'chicken', 'sausage'].filter(topping => formValues[topping]),
      instructions: formValues.instructions.trim(),
    }
    addPizza(newPizza);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])



  return (
    <div>
      <nav className='navbar'>
        <h1>Lambda Eats</h1>
        <NavDiv>
          <Link to='/' className='home'>HOME</Link>
          <p className='aryan'>COME GET YOURSELF SOME MIGHTY FINE PIZZA!!!</p>
          <Link to='/pizza' className='home'>PIZZA</Link>
        </NavDiv>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            change={pizzaChange}
            submit={pizzaSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

      {/* KEEPING THIS AT THE BOTTOM OF ANY PAGE SO YOU CAN REVIEW THE ORDER */}
      {
        pizzas.map(pizza => {
          return (
            <Pizza key={pizza.id} details={pizza} />
          )
        })
      }
    </div>
  );
};

const NavDiv = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default App;
