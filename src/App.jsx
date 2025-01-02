import React from 'react'
import Slidebar from './Component/Slidebar'
import './App.css';
import {Chart} from './Component/Chart';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <>
        <Navbar/>
       <div className="container">
        <Slidebar/>
        <Chart/>
        </div> 
    </>
  )
}

export default App