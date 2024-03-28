import React from 'react'
import Webcam from 'react-webcam'
import  { useState } from 'react';

export default function Opencamera() {
  
    const [randomNumber, setRandomNumber] = useState(null);
    const [buttonColor, setButtonColor] = useState('');
  
    // Function to generate a random integer between min (inclusive) and max (inclusive)
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    const generateRandomNumber = () => {
      const min = 100;
      const max = 1000;
      const randomNum = getRandomInt(min, max);
      setRandomNumber(randomNum);
      setButtonColor('');

    };
    // odd number logic
   
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
  
    const handleChange1 = (event) => {
      const inputValue = event.target.value;
      setButtonColor('');
      setValue1(inputValue);
      if (!isNaN(inputValue) && parseInt(inputValue) % 2 !== 0) {
        setError1(false);
      } else {
        setError1(true);
      }
    };
  
    const handleChange2 = (event) => {
      const inputValue = event.target.value;
      setButtonColor('');
      setValue2(inputValue);
      if (!isNaN(inputValue) && parseInt(inputValue) % 2 !== 0) {
        setError2(false);
      } else {
        setError2(true);
      }
    };
  
    const handleBlur1 = () => {
      if (value1 !== '' && parseInt(value1) % 2 === 0) {
        setError1(true);
      }
    };
  
    const handleBlur2 = () => {
      if (value2 !== '' && parseInt(value2) % 2 === 0) {
        setError2(true);
      }
    };

  // checking 
  const checkConditions = () => {
    if (randomNumber !== null && value1 !== '' && value2 !== '' && value !== '') {
      const sum = parseInt(value1) + parseInt(value2) + parseInt(value);
      setButtonColor(randomNumber === sum ? 'green' : 'red');
    }
  };
    // even numbers 
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
  
    const handleChange = (event) => {
      const inputValue = event.target.value;
      setButtonColor('');
      setValue(inputValue);
      if (!isNaN(inputValue) && parseInt(inputValue) % 2 === 0) {
        setError(false);
      } else {
        setError(true);
      }
    };
  
    const handleBlur = () => {
      if (value !== '' && parseInt(value) % 2 !== 0) {
        setError(true);
      }
    };
    // checking button
    // const [buttonColor, setButtonColor] = useState('');

   return (
    <div>
        

<Webcam></Webcam>
<br/>
{/* <span class="border border-primary">box</span> */}

<div >
{randomNumber && <p class="clsa">Random Number: {randomNumber}</p>}
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      
      </div>
    {/* Explain */}

    <div class="input-group" id="input2">
  <span class="input-group-text"id="input1">Enter Three Numbers</span>
  <input type="text"value={value1}
          onChange={handleChange1}
          onBlur={handleBlur1}  placeholder='Enter Only Odd number'/>
          {error1 && <p>Please enter an odd number.</p>}
  <input type="text" value={value2}
          onChange={handleChange2}
          onBlur={handleBlur2} placeholder='Enter Only Odd number'/>
           {error2 && <p>Please enter an odd number.</p>}
  <input type="text" value={value}
        onChange={handleChange}
        onBlur={handleBlur} placeholder='Enter Only Even number'/>
         {error && <p>Please enter an even number.</p>}
  {/* <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button> */}
  <br/>
</div>
   

{/* <button class="btn btn-outline-secondary" type="button" id="button-addon3">Checking</button> */}


{/* checking */}


<button style={{ backgroundColor: buttonColor }} onClick={checkConditions} id="button-addon3">
          Check Conditions
        </button>






























    </div>
  )
}
