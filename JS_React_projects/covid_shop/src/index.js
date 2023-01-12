import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <div>
        <Shop />
        <button class="py-5 px-20 m-5 bg-lime-800 text-white text-xl border-black rounded shadow-lg" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2 class="text-3xl font-bold">Нужно залогиниться!</h2>
        <button className="py-5 px-20 m-5 bg-lime-800 text-white text-xl border-black rounded shadow-lg" onClick={() => setLogin(true)}>
          Войти
        </button>
      </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
