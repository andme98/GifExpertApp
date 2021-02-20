import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = (props) => {
    
    const {setCategories} = props
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories(categories => [...categories,inputValue]);
        setInputValue('')
        console.log('Submit hecho: ',inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
          <h3>Add Category</h3>
          <input type="text" value={inputValue} onChange={handleInputChange}></input>  
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
