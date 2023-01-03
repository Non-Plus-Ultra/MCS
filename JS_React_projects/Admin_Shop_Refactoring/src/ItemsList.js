import React from "react";
import Item from "./Item.js";

export default function ItemsList(props) {
  return (
    <>
      <ul className="ui-list">
        {props.items.map((item, id) => (
          <li key={id} className="ui-item-list">
            <Item info={item} />
            <button
              className="item-button"
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
