import { useState } from 'react';
import './App.css';
import SkaiciuKonverteris from './components/SkaiciuKonverteris/SkaiciuKonverteris';

function App() {

  let skaiciai = ["0","1","2","3","4","5","6","7","8","9"];
  
  let [suma, setSuma] = useState(0)
  let [pvm, setPvm] =useState(0)
  let [pvmS, setPvmS] = useState(0)
  let [tarifas, setTarifas] = useState(21)

  const numberChange = (target) => {
    
    if(target.value == ""){
      target.value = 0;
    }

    if(!skaiciai.includes(target.value))
      target.value = parseInt(target.value)

    if(target.name === 'bendra'){
      setPvmS(+target.value)
      bendraSk(+target.value)
    }

    if(target.name === 'suma'){
      setSuma(+target.value)
      setPvm((+target.value / 100) * tarifas)
      setPvmS(+target.value + ((+target.value / 100) * tarifas))
    } 
  }

  
  const selectorOnChange = (value) => {
    setTarifas(value)
    setPvm((suma / 100) * value);
    setPvmS(suma + ((suma / 100) * value));
  }

  const bendraSk = (value) => {
    let cof = 0;
    if(tarifas == 21){
      cof = 1.21;
    }
    else if(tarifas == 9){
      cof = 1.09;
    }
    else {
      cof = 1.05;
    }
    setPvm(value - (value / cof));
    setSuma(value / cof)
  }


  return (
    <div>
      <div className='pvm-skaiciuokle'>
        <div className='Header m-4 p-4'>
          <h1>PVM SKAIČIUOKLĖ</h1>
        </div>
        <div className='Main m-4 p-4'>
          <div className='box d-flex justify-content-between'>
            <span className=''>PVM tarifas</span>
            <div className='col-8 '>
              <select className='form-control' onChange={(e)=> {selectorOnChange(e.target.value)}}>
                <option value={21}>21%</option>
                <option value={9}>9%</option>
                <option value={5}>5%</option>
              </select>
            </div>
          </div>
          <div className='d-flex mt-3 justify-content-between'>
            <span className='me-3 '>Suma (be PVM)</span>
            <div className='col-8'>
              <input className='form-control' name="suma" value={+suma.toFixed(2)} onChange={(e) => {numberChange(e.target)}}/>
            </div>
          </div>
          <div className='d-flex mt-3 justify-content-between'>
            <span className='me-3 '>PVM suma</span>
            <div className='col-8'>
              <input className='form-control' disabled value={+pvm.toFixed(2)}/>
            </div>
          </div>
          <div className='d-flex mt-3 justify-content-between'>
            <span className='me-3 '> Bendra suma (su PVM)</span>
            <div className='col-8'>
              <input className='form-control' name="bendra" value={+pvmS.toFixed(2)} onChange={(e) => numberChange(e.target)} />
            </div>
          </div>
        </div>
        <SkaiciuKonverteris
        num = {pvmS}
        />
        <div className='Bottom m-4'>Įveskite sumą be PVM arba bendrą sumą (su PVM). </div>
      </div>
      <span class="fw-bold copy fs-6"> 2022 © MartynasGit</span>
    </div>
  )
}

export default App;
