import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import "./index.css";

export default function Shop() {

  const [items, setItems] = useState()
  const [loader, setLoader] = useState(false)

    useEffect(() => {
      (async() => {
        try {
          setLoader(true);
          const response = await fetch("https://learn.guidedao.xyz/api/student/products" );
          const data = await response.json();
          setItems(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoader(false);
        }
        })()
      }, [])  
  
  if(loader) {
    return (
      <p>"Идет загрузка...</p>
    )}
  return (
    <div>
      <h3 class="text-3xl font-bold text-black ml-5">Товары</h3>
      <ul class = "m-5">
        {items && items.flat(2).map((item) => <li key={item.id}><Item info={item}/></li>)}
      </ul>
    </div>
  )
}
