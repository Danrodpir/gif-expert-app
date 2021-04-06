import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue (e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length >= 1){
            setCategories( category => [inputValue, ...category]);
            setInputValue('LoL');
        }
    }
    
    return (
            <form onSubmit = {handleSubmit}>
                <input 
                    type= "text"         
                    value={inputValue}  
                    placeholder="Busca tus gifs aquí"
                    onChange={handleInputChange}     
                />   
            </form>      
    )
};

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}