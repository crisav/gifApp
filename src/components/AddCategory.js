import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  // hay que manejarlo para que no haga un refresh que es su comportamietno por defecto
  const handleSubmit = (e) => {
    // con esta sentencia evitamos el refresh y manejamos el evento a nuestra manera
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      // si lo manjeo con proprs tengo que usarlo asi
      // props.setCategories()
      // de esta forma tenemos acceso a categories 
      setCategories(cats => [inputValue, ...cats]);
      // se resetea el setInputValue para que no se peuda enviar lo mismo
      setInputValue('');
    }

  }

  return (
    // form ayuda a que con el ENTER pueda hacer submit
    <form onSubmit={ handleSubmit }>
      <p>{ inputValue }</p>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory

