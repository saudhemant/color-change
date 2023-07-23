import './App.css';
import Input from './components/Input';
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState(null);
  const [value, setValue] = useState('');
  const handleClick = (event) => {
    setValue(event.target.value);
  }
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center w-50">
        <h1 className="display-5 me-auto">Change Color</h1>
        <div className="container border border-dark-subtle my-3" style={{ backgroundColor: `${bgColor}`, height: '200px', width: '100%' }}></div>
        <Input 
          input={ value }
          setBgColor={ setBgColor }
        />
        <div className='w-100'>
          <ul className="list-group">
            <li className="list-group-item bg-dark text-light">Examples</li>
            <button type="button" className="list-group-item" onClick={ handleClick } value={"#000"}>#000</button>
            <button type="button" className="list-group-item" onClick={ handleClick } value={"DarkGREY"}>DarkGREY</button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
