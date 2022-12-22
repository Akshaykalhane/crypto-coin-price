import React from 'react';
import { BrowserRouter, Route,Routes } from "react-router-dom";

import Home from './component/home';
import Customer from './component/customer';
import Order from './component/order';
import EditProduct from './component/editproduct';
import EmployeeShift from './component/employeeshift';
import Setting from './component/setting';
import Coupen from './component/coupen';
import Day3 from './30 days/day3';
import Day6 from './30 days/day6';
import Day7 from './30 days/day7';
import Day8 from './30 days/day8';
import Day9 from './30 days/day9';
import Day11 from './30 days/day11';
import Form from './30 days/form';
import Note from './30 days/note';
import NewForm from './30 days/newForm';
import Day14 from './30 days/day14';
import Random from './30 days/random';
import Day16 from './30 days/day16';
import Day17 from './30 days/day17';
import App1 from './30 days/pokemon/app';
import Routing from './30 days/routing';
import Day18 from './30 days/day18';
import Project1 from './30 days/project1/project1';
import Day21 from './30 days/day21';
import Day22 from './30 days/day22';
import Day22_2 from './30 days/day22_2';
import Day23 from './30 days/day23';
import Day24 from './30 days/day24';
import App2 from './30 days/crudapp/app';
import Day27 from './30 days/day27';
import ColorChange from './30 days/colorChange';
import App3 from './30 days/day 28 final project/app';
import App4 from './form/app';
import App11 from './content/app';
import App21 from './cryptoapp/app';

function App() {

  return (
    <>
     {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/customer' element={<Customer />}></Route>
          <Route path='/coupen' element={<Coupen />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/employeeshift' element={<EmployeeShift />}></Route>
          <Route path='/editproduct' element={<EditProduct />}></Route>
          <Route path='/setting' element={<Setting />}></Route>
        </Routes>
      </BrowserRouter> */}
      <App21 />
    </>
  );
}

export default App;
