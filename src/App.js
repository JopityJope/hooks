import React, { useState } from "react";
import Button from "./Button";
import Imeigodine from "./Imeigodine";
import ImeigodineKlasa from "./ImeigodineKlasa";
import ImeGodineChildren from "./ImeGodineChildren";

function App() {
  // const [naziv varijable, set metoda] = useStrate(inicijalna vrijednost)

  const randomText = "I volim povijest.";

  const [users, setUsers] = useState([
    {
      ime: "Josipa",
      dob: 28,
    },
    {
      ime: "Tea",
      dob: 27,
    },
    {
      ime: "Boris",
      dob: 31,
    },
  ]);

  const dodajGodine = () => {
    let newUsers = users;
    console.log(newUsers);
    newUsers.forEach((user) => {
      user.dob++;
      console.log(user.dob);
    });
    setUsers(newUsers);
  };

  return (
    <div>
      <Imeigodine ime={users[0].ime} godine={users[0].dob} />
      <ImeigodineKlasa ime={users[1].ime} godine={users[1].dob} />
      <ImeGodineChildren
        ime={users[2].ime}
        godine={users[2].dob}
        children={randomText}
      ></ImeGodineChildren>
      <br />
      <Button counterFunkcija={dodajGodine} tekst="Dodaj godine" />
    </div>
  );
}

export default App;
