import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);


    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleClick = (event) => {
        // console.log(event.target.value);
        setInput(input + event.target.value)
    }

    const calculateResult = () => {
        const evaluatedResult = eval(input);
        // console.log('calc res');
        const prevHist = [...history];
        prevHist.push(input);
        if(prevHist.length > 5){
            prevHist.splice(0,1);
        }
        setHistory(prevHist);

        setInput(evaluatedResult);
    }

    return (
        <div style={{ padding: '0% 25%' }} id='calculator'>
            <h1 className='display-1'>Calculator</h1>
            <div >
            <h1 className='display-6'>History</h1>
                <ul className='list-group'>
                    {history.map((h, i) =>
                        <li key={i} onClick={() => setInput(h)} className='list-group-item'>{h}</li>)
                    }
                </ul>
            </div>
            <div style={{ display: 'flex' }}>
                <input type='text' className='form-control w-50' value={input} onChange={handleChange} />
                <button onClick={calculateResult} className='btn btn-primary w-25'>Calculate</button>
                <button className='btn btn-danger w-25' onClick={() => setInput("")}>Clear</button>
            </div>
            <div id='calculator-body'>

                <div>
                    <button value='7' className='btn btn-secondary digit' onClick={handleClick}>7</button>
                    <button value='8' className='btn btn-secondary digit' onClick={handleClick}>8</button>
                    <button value='9' className='btn btn-secondary digit' onClick={handleClick}>9</button>
                    <button value='+' className='btn btn-dark' onClick={handleClick}>+</button>
                </div>
                <div>
                    <button value='4' className='btn btn-secondary digit' onClick={handleClick}>4</button>
                    <button value='5' className='btn btn-secondary digit' onClick={handleClick}>5</button>
                    <button value='6' className='btn btn-secondary digit' onClick={handleClick}>6</button>
                    <button value='-' className='btn btn-dark' onClick={handleClick}>-</button>
                </div>
                <div>
                    <button value='1' className='btn btn-secondary digit' onClick={handleClick}>1</button>
                    <button value='2' className='btn btn-secondary digit' onClick={handleClick}>2</button>
                    <button value='3' className='btn btn-secondary digit' onClick={handleClick}>3</button>
                    <button value='*' className='btn btn-dark' onClick={handleClick}>*</button>
                </div>
                <div>
                    <button value='0' className='btn btn-secondary digit' onClick={handleClick}>0</button>
                    <button value='.' className='btn btn-secondary digit' onClick={handleClick}>.</button>
                    <button value='/' className='btn btn-dark' onClick={handleClick}>/</button>
                    <button value='=' className='btn btn-info' onClick={calculateResult} >=</button>
                </div>
            </div>

        </div>

    )

}

export default Calculator;