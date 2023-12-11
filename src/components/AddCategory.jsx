import { useState } from "react"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        //console.log(event.target.value);
        setInputValue(target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("AddCategory Props:", setCategories);
        if (inputValue.trim().length <= 1) return;

        // if(typeof onAddCategories === "function"){
        setCategories(categories => [inputValue, ...categories])
        // }
        setInputValue('');
    };

    return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        onChange={onInputChange}
        />
        
    </form>
    )
}