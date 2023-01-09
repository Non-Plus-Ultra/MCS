import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div>
      <div class="text-xs">
        <h2 class="text-3xl">{info.name}</h2>
        <p class="text-xs">{info.desc}</p>
      </div>
      <div class="flex items-center mb-10">
        <button
          class="text-black px-5 py-1 mr-3 text-base cursor-pointer shadow-lg rounded active:shadow-none disabled:opacity-25"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 class="text-base">{total ? total : ""}</h3>
        <button class="text-black px-5 py-1 ml-3 text-base cursor-pointer shadow-lg rounded active:shadow-none disabled:opacity-25" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
