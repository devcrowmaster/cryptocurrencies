import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
  font-family: 'Bebas Neue',cursive;
  color : #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  border-radius: 10px;
  border:none;
  /* -webkit-appearance: none; */
  font-size: 1.2rem;
  appearance: none;
`;

const useCryptocurrencies = (label,initialState,cryptocurrency) =>{

  // console.log(cryptocurrency);
  //State del custom hook

  const [state, setState] = useState(initialState);


  //Lo que se mostrara en pantalla
  const SelectCrypto = ()=>(

    <Fragment>

      <Label htmlFor="currency">{label}</Label>
      <Select name="currency" id="currency" onChange={e => setState(e.target.value)} value={state} >
        <option value="">- Seleccione -</option>
        {cryptocurrency.map(option =>(
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name} >{option.CoinInfo.FullName}</option>
        ))}
      </Select>

    </Fragment>
    
  );

  //Retornar state , interfaz y funcion que modifca el state

  return [ state , SelectCrypto , setState ]  //El orden es importante

}

export default useCryptocurrencies;