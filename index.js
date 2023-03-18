import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Dropdown, Button } from 'react-bootstrap';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import App from './App';
import Ex1 from './exs/ex1';
// import Ex2 from './ex/ex2';
import Ex3 from './exs/ex3';
import Ex3_1 from './exs/ex3.1';
import Ex4 from './exs/ex4';
import Ex5 from './exs/ex5';
import Ex6 from './exs/ex6';
import Ex7 from './exs/ex7';
import Ex8 from './exs/ex8';
import Ex9 from './exs/ex9';
import Ex10 from './exs/ex10';
import Ex11 from './exs/ex11';
import Ex12 from './exs/ex12';
import Ex13 from './exs/ex13';
import Ex14 from './exs/ex14';
import Ex15 from './exs/ex15';
import Ex16 from './exs/ex16';
import Ex17 from './exs/ex17';
import Ex18 from './exs/ex18';
import Ex19 from './exs/ex19';
import Ex20 from './exs/ex20';
import Ex21 from './exs/ex21';
import Ex22 from './exs/ex22';
import Ex23 from './exs/ex23';
import Ex24_1 from './exs/ex24.1';
import Ex24_2 from './exs/ex24.2';
import Ex24_3 from './exs/ex24.3';
import { Provider } from 'react-redux';
import store from './exs/redux1/store';
import Counter from './exs/redux1/counter';
import Counter2 from './exs/redux2/counter';
import store2 from './exs/redux2/store';



const links = [
  {to:'/ex1', name : 'Ex1'},
  {to:'/ex3', name : 'Ex3'},
  {to:'/ex3_1', name : 'Ex3.1'},
  {to:'/ex4', name : 'Ex4'},
  {to:'/ex5', name : 'Ex5'},
  {to:'/ex6', name : 'Ex6'},
  {to:'/ex7', name : 'Ex7'},
  {to:'/ex8', name : 'Ex8'},
  {to:'/ex9', name : 'Ex9'},
  {to:'/ex10', name : 'Ex10'},
  {to:'/ex11', name : 'Ex11'},
  {to:'/ex12', name : 'Ex12'},
  {to:'/ex13', name : 'Ex13'},
  {to:'/ex14', name : 'Ex14'},
  {to:'/ex15', name : 'Ex15'},
  {to:'/ex16', name : 'Ex16'},
  {to:'/ex17', name : 'Ex17'},
  {to:'/ex18', name : 'Ex18'},
  {to:'/ex19', name : 'Ex19'},
  {to:'/ex20', name : 'Ex20'},
  {to:'/ex21', name : 'Ex21'},
  {to:'/ex22', name : 'Ex22'},
  {to:'/ex23', name : 'Ex23'},
  {to:'/ex24_1', name : 'Ex24 App'},
  {to:'/ex24_2', name : 'Ex24 About'},
  {to:'/ex24_3', name : 'Ex24 Concat'},
  {to:'/counter', name : 'Redux Exemple 1'},
  {to:'/counter2', name : 'Redux Exemple 2'},
];


const Routing =  ()=>{
  return ( 
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" aria-current="page" to='/'>Home</Link>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu className='dropdown-menu' aria-labelledby="navbarDropdown">
              {
                links.map((el, index)=><Dropdown.Item key={index} href={el.to} >{el.name}</Dropdown.Item>)
              }
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>  
      <div className='container'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ex1" element={<Ex1 />} />
        <Route path="/ex3" element={<Ex3 />} />
        <Route path="/ex3_1" element={<Ex3_1 />} />
        <Route path="/ex1" element={<Ex4 />} />
        <Route path="/ex4" element={<Ex1 />} />
        <Route path="/ex5" element={<Ex5 />} />
        <Route path="/ex6" element={<Ex6 />} />
        <Route path="/ex7" element={<Ex7 />} />
        <Route path="/ex8" element={<Ex8 />} />
        <Route path="/ex9" element={<Ex9 />} />
        <Route path="/ex10" element={<Ex10 />} />
        <Route path="/ex11" element={<Ex11 />} />
        <Route path="/ex12" element={<Ex12 />} />
        <Route path="/ex13" element={<Ex13 />} />
        <Route path="/ex14" element={<Ex14 />} />
        <Route path="/ex15" element={<Ex15 />} />
        <Route path="/ex16" element={<Ex16 />} />
        <Route path="/ex17" element={<Ex17 />} />
        <Route path="/ex18" element={<Ex18 />} />
        <Route path="/ex19" element={<Ex19 />} />
        <Route path="/ex20" element={<Ex20 />} />
        <Route path="/ex21" element={<Ex21 />} />
        <Route path="/ex22" element={<Ex22 />} />
        <Route path="/ex23" element={<Ex23 />} />
        <Route path="/ex24_1" element={<Ex24_1 />} />
        <Route path="/ex24_2" element={<Ex24_2 />} />
        <Route path="/ex24_3" element={<Ex24_3 />} />
        <Route path="/counter" element={<Provider store={ store }> <Counter /> </Provider>} />
        <Route path="/counter2" element={<Provider store={ store2 }> <Counter2 /> </Provider>} />
      </Routes>
      </div>
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routing />
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
