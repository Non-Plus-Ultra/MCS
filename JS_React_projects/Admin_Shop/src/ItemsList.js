import React from "react";
import Item from "./Item.js";

export default function ItemsList(props) {
  return (
    <>
      <ul>
        {props.items.map((item, id) => (
          <li key={id} class="m-5">
            <Item info={item}/>
            <button
              class="px-1 py-1 border border-black rounded w-1/5 text-xs text-black"
              onClick={() => props.onCancelClick(item.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
