import React from 'react';
import './SkaiciuKonverteris.css';


const SkaiciuKonverteris = ({num}) => {
  num = parseInt(num)

  const ones = ["", "vienas", "du", "trys", "keturi", "penki", "šeši", "septyni", "aštuoni", "devyni"]
  const teens  = ["dešimt", "vienuolika", "dvylika", "trylika", "keturiolika", "penkiolika", "šešiolika", "septyniolika", "aštuoniolika", "devyniolika", ]
  const tens = ["", "", "dvidešimt", "trisdešimt", "keturiasdešimt", "penkiasdešimt", "šešiasdešimt", "septyniasdešimt", "aštuoniasdešimt", "devyniasdešimt"]

  let convert_millions = (num) => {
    if (num >= 1000000) {
      return convert_millions(Math.floor(num / 1000000)) + (num >= 1000000 && num < 2000000 ? " milijonas " : " milijonai ") + convert_thousands(num % 1000000);
    } else {
      return convert_Tousands(num);
    }
  }

  let convert_Tousands = (num) => {
    if (num >= 10000) {
      return convert_millions(Math.floor(num / 1000)) + ( " tūkstančių ") + convert_thousands(num % 1000);
    } else {
      return convert_thousands(num);
    }
  }

  // num >= 10000 && num < 999999
  
  function convert_thousands(num) {
    if (num >= 1000) {
      return convert_hundreds(Math.floor(num / 1000)) + (num >= 1000 && num <= 1999 ? " tūkstantis " : " tūkstančiai " )+ convert_hundreds(num % 1000);
    } else {
      return convert_hundreds(num);
    }
  }
  
  function convert_hundreds(num) {
    if (num > 99) {
      return ones[Math.floor(num / 100)] + (num >= 100 && num < 200 ? " šimtas " : " šimtai ") + convert_tens(num % 100);
    } else {
      return convert_tens(num);
    }
  }
  
  function convert_tens(num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else {
      return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
  }
  
  function convert(num) {
    if (num === 0) return "nulis";
    else return convert_millions(num);
  }
  
  

  return(<div className='bendra m-4 p-4 fw-bold'>Bendra suma žodžiais: <span className='fw-normal'>{convert(num)} eur</span> </div>
)}

export default SkaiciuKonverteris;
