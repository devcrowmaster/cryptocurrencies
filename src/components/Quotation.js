import React from 'react';

import styled from '@emotion/styled';

const ResultDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;
const Paragraph = styled.p`
  font-size: 1.1rem;
  span{
    font-weight: bold;
  }

`;
const Price = styled.p`
  font-size: 2rem;
  span{
    font-weight: bold;
  }

`;

const Quotation = ({result}) => {
  if(Object.keys(result).length === 0) return null; //Si llega vacio no ejecuta nada

  console.log(result);
  return ( 
    <ResultDiv>
      <Price>El precio es: <span>{result.PRICE}</span></Price>
      <Paragraph>Precio mas alto del dia: <span>{result.HIGHDAY}</span></Paragraph>
      <Paragraph>Precio mas bajo del dia: <span>{result.LOWDAY}</span></Paragraph>
      <Paragraph>Variacion en las ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
      <Paragraph>Ultima Actualizacion: <span>{result.LASTUPDATE}</span></Paragraph>
    </ResultDiv>
  );
}
 
export default Quotation;