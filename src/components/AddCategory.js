import React, {useState} from 'react';
import PropTypes from 'prop-types';
import db from 'D:/React/03-gif-expert-app/src/firebase/config';


const AddCategory = (props) => {
    
    const usuario = {
        nombre: 'Roberto',
        apellido: 'Meregildo',
        fechaNac: 0   
    }

    const {setCategories} = props
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(categories => [...categories,inputValue]);
        let obj = {
            nombre: inputValue,
        }
        db.collection('titles').add(obj);
        setInputValue('')
        console.log('Submit hecho: ',inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
          <h3>Add Title</h3>
          <input type="text" value={inputValue} onChange={handleInputChange}></input>  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
