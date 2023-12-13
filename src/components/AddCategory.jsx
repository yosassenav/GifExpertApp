import { useState } from "react"

export const AddCategory = ({onNewCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        //console.log(event.target.value);
        setInputValue(target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])
        onNewCategories(inputValue.trim());
        setInputValue('');
    };

    return(
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        onChange={onInputChange}
        value={inputValue}
        />
        
    </form>
    )
}