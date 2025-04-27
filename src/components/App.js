import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [category, setCategory] = useState("all");

  function onDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode); // Toggle dark mode
  }

  function onCategoryChange(newCategory) {
    setCategory(newCategory); // Update the category
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <Filter onCategoryChange={onCategoryChange} />
      <ShoppingList items={itemData} category={category} />
    </div>
  );
}

export default App;
