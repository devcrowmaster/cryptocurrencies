import React, { Fragment, useState } from 'react';

const useCurrency = () =>{

  //State del custom hook

  const [state, setState] = useState('');


  //Lo que se mostrara en pantalla
  const Select = ()=>(

    <Fragment>

      <label htmlFor="currency">Moneda</label>
      <select name="currency" id="currency">
        <option value="MXN">Peso Mexicano</option>
      </select>

    </Fragment>
    
  );

  //Retornar state , interfaz y funcion que modifca el state

  return [ state , Select , setState ]  //El orden es importante

}

export default useCurrency;