import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import '../styles/Form.css';

const Form = () => {
  const {inputValue, handleChange, handleSubmit} = useContext(AppContext);
  const history = useHistory();

  return (
    <form onSubmit={(event) => handleSubmit(event, history)} className='search'>
      <label className='search__label'>
        <input className='search__input' type="text" value={inputValue} onChange={handleChange} placeholder={'What are you looking for?'} maxLength={50}/>
        <button className='search__button' type='submit'>
          <i class="fas fa-search"></i>
        </button>
      </label>
    </form>
  );
}

export default Form;