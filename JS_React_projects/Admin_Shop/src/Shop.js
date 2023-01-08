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
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (counter === 0) {
      document.title = "Товары отсутствуют";
    } else if (counter === 1) {
      document.title = `${counter} товар`;
    } else if (counter === 2 || counter === 3 || counter === 4) {
      document.title = `${counter} товара`;
    } else {
      document.title = `${counter} товаров`;
    }
  }, [counter]);

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
    setCounter((prev) => prev + 1);
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
          <p className="ui-title">{"Добавьте первый товар"}</p>
        </div>
      )}
      <ItemsList items={items} onCancelClick={handleCancelClick} />
    </>
  );
}
