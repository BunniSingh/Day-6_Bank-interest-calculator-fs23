import React from 'react'
import { useState } from 'react'
import Slidebar from './Component/Slidebar'
import './App.css';
import {Chart} from './Component/Chart';
import Navbar from './Component/Navbar';


const App = () => {
  const [principle, setPrinciple] = useState(3000);
    const [downPayment, setDownPayment] = useState(300);
    const [loanAmount, setLoanAmount] = useState(2700);
    const [intrestRate, setIntrestRate] = useState(5);
    const [year, setYear] = useState(5);
    console.log(principle, downPayment, loanAmount, intrestRate, year);
    

    const totalLoanMonths = year * 12;
    const interestPerMonth = intrestRate / 100 / 12;
    const monthlyPayment = (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);
    const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  return (
    <>
        <Navbar/>
       <div className="container">
        <Slidebar
          principle={principle}
          downPayment={downPayment}
          loanAmount = {loanAmount}
          intrestRate = {intrestRate}
          year = {year}
          setPrinciple={setPrinciple}
          setDownPayment = {setDownPayment}
          setLoanAmount = {setLoanAmount}
          setIntrestRate = {setIntrestRate}
          setYear = {setYear}
        />
        <Chart 
          principle = {principle}
          totalInterestGenerated={totalInterestGenerated}
          monthlyPayment = {monthlyPayment}
        />
        </div> 
    </>
  )
}

export default App