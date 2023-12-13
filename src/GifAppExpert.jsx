import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }


    return(
    <>
    {/**Titulo  */}
        <h1>Gif Expert App!</h1>
        

    {/**Input */}
    <AddCategory onNewCategories={(evt)=>onAddCategory(evt)}/>
    {/**Listado de Gif */}
    {/* <button onClick={onAddCategory}>Add Category</button> */}
        <ol>
            {categories.map((category)=>{
                return <li key={category}>{category}</li>})}
        </ol>
        {/**Gif Item */}
        
    </>);
}