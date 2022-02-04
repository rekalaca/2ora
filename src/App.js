import { useState } from "react";
import Adat from "./adat1.json";
import "./App.css";

function App() {
  const [adat, setAdat] = useState({});

  const kuld = () => {
    let nev = document.getElementById("nev").value;
    let kor = document.getElementById("kor").value;
    let nem = "fiú";
    let lany = document.getElementById("lany");
    if (lany.checked) {
      nem = "lány";
    }

    setAdat(Adat.push({ neve: nev, kora: kor, neme: nem }));
  };

  return (
    <div id="bekeres">
      <label>név: </label>
      <input id="nev" type="text" />
      <label>kor: </label>
      <input id="kor" type="number" />
      <label>lány: </label>
      <input id="lany" type="checkbox" />
      <label>fiú: </label>
      <input type="checkbox" />
      <button onClick={kuld}>Beküld</button>
      <div>
        <table>
          <tr>
            <th>név:</th>
            <th>kor:</th>
            <th>nem:</th>
          </tr>
          {Adat.map((item, index) => (
            <tr key={index} className={item.neme === "fiú" ? "fiú" : "lány"}>
              <td>{item.neve}</td>
              <td>{item.kora}</td>
              <td>{item.neme}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
