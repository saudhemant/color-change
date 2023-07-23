import React, { useState, useEffect } from 'react'


export default function Input(props) {
    const [input, setInput] = useState('');

    useEffect(() => {
        setInput(props.input);
        props.setBgColor(props.input);
        // eslint-disable-next-line
    }, [props.input]);

    const handleChange = (event) => {
        setInput(event.target.value);
        const {value} = event.target;
        props.setBgColor(value);
    }
  return (
    <>
        <div className="input-group my-3">
            <span className="input-group-text">Color:</span>
            <input 
                className="form-control" 
                type="text" 
                name="color-input" 
                onChange={ handleChange }
                value={input}
            />
        </div>
    </>
  )
}


