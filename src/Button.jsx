import React from "react";

function Button({ counterFunkcija, tekst }) {
  return <button onClick={counterFunkcija}>{tekst}</button>;
}

export default Button;
