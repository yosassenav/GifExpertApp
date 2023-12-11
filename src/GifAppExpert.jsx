import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        setCategories([...categories, 'test'])
    }


    const handleSubmit = (evt, string) => {
        evt.preventDefault();
        console.log("Event from child", evt)
        console.log(string)
        /* add logic here */
      
    };


    return(
    <>
    {/**Titulo  */}
        <h1>Gif Expert App!</h1>
        

    {/**Input */}
    <AddCategory handleSubmit={handleSubmit} />
    {/**Listado de Gif */}
    {/* <button onClick={onAddCategory}>Add Category</button> */}
        <ol>
            {categories.map((category)=>{
                return <li key={category}>{category}</li>})}
        </ol>
        {/**Gif Item */}
        
    </>);
}