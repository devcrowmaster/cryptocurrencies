import React from 'react'
const Quotation = ({result}) => {
  if(Object.keys(result).length === 0) return null; //Si llega vacio no ejecuta nada

  console.log(result);
  return ( 
    <div>
      <p>El precio es: <span>{result.PRICE}</span></p>
      <p>Precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
      <p>Precio mas bajo del dia: <span>{result.LOWDAY}</span></p>
      <p>Variacion en las ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
      <p>Ultima Actualizacion: <span>{result.LASTUPDATE}</span></p>
    </div>
  );
}
 
export default Quotation;