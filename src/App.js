import { useState } from 'react';
import './App.css';
import SkaiciuKonverteris from './components/SkaiciuKonverteris/SkaiciuKonverteris';

function App() {

  let [suma, setSuma] = useState(0)
  let [pvm, setPvm] =useState(0)
  let [pvmS, setPvmS] = useState(0)
  let [tarifas, setTarifas] = useState(21)

  const numberChange = (target) => {
    target.value == 0 && setSuma(0) && setPvmS(0)&&setPvm(0)
    if(target.name === 'bendra'){
      setPvmS(+target.value)
    }
    if(target.name === 'suma')
      setSuma(+target.value)
  }
  const selectorOnChange = (value) => {
    setPvm(((suma / 100) * value).toFixed(2));
    setPvmS((suma + ((suma / 100) * value)).toFixed(2));
  }
  const sumaSk = (value = 0) => {
    setPvm(((value / 100) * tarifas).toFixed(2));
    setPvmS((value + ((value / 100) * tarifas)).toFixed(2));
    console.log(typeof pvmS)
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
    setPvm((value - (value / cof)).toFixed(2));
    setSuma((value / cof).toFixed(2))
  }


  return (
    <div className='pvm-skaiciuokle'>
      <div className='Header m-4 p-4'>
        <h1>PVM SKAIČIUOKLĖ</h1>
      </div>
      <div className='Main m-4 p-4'>
        <div className='box d-flex justify-content-between'>
          <span className=''>PVM tarifas</span>
          <div className='col-8 '>
            <select className='form-control' onChange={(e)=> {setTarifas(e.target.value); selectorOnChange(e.target.value)}}>
              <option value={21}>21%</option>
              <option value={9}>9%</option>
              <option value={5}>5%</option>
            </select>
          </div>
        </div>
        <div className='d-flex mt-3 justify-content-between'>
          <span className='me-3 '>Suma (be PVM)</span>
          <div className='col-8'>
            <input className='form-control' name="suma" value={suma} onChange={(e) => {numberChange(e.target); sumaSk(+e.target.value)}}/>
          </div>
        </div>
        <div className='d-flex mt-3 justify-content-between'>
          <span className='me-3 '>PVM suma</span>
          <div className='col-8'>
            <input className='form-control' disabled value={pvm}/>
          </div>
        </div>
        <div className='d-flex mt-3 justify-content-between'>
          <span className='me-3 '> Bendra suma (su PVM)</span>
          <div className='col-8'>
            <input className='form-control' name="bendra" value={pvmS} onChange={(e) => {numberChange(e.target); bendraSk(+e.target.value) }} />
          </div>
        </div>
      </div>
      <SkaiciuKonverteris
      num = {pvmS}
      />
      <div className='Bottom m-4'>Įveskite sumą be PVM arba bendrą sumą (su PVM). </div>
    </div>
  )
}

export default App;
