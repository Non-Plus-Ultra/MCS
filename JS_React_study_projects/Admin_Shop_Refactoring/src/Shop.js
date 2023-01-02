import React, { useState } from "react";
import uuid from "react-uuid";
import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

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
        <AddItem name={name} desc ={desc} onFormSubmit={handleFormSubmit} setName={setName} setDesc={setDesc}/>
        {items.length === 0 && (
            <div>
                <p className="ui-title">{"Добавьте первый товар"}</p>
            </div>
        )}
        <ItemsList items={items} onCancelClick={handleCancelClick} />
    </>
  )
}