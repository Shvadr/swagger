import React from "react";
import { useState } from "react";

function Base64(){
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [encoded, setEncoded] = useState('');
    const [mask, setMask] = useState('');

    const Email = (e) =>{
        setEmail(e.target.value)
    }

    const Code = (e) =>{
        setCode(e.target.value)
    }

    const Encode = () => {
        const string = email + ':' + code
        const encodedString = btoa(string)
        setEncoded(encodedString)
        console.log(encoded)
        Mask()
    }

    const Mask = () => {
        const splitted = encoded.split('')
        splitted.splice(2, splitted.length - 4, "***")
        const result = splitted.join("")
        setMask(result)
        console.log(mask)
    }

    const Copy = () => {
        try{
            navigator.clipboard.writeText(encoded);
            alert('Copied!')
        } catch(err){
            alert('Oh! Something went wrong...')
            console.error('ERROR', err)
        }
    }


  return (
    <div>
            <div>Введите свой email и полученный код</div>
            <input onChange={Email} placeholder="Email"></input>
            <span>:</span>
            <input onChange={Code} placeholder="Code"></input>
            <button onClick={Encode}>Закодировать</button>
            <div>Токен: {mask}</div>
            <div><button onClick={Copy}>Копировать токен</button></div>
        </div>
  );
}

export default Base64