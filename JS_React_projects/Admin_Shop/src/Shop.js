import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("items"))
  );
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (items.length === 0) {
      document.title = "Товары отсутствуют";
    } else if (items.length === 1) {
      document.title = `${items.length} товар`;
    } else if (items.length === 2 || items.length === 3 || items.length === 4) {
      document.title = `${items.length} товара`;
    } else {
      document.title = `${items.length} товаров`;
    }
  }, [items]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const newGood = {
      id: uuid(),
      name: name,
      desc: desc
    };
    setItems([...items, newGood]);
    setName("");
    setDesc("");
  }

  function handleCancelClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <AddItem
        name={name}
        desc={desc}
        onFormSubmit={handleFormSubmit}
        setName={setName}
        setDesc={setDesc}
      />
      {items.length === 0 && (
        <div>
          <p class="m-5">{"Добавьте первый товар"}</p>
        </div>
      )}
      <ItemsList items={items} onCancelClick={handleCancelClick} />
    </>
  );
}
