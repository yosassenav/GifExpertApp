import { useState } from "react";
import { AddCategory, Gifgrid, DeleteButton } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  const [selectedCategory, setSelectedCategory] = useState('');

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  const handleDeleteCategory = () => {
    if (!selectedCategory) {
      console.warn("No category selected!");
    }

    // Filter out the selected category
    const updatedCategories = categories.filter((category) => category !== selectedCategory);

    // Update the state with the new list of categories
    setCategories(updatedCategories);

    // Reset the selected category
    setSelectedCategory('');
  }

  return (
    <>
      {/**Titulo */}
      <h1>Gif Expert App!</h1>

      {/**Input */}
      <AddCategory onNewCategories={(evt) => onAddCategory(evt)} />

      {/**Listado de Gif */}
      {categories.map((category) => (
        <div key={category}>
          <Gifgrid key={category} category={category} />
          <DeleteButton onClick={handleDeleteCategory} />
        </div>
      ))}

    </>
  );
};
