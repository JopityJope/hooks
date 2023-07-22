import React from "react";

function ImeGodineChildren({ ime, godine, children }) {
  return (
    <>
      <p>
        Korisnik/ca {ime} ima {godine} godina.
      </p>
      {children}
    </>
  );
}

export default ImeGodineChildren;
