import PropTypes from "prop-types";
import { useState } from "react"


export const AddCategory = ({onNewCategories}) => {


    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue.trim().length <= 1) return; //cuando la caja de etxto viene vacia
        // setCategories(categories => [inputValue, ...categories])
        setInputValue('');
        onNewCategories(inputValue.trim());
    };



    return(
        <form onSubmit={(e) => {handleSubmit(e, inputValue)}} aria-label="form">
        { inputValue }
        <input
        type="text"
        placeholder="Buscar Gifs"
        onChange={onInputChange}
        value={inputValue}
        />
        </form>
   
    )
}

AddCategory.propTypes = {
    onNewCategories: PropTypes.func.isRequired,
  };