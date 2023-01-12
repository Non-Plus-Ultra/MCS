import React, { useState } from "react";

export default function Item({info: {name, desc, image}}) {
  const [total, setTotal] = useState(0);

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div class="flex w-3/4 flex-col items-start">
      <div>
        <h2 class="text-2xl font-bold mt-10">{name}</h2>
        <p>{desc}</p>
      </div>
      <img src={image} />
      <div class="flex items-start">
        <button
          class="py-2 px-5 m-2 bg-lime-800 text-white border-black rounded shadow-lg"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 class="text-xl font-bold mt-2">{total ? total : ""}</h3>
        <button class="py-2 px-5 m-2 bg-lime-800 text-white border-black rounded shadow-lg" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
