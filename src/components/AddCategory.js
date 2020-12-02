import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState(''); //Si se queda useState() vacio significa undefined, se de ocupar useState('')

    const handleInputChange = e => {
        setInputValue(e.target.value); // Asigna el nuevo valor que se esta escribiedo
    }

    const handleSubmit = e => {
        e.preventDefault(); // Previe la actualizacion de la pagina al momento de dar enter
        // setInputValue('');
        if( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value = { inputValue } 
                placeholder="Ingrese una categorias" 
                onChange= { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = { // Regla para validar que la func es requerida.
    setCategories: PropTypes.func.isRequired
}