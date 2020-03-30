import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCryptocurrencies from '../hooks/useCryptocurrencies';
import Axios from 'axios';
import Error from './Error';



const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color .3s ease;

  &:hover{
    background-color: #326ac0;
    cursor: pointer;
  }
`;


const Form = () => {

  //State del listado de criptomonedas
  const [crypto, setCrypto] = useState([]);

  const [error, setError] = useState(false);

  const CURRENCIES = [
    {code: 'USD',name: 'Dolar de Estados Unidos'},
    {code: 'MXN',name: 'Peso Mexicano'},
    {code: 'EUR',name: 'Euro'},
    {code: 'GBP',name: 'Libra Esterlina'}
  ]

  //Utilizar useCurrency
  const [currency , SelectCurrency] = useCurrency('Elige tu Moneda','',CURRENCIES);

  //Utilizar useCryptocurrencies

  const [cryptocurrency, SelectCrypto] = useCryptocurrencies('Elige tu Criptomoneda','',crypto);

  //Ejecutar llamado a la API
  useEffect(()=>{
    const consultAPI = async () =>{
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const result = await Axios.get(url);

      // console.log(result);
      // console.log(result.data.Data);
      setCrypto(result.data.Data);


      
    }
    consultAPI();

  },[]);

  const handleSubmit = e =>{
    e.preventDefault();


    //validar si ambos campos estan llenos

    if(currency === '' || cryptocurrency === ''){
      setError(true);
      return;
    }
    //Pasar los datos al componente principal
    setError(false);
  }

  return ( 
    <form 
      onSubmit={handleSubmit}
    >
      { error ? <Error message="Todos los campos son obligatorios"/> : null}
      <SelectCurrency/>
      <SelectCrypto/>
      <Button
        type="submit"
        value="Calcular"
      />

    </form>
  );
}
 
export default Form;