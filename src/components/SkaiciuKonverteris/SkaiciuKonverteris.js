import React from 'react';
import './SkaiciuKonverteris.css';


const SkaiciuKonverteris = ({num}) => {
  num = parseInt(num)

  const ones = ["", "vienas", "du", "trys", "keturi", "penki", "šesi", "septyni", "aštuoni", "devyni"]
  const teens  = ["dešimt", "vienuolika", "dvylika", "trylika", "keturiolika", "penkiolika", "šešiolika", "septyniolika", "devyniolika", ]
  const tens = ["", "", "dvidešimt", "trisdešimt", "keturiasdešimt", "penkiasdešimt", "šešiasdešimt", "septyniasdešimt", "astuoniasdešimt", "devyniasdešimt"]

  let convert_millions = (num) => {
    if (num >= 1000000) {
      return convert_millions(Math.floor(num / 1000000)) + " milijonai " + convert_thousands(num % 1000000);
    } else {
      return convert_thousands(num);
    }
  }
  
  function convert_thousands(num) {
    if (num >= 1000) {
      return convert_hundreds(Math.floor(num / 1000)) + " tukstanciai " + convert_hundreds(num % 1000);
    } else {
      return convert_hundreds(num);
    }
  }
  
  function convert_hundreds(num) {
    if (num > 99) {
      return ones[Math.floor(num / 100)] + " šimtai " + convert_tens(num % 100);
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
    if (num == 0) return "nulis";
    else return convert_millions(num);
  }
  
  

  return(<div className='bendra m-4 p-4 fw-bold'>Bendra suma žodžiais: <span className='fw-normal'>{convert(num)} <bold>eur</bold></span> </div>
)}

export default SkaiciuKonverteris;
