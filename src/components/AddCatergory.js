import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCatergory = ({setcategories}) => {
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) =>{
        // console.log(e.target.value);
        setinputValue(e.target.value);
    }
    const handleSubmit = (e) => {
            e.preventDefault();
            if(inputValue.trim().length > 2){
                setcategories( ct => [inputValue, ...ct]);
                setinputValue('');
            }           
    }
    return (
        <form onSubmit={handleSubmit}>
           <input
                type="text"
                value={ inputValue}
                onChange={handleInputChange}
           />
        </form>
    )
}
AddCatergory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
