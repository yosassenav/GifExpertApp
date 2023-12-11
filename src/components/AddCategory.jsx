import { useState } from "react"

export const AddCategory = ({handleSubmit}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }


    return(
    <form onSubmit={(e) => {handleSubmit(e, inputValue)}}>
        { inputValue }
        <input
        type="text"
        placeholder="Buscar Gifs"
        onChange={onInputChange}
        />
        <button type="submit">click</button>
    </form>
    )
}