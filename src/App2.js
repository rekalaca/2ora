
import './App.css';
import adatjson from './adat2.json';

function App2() {
  return (
    
    
      <table>
        <tbody>
          <tr>
            <td>Márka:</td>
            <td>Üzemanyag:</td>
            <td>Hengerűrtartalom:</td>
            <td>Fogyaztás:</td>
          </tr>
          {adatjson.map((adat)=> {
            let szinez = "Benzin";
            if(adat.uzemanyag == "Diesel") {
              szinez = "Diesel";
            }
            let fogyaszt = 6;
            if(adat.hengerurtartalom>1600){
                fogyaszt=12;
            }
            return(<tr className={szinez}><td>{adat.marka}</td><td>{adat.uzemanyag}</td><td>{adat.hengerurtartalom} m<sup>3</sup></td><td>{fogyaszt} liter / 100 km</td></tr>)
          })}
        </tbody>

      </table>
    
  );
}

export default App2;
