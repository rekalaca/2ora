import logo from './logo.svg';
import './App3.css';
import adatjson from './adat3.json';
import kep from './bringa.jpg';

function tavolsag(x,y) {
    let c = Math.sqrt(x*x + y*y);
    return c;
}


function App2() {
  return (  
    <div id='teljes'>
      <img src={kep} className='kepes' alt="Bringa"/>  
      <h2>Bringás adatok:</h2>        
      <table>     
        <tbody>              
          <tr id='fej'>
            <td>Perc: </td>
            <td>X tengely:</td>
            <td>Y tengely:</td>
            <td>Távolság:</td>
            <td>Átlagsebesség:</td>
          </tr>
          {adatjson.map((kerekpar, index)=> {
            if(index==0){
              return(<tr><td>0.perc</td><td>0 méter</td><td>0 méter</td><td>0 méter</td><td>NEM ÉRTELMEZHETŐ !</td></tr>)
            }else{
            return(<tr key={index}><td>{index}.perc</td><td>{kerekpar.x} méter</td><td>{kerekpar.y} méter</td><td>{tavolsag(kerekpar.x, kerekpar.y).toFixed(2)} méter</td><td>{(tavolsag(kerekpar.x, kerekpar.y)/(index*60)).toFixed(2)} m/s</td></tr>)}
          })}
        </tbody>
      </table>
      </div>
      
    
  );
}
export default App2;
