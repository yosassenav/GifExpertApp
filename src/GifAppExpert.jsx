import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gifgrid } from "./components/GifGrid";

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }



    return(
    <>
    {/**Titulo  */}
        <h1>Gif Expert App!</h1>
        

    {/**Input */}

    <AddCategory onNewCategories={(evt)=>onAddCategory(evt)}/>

    {/**Listado de Gif */}
    {/* <button onClick={onAddCategory}>Add Category</button> */}
            {
                categories.map((category)=>{return <Gifgrid key={category} category={category}/>})
            }
        {/**Gif Item */}
        
    </>);
}