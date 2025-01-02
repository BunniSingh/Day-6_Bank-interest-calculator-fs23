import React, { useState } from 'react'

const Slidebar = () => {
    const [principle, setPrinciple] = useState(3000);
    const [downPayment, setDownPayment] = useState(300);
    const [loanAmount, setLoanAmount] = useState(700);
    const [intrestRate, setIntrestRate] = useState(5);
    const [year, setYear] = useState(5);

    const principleChange = (e) => {
        let amount = Number(e.target.value);
        setPrinciple(amount);
        setDownPayment(amount - (amount * 80)/100)
        setLoanAmount(amount - (amount * 20)/100)
    }

    const downPaymentChange = (e) =>{
        let amount = e.target.value;
        setDownPayment(amount);
        setLoanAmount(principle - amount);
    }

    const loanAmountChange = (e) =>{
        let amount = e.target.value;
        setLoanAmount(amount);
        setDownPayment(principle - amount);
    }

    const intrestRateChange = (e) =>{
        setIntrestRate(e.target.value);
    }

    const yearChange = (e) =>{
        setYear(e.target.value);
    }
    
    return (
        <div className="slidebar">
            <div className="slidebar-container">
                <p>Priciple Amount</p>
                <h1>$ {principle}</h1>
                <input type="range" className='principle'
                    min={1000}
                    max={10000}
                    value={principle}
                    step={100}
                    onChange={principleChange}
                />
                <div className="values">
                    <p>$ 1000</p>
                    <p>$ 10000</p>
                </div>
            </div>

            <div className="slidebar-container">
                <p>Down Payment</p>
                <h1>$ {downPayment}</h1>
                <input type="range" className='downPayment'
                    min={0}
                    max={3500}
                    value={downPayment}
                    step={100}
                    onChange={downPaymentChange}
                />
                <div className="values">
                    <p>$ 0</p>
                    <p>$ {principle}</p>
                </div>
            </div>

            <div className="slidebar-container">
                <p>Loan Amount</p>
                <h1>$ {loanAmount}</h1>
                <input type="range" className='loanAmount'
                    min={0}
                    max={3500}
                    value={loanAmount}
                    step={100}
                    onChange={loanAmountChange}
                />
                <div className="values">
                    <p>$ 0</p>
                    <p>$ {principle}</p>
                </div>
            </div>

            <div className="slidebar-container">
                <p>Intrest Rate</p>
                <h1>% {intrestRate}</h1>
                <input type="range" className='intrestRate'
                    min={2}
                    max={18}
                    value={intrestRate}
                    step={1}
                    onChange={intrestRateChange}
                />
                <div className="values">
                    <p>% 0</p>
                    <p>% 3500</p>
                </div>
            </div>
            
            <select name="year" id="year" onChange={yearChange}>
                <option value="5">5 year</option>
                <option value="10">10 year</option>
                <option value="15">15 year</option>
                <option value="20">20 year</option>
            </select>
        </div>
    )
}

export default Slidebar