import React, { Fragment, useState } from 'react';

const useCurrency = (label,initialState,options) =>{

  //State del custom hook

  const [state, setState] = useState(initialState);


  //Lo que se mostrara en pantalla
  const Select = ()=>(

    <Fragment>

      <label htmlFor="currency">{label}</label>
      <select name="currency" id="currency" onChange={e => setState(e.target.value)} value={state} >
        <option value="">- Seleccione -</option>
        {options.map(option =>(
          <option key={option.code} value={option.code} >{option.name}</option>
        ))}
      </select>

    </Fragment>
    
  );

  //Retornar state , interfaz y funcion que modifca el state

  return [ state , Select , setState ]  //El orden es importante

}

export default useCurrency;